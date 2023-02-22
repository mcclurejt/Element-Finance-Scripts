import { BytesLike, ethers } from 'ethers'
import { LedgerSigner } from '@ethersproject/hardware-wallets'

// Artifacts
import timelockData from '../../artifacts/council/contracts/features/Timelock.sol/Timelock.json'
import proxyData from '../../artifacts/council/contracts/simpleProxy.sol/SimpleProxy.json'
import { FrozenLockingVaultProxy, FrozenVestingVaultProxy } from '../helpers/addresses'
import { CoreVoting__factory } from '../../typechain/council/factories/CoreVoting__factory'

// Helpers
import * as addresses from '../helpers/addresses'
import { createCallHash } from '../helpers/hashing'
import { getExpiry } from '../helpers/expiry'

async function proposal() {
  // Setup your signer
  // Using a ledger, connect to metamask
  const providerUrl = ''
  const provider = new ethers.providers.JsonRpcProvider(providerUrl)
  const signer = new LedgerSigner(provider, undefined, "m/44'/60'/3'/0/0")

  // Setup your interfaces
  const timelockInterface = new ethers.utils.Interface(timelockData.abi) // TimeLock is like sudo, you always need it.
  const proxyInterface = new ethers.utils.Interface(proxyData.abi)

  // New Params
  const LOCKING_VAULT_UPGRADE_ADDRESS = ''
  const VESTING_VAULT_PROXY_ADDRESS = ''

  // Connect the signer to the coreVotingContract, this is where your proposals will fed into.
  const coreVoting = CoreVoting__factory.connect(addresses.CoreVoting, signer)

  // --- main egp logic ---
  /**
   * 1. Upgrade the locking vault to the non-frozen contract address
   * 2. Upgrade the vesting vault to the non-frozen contract address
   */
  const lockingVaultUpgradeCalldata = proxyInterface.encodeFunctionData('upgradeProxy', [LOCKING_VAULT_UPGRADE_ADDRESS])
  const vestingVaultUpgradeCalldata = proxyInterface.encodeFunctionData('upgradeProxy', [VESTING_VAULT_PROXY_ADDRESS])

  /**
   * Take the calldata and convert it to the callhash.
   * Param BytesLike[] - An arrary of encoded calldata
   * Param string[] - An array of addresses, index must match that from the first parameter
   * Notes:
   * - You can pass in as many "chained calls" as you like, just match the calldata to the addresses in the two parameters.
   */
  const callHash = await createCallHash(
    [lockingVaultUpgradeCalldata, vestingVaultUpgradeCalldata], // calldata
    [FrozenLockingVaultProxy, FrozenVestingVaultProxy] // each targets its respective proxy
  )

  /**
   * Encode proposal to be sent to the core voting contract
   * Notes:
   * - Simple add the multiple call hashes into the array.
   * - You can have multiple callHashes, if a proposal affects multiple different vaults or other DAO contracts.
   * - eg: Proposal updates a voting threshold, and moves funds from the treasury. This would be two callHashes.
   */
  const calldataCv = timelockInterface.encodeFunctionData('registerCall', [callHash])

  /**
   * Creates the expiery for the proposal, no need to modify.
   * Default: 14 days after the proposal begins (unit is block number)
   */
  const expiryDate = await getExpiry(provider, 14)

  /**
   * The coreVoting contract registers the call with the timelock
   * - Supply all the vaults where you wish voting power to originate from.
   */
  const tx = await coreVoting.proposal(
    [FrozenLockingVaultProxy, FrozenVestingVaultProxy], // Forzen vaults because all ELFI lives there
    ['0x', '0x'], // Extra data - typically 0x
    [addresses.Timelock], // You always call the timelock, the timelock is "sudo" it controls the DAO contracts.
    [calldataCv], // load in the call data
    expiryDate, // Last call for proposal
    0 // This is your vote. change if you please.
  )

  // --- end main EGP logic ---

  await tx.wait()

  console.log({
    lockingVaultUpgradeCalldata,
    vestingVaultUpgradeCalldata,
    callHash,
    calldataCv,
    proposal: tx.data,
  })
}

async function main() {
  const result = await proposal()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
