import { useState } from 'react';
import { Group, Button, Text } from '@mantine/core';
import { Download, Settings2 } from 'lucide-react';
import type { Card } from '../types/card';
import { CardDetailsDrawer } from './drawer/CardDetailsDrawer';
import { CardTable } from './table/CardTable';
import { useDrawerStore } from '../store/drawerStore';
import { mockCards } from '../data/mockCards';

export function CardManagement() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const { setIsOpen } = useDrawerStore();

  const handleRowClick = (card: Card) => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  return (
    <div className="p-6">
      <Text size="xl" fw={700} className="text-gray-900 mb-6">
        Card Management
      </Text>
      
      <div className="bg-white rounded-xl p-6">
        <div className="mb-6 flex justify-end items-center">
          <Group>
            <Button 
              variant="outline" 
              leftSection={<Download size={16} />}
              className="border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Download
            </Button>
            <Button 
              variant="outline" 
              leftSection={<Settings2 size={16} />}
              className="border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Manage view
            </Button>
            <Button className="bg-[#00875A] hover:bg-[#006644] text-white">
              Issue Card
            </Button>
          </Group>
        </div>

        <CardTable cards={mockCards} onRowClick={handleRowClick} />
        <CardDetailsDrawer card={selectedCard} />
      </div>
    </div>
  );
}