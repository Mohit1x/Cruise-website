export interface Ticket {
  id: string
  type: string
  route: {
    from: string
    to: string
  }
  ticketNumber: string
  totalAmount: number
  totalCommission: number
  date: string
  status: 'completed' | 'pending' | 'cancelled'
  currency: string
}

export type TabType = 'all' | 'pending' | 'completed'
