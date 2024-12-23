export interface Card {
  id: string;
  cardHolder: string;
  email: string;
  cardNumber: string;
  status: 'ACTIVATED' | 'ISSUED' | 'BLOCKED' | 'EXPIRED' | 'TERMINATED' | 'REISSUED';
  balance: number;
  wallet: string;
  avatar: string;
}