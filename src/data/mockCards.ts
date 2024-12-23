import type { Card } from '../types/card';

const generateCardNumber = () => {
  return Array(4).fill(0).map(() => 
    Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  ).join(' ');
};

const wallets = ['USD Wallet', 'EUR Wallet', 'GBP Wallet', 'JPY Wallet'];
const statuses: Card['status'][] = ['ACTIVATED', 'ISSUED', 'BLOCKED', 'EXPIRED', 'TERMINATED', 'REISSUED'];

export const mockCards: Card[] = Array(20).fill(null).map((_, index) => ({
  id: (index + 1).toString(),
  cardHolder: [
    'Sarah Harrison',
    'Nick Stevens',
    'Liam Byrne',
    'Emma Thompson',
    'Michael Chen',
    'Sofia Rodriguez',
    'James Wilson',
    'Olivia Brown',
    'William Taylor',
    'Isabella Martinez',
    'Lucas Anderson',
    'Ava Garcia',
    'Ethan Wright',
    'Mia Johnson',
    'Alexander Lee',
    'Emily Davis',
    'Daniel Kim',
    'Sophie Turner',
    'David Miller',
    'Grace Wilson'
  ][index],
  email: `user${index + 1}@example.com`,
  cardNumber: generateCardNumber(),
  status: statuses[Math.floor(Math.random() * statuses.length)],
  balance: parseFloat((Math.random() * 10000).toFixed(2)),
  wallet: wallets[Math.floor(Math.random() * wallets.length)],
  avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
}));