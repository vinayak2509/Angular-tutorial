export interface Ticket {
  id: string;
  title: string;
  requests: string;
  status: 'open' | 'closed';
}
