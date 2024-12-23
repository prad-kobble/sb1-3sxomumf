import { Stack } from '@mantine/core';
import { 
  Home, 
  CreditCard, 
  Users, 
  Settings,
  MessageSquare,
  Wallet
} from 'lucide-react';
import { NavLink } from './NavLink';
import { useNavigationStore } from '../../store/navigationStore';

export function Navigation() {
  const { collapsed } = useNavigationStore();

  return (
    <Stack gap="xs" p="md">
      <NavLink icon={Home} label={collapsed ? '' : 'Dashboard'} />
      <NavLink icon={CreditCard} label={collapsed ? '' : 'Card Management'} active />
      <NavLink icon={Users} label={collapsed ? '' : 'Users'} />
      <NavLink icon={Wallet} label={collapsed ? '' : 'Wallets'} />
      <NavLink icon={MessageSquare} label={collapsed ? '' : 'Messages'} />
      <NavLink icon={Settings} label={collapsed ? '' : 'Settings'} />
    </Stack>
  );
}