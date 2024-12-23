import { Paper, Text, Group, ActionIcon } from '@mantine/core';
import { X } from 'lucide-react';
import type { Card } from '../../types/card';
import { useDrawerStore } from '../../store/drawerStore';
import { CardInfo } from './CardInfo';

interface CardDetailsDrawerProps {
  card: Card | null;
}

export function CardDetailsDrawer({ card }: CardDetailsDrawerProps) {
  const { isOpen, setIsOpen } = useDrawerStore();
  
  if (!card) return null;

  return (
    <Paper
      className={`fixed top-16 right-0 h-[calc(100vh-64px)] w-[600px] shadow-xl transition-transform duration-300 border-l bg-white border-gray-200 z-[45] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="relative h-full">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-[2]">
          <Group justify="space-between">
            <Text size="xl" fw={700} c="dark">Card Details</Text>
            <ActionIcon 
              variant="subtle"
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-100 text-gray-700"
              size="lg"
            >
              <X size={20} />
            </ActionIcon>
          </Group>
        </div>
        
        <div className="p-6">
          <CardInfo card={card} />
        </div>
      </div>
    </Paper>
  );
}