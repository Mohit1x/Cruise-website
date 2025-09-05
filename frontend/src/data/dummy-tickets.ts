import type { Ticket } from "@/types/Ticket";

export const dummyTickets: Ticket[] = [
  {
    id: '1',
    type: 'Economy-Class Ticket',
    route: { from: 'SIN', to: 'FRA' },
    ticketNumber: 'UB2506041159147662',
    totalAmount: 35042.00,
    totalCommission: 630.76,
    date: '2025-06-04',
    status: 'completed',
    currency: '₹'
  },
  {
    id: '2',
    type: 'Economy-Class Ticket',
    route: { from: 'BOM', to: 'BKK' },
    ticketNumber: 'UB2506041159032218',
    totalAmount: 14571.00,
    totalCommission: 784.28,
    date: '2025-06-04',
    status: 'completed',
    currency: '₹'
  },
  {
    id: '3',
    type: 'Economy-Class Ticket',
    route: { from: 'SIN', to: 'PHN' },
    ticketNumber: 'UB2506041158406870',
    totalAmount: 10032.00,
    totalCommission: 180.58,
    date: '2025-06-04',
    status: 'completed',
    currency: '₹'
  },
  {
    id: '4',
    type: 'Economy-Class Ticket',
    route: { from: 'DXB', to: 'SHA' },
    ticketNumber: 'UB2506041158123456',
    totalAmount: 25000.00,
    totalCommission: 450.00,
    date: '2025-06-04',
    status: 'completed',
    currency: '₹'
  },
  {
    id: '5',
    type: 'Economy-Class Ticket',
    route: { from: 'DEL', to: 'NYC' },
    ticketNumber: 'UB2506041157987654',
    totalAmount: 45000.00,
    totalCommission: 810.00,
    date: '2025-06-03',
    status: 'pending',
    currency: '₹'
  }
]
