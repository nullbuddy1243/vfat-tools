$(function () {
    consoleInit(main)
  });
  
const SSRP_ABI = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_claimAssessor","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_staker","type":"address"},{"indexed":true,"internalType":"address","name":"_pool","type":"address"},{"indexed":false,"internalType":"uint256","name":"_requestAmount","type":"uint256"}],"name":"LeftPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_cancelAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_cancelAmountInUno","type":"uint256"}],"name":"LogCancelWithdrawRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSRP","type":"address"},{"indexed":true,"internalType":"address","name":"_rewarder","type":"address"},{"indexed":false,"internalType":"address","name":"_currency","type":"address"}],"name":"LogCreateRewarder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSRP","type":"address"},{"indexed":true,"internalType":"address","name":"_syntheticSSRP","type":"address"},{"indexed":true,"internalType":"address","name":"_lpToken","type":"address"}],"name":"LogCreateSyntheticSSRP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_withdrawLpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_withdrawUnoAmount","type":"uint256"}],"name":"LogLeaveFromPendingSSRP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"LogLpTransferInSSRP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_migrateTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"_migratedAmount","type":"uint256"}],"name":"LogMigrate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint128","name":"_lastRewardBlock","type":"uint128"},{"indexed":false,"internalType":"uint256","name":"_lpSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_accUnoPerShare","type":"uint256"}],"name":"LogUpdatePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_claimAmount","type":"uint256"}],"name":"PolicyClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSRP","type":"address"},{"indexed":true,"internalType":"address","name":"_pool","type":"address"}],"name":"RiskPoolCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_staker","type":"address"},{"indexed":true,"internalType":"address","name":"_pool","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"StakedInPool","type":"event"},{"inputs":[],"name":"ACC_UNO_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCK_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_START_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cancelWithdrawRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAssessor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_currency","type":"address"}],"name":"createRewarder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_currency","type":"address"},{"internalType":"uint256","name":"_rewardMultiplier","type":"uint256"}],"name":"createRiskPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_factory","type":"address"}],"name":"createSyntheticSSRP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterInPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"getStakedAmountPerUser","outputs":[{"internalType":"uint256","name":"unoAmount","type":"uint256"},{"internalType":"uint256","name":"lpAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWithdrawPendingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWithdrawRequestPerUser","outputs":[{"internalType":"uint256","name":"pendingAmount","type":"uint256"},{"internalType":"uint256","name":"pendingAmountInUno","type":"uint256"},{"internalType":"uint256","name":"originUnoAmount","type":"uint256"},{"internalType":"uint256","name":"requestTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"leaveFromPending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveFromPoolInPending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lpTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"pendingUno","outputs":[{"internalType":"uint256","name":"pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"policyClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint128","name":"lastRewardBlock","type":"uint128"},{"internalType":"uint128","name":"accUnoPerShare","type":"uint128"},{"internalType":"uint256","name":"unoMultiplierPerBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"riskPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_claimAssessor","type":"address"}],"name":"setClaimAssessor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lockTime","type":"uint256"}],"name":"setLockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_migrateTo","type":"address"}],"name":"setMigrateTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minLPCapital","type":"uint256"}],"name":"setMinLPCapital","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardMultiplier","type":"uint256"}],"name":"setRewardMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setStakingStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syntheticSSRP","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"lastWithdrawTime","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"}]

const SSIP_ABI = [{"inputs":[{"internalType":"address","name":"_claimAssessor","type":"address"},{"internalType":"address","name":"_exchangeAgent","type":"address"},{"internalType":"address","name":"_capitalAgent","type":"address"},{"internalType":"address","name":"_multiSigWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_staker","type":"address"},{"indexed":true,"internalType":"address","name":"_pool","type":"address"},{"indexed":false,"internalType":"uint256","name":"_requestAmount","type":"uint256"}],"name":"LeftPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_cancelAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_cancelAmountInUno","type":"uint256"}],"name":"LogCancelWithdrawRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":true,"internalType":"address","name":"_rewarder","type":"address"},{"indexed":false,"internalType":"address","name":"_currency","type":"address"}],"name":"LogCreateRewarder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":true,"internalType":"address","name":"_syntheticSSIP","type":"address"},{"indexed":true,"internalType":"address","name":"_lpToken","type":"address"}],"name":"LogCreateSyntheticSSIP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_riskPool","type":"address"},{"indexed":false,"internalType":"uint256","name":"_withdrawLpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_withdrawUnoAmount","type":"uint256"}],"name":"LogLeaveFromPendingSSIP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"LogLpTransferInSSIP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_migrateTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"_migratedAmount","type":"uint256"}],"name":"LogMigrate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":true,"internalType":"address","name":"_capitalAgent","type":"address"}],"name":"LogSetCapitalAgent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":true,"internalType":"address","name":"_claimAssessor","type":"address"}],"name":"LogSetClaimAssessor","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_exchangeAgent","type":"address"}],"name":"LogSetExchangeAgent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":false,"internalType":"uint256","name":"_lockTime","type":"uint256"}],"name":"LogSetLockTime","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":true,"internalType":"address","name":"_migrateTo","type":"address"}],"name":"LogSetMigrateTo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":false,"internalType":"uint256","name":"_minLPCapital","type":"uint256"}],"name":"LogSetMinLPCapital","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":false,"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"LogSetRewardMultiplier","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":false,"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"LogSetStakingStartTime","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint128","name":"_lastRewardBlock","type":"uint128"},{"indexed":false,"internalType":"uint256","name":"_lpSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_accUnoPerShare","type":"uint256"}],"name":"LogUpdatePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_claimAmount","type":"uint256"}],"name":"PolicyClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_SSIP","type":"address"},{"indexed":true,"internalType":"address","name":"_pool","type":"address"}],"name":"RiskPoolCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_staker","type":"address"},{"indexed":true,"internalType":"address","name":"_pool","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"StakedInPool","type":"event"},{"inputs":[],"name":"ACC_UNO_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCK_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_START_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cancelWithdrawRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"capitalAgent","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimAssessor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_currency","type":"address"}],"name":"createRewarder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_currency","type":"address"},{"internalType":"uint256","name":"_rewardMultiplier","type":"uint256"},{"internalType":"uint256","name":"_SCR","type":"uint256"}],"name":"createRiskPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_multiSigWallet","type":"address"},{"internalType":"address","name":"_factory","type":"address"}],"name":"createSyntheticSSIP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterInPool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"getStakedAmountPerUser","outputs":[{"internalType":"uint256","name":"unoAmount","type":"uint256"},{"internalType":"uint256","name":"lpAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWithdrawPendingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWithdrawRequestPerUser","outputs":[{"internalType":"uint256","name":"pendingAmount","type":"uint256"},{"internalType":"uint256","name":"pendingAmountInUno","type":"uint256"},{"internalType":"uint256","name":"originUnoAmount","type":"uint256"},{"internalType":"uint256","name":"requestTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"leaveFromPending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveFromPoolInPending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lpTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrateTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"pendingUno","outputs":[{"internalType":"uint256","name":"pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_policyId","type":"uint256"},{"internalType":"bool","name":"_isFinished","type":"bool"}],"name":"policyClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint128","name":"lastRewardBlock","type":"uint128"},{"internalType":"uint128","name":"accUnoPerShare","type":"uint128"},{"internalType":"uint256","name":"unoMultiplierPerBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"riskPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_capitalAgent","type":"address"}],"name":"setCapitalAgent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_claimAssessor","type":"address"}],"name":"setClaimAssessor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_exchangeAgent","type":"address"}],"name":"setExchangeAgent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lockTime","type":"uint256"}],"name":"setLockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_migrateTo","type":"address"}],"name":"setMigrateTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minLPCapital","type":"uint256"}],"name":"setMinLPCapital","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardMultiplier","type":"uint256"}],"name":"setRewardMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setStakingStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syntheticSSIP","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"lastWithdrawTime","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"}]

  const SSRP_POOLS = [
    { address: '0x87e1f628225c170a5C0Bf895580686430DEb3322', type: 'SSRP', token: 'UNO' }
  ]

  const SSIP_POOLS = [
    { address: '0x1342b3dAec4f54F5Af01Aaa34839626f959B362a', type: 'SSIP', token: 'ETH' },
    { address: '0x82E107d2b1Be4347b55FBba4a6fB99669dF3ceb1', type: 'SSIP', token: 'UNO' }
  ]
  

  async function loadSSRPPool(App, pool) {
    const stakingPool = new ethers.Contract(pool.address, SSRP_ABI, App.provider);

    const stakingInfo = await stakingPool.getStakedAmountPerUser(App.YOUR_ADDRESS);// / 10 ** 18;

    const stakingAmount = stakingInfo.unoAmount / 10 ** 18;

    const stakingPoolScanUrl = `<a href='https://bscscan.com/address/${pool.address}' target='_blank'>${pool.token}_${pool.type}</a>`;

    _print(`You are staking a total of ${stakingAmount.toFixed(6)}${pool.token} at ${stakingPoolScanUrl} pool.\n`);
  }

  async function loadSSIPPool(App, pool) {
    const stakingPool = new ethers.Contract(pool.address, SSIP_ABI, App.provider);

    const stakingInfo = await stakingPool.getStakedAmountPerUser(App.YOUR_ADDRESS);// / 10 ** 18;

    const stakingAmount = stakingInfo.unoAmount / 10 ** 18;

    const stakingPoolScanUrl = `<a href='https://bscscan.com/address/${pool.address}' target='_blank'>${pool.token}_${pool.type}</a>`;

    _print(`You are staking a total of ${stakingAmount.toFixed(6)}${pool.token} at ${stakingPoolScanUrl} pool.\n`);
  }
  
  async function main() {
    const App = await init_ethers();
  
    _print(`Initialized ${App.YOUR_ADDRESS}`);
    _print("Reading smart contracts...\n");
  
  
    for (const pool of SSRP_POOLS) {
      await loadSSRPPool(App, pool);
    }

    for (const pool of SSIP_POOLS) {
      await loadSSIPPool(App, pool);
    }
  
    hideLoading();
  }
  