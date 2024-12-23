import { NavLink as MantineNavLink } from '@mantine/core';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function NavLink({ icon: Icon, label, active, onClick }: NavLinkProps) {
  return (
    <MantineNavLink
      label={label}
      leftSection={<Icon size={16} />}
      active={active}
      onClick={onClick}
      className={`rounded-md ${
        active 
          ? 'bg-[#00875A] hover:bg-[#006644] text-white' 
          : 'hover:bg-gray-100 text-gray-700'
      }`}
      classNames={{
        label: active ? 'text-white' : 'text-gray-700',
        section: active ? 'text-white' : 'text-gray-700',
      }}
    />
  );
}