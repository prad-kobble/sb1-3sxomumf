import { Text, Group, Stack, Badge } from '@mantine/core';
import type { Card } from '../../types/card';
import { getStatusColor } from '../utils/statusColors';

interface CardInfoProps {
  card: Card;
}

export function CardInfo({ card }: CardInfoProps) {
  return (
    <Stack gap="lg">
      <div>
        <Text size="sm" c="dimmed">Cardholder</Text>
        <Text size="lg" fw={500} c="dark">{card.cardHolder}</Text>
        <Text size="sm" c="dimmed">{card.email}</Text>
      </div>

      <div>
        <Text size="sm" c="dimmed">Card Number</Text>
        <Text size="lg" fw={500} c="dark">{card.cardNumber}</Text>
      </div>

      <div>
        <Text size="sm" c="dimmed">Status</Text>
        <Badge color={getStatusColor(card.status)} variant="light" size="lg">
          {card.status}
        </Badge>
      </div>

      <div>
        <Text size="sm" c="dimmed">Balance</Text>
        <Group>
          <Text size="lg" fw={500} c="dark">${card.balance.toLocaleString()}</Text>
          <Text size="sm" c="dimmed">{card.wallet}</Text>
        </Group>
      </div>
    </Stack>
  );
}