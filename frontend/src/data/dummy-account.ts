export interface AccountData {
  myAssets: number
  todayEarning: number
  ticketNumber: number
  withdrawalAmount: number
  currency: string
}


export const dummyAccountData: AccountData = {
  myAssets: 64963.76,
  todayEarning: 0,
  ticketNumber: 20,
  withdrawalAmount: 0,
  currency: '₹'
}
