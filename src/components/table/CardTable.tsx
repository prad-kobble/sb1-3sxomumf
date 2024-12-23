import { Table, Group, Text, Badge } from '@mantine/core';
import type { Card } from '../../types/card';
import { getStatusColor } from '../utils/statusColors';
import { TablePagination } from './TablePagination';
import { usePaginationStore } from '../../store/paginationStore';

interface CardTableProps {
  cards: Card[];
  onRowClick: (card: Card) => void;
}

export function CardTable({ cards, onRowClick }: CardTableProps) {
  const { page, itemsPerPage } = usePaginationStore();
  
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCards = cards.slice(startIndex, endIndex);

  const rows = paginatedCards.map((card) => (
    <Table.Tr 
      key={card.id} 
      onClick={() => onRowClick(card)} 
      className="cursor-pointer hover:bg-gray-50"
    >
      <Table.Td>
        <div>
          <Text size="sm" fw={500} c="dark">{card.cardHolder}</Text>
          <Text size="xs" c="dimmed">{card.email}</Text>
        </div>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c="dark">{card.cardNumber}</Text>
      </Table.Td>
      <Table.Td>
        <Badge color={getStatusColor(card.status)} variant="light">
          {card.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <Text size="sm" fw={500} c="dark">${card.balance.toLocaleString()}</Text>
          <Text size="xs" c="dimmed">{card.wallet}</Text>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <TablePagination total={cards.length} />
      <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <Table verticalSpacing="sm">
          <Table.Thead className="bg-[#1A1B1E]">
            <Table.Tr>
              <Table.Th className="text-white first:rounded-tl-xl">Cardholder</Table.Th>
              <Table.Th className="text-white">Card</Table.Th>
              <Table.Th className="text-white">Status</Table.Th>
              <Table.Th className="text-white last:rounded-tr-xl">Balance</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
}