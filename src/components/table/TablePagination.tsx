import { Group, Pagination, Select, Text } from '@mantine/core';
import { usePaginationStore } from '../../store/paginationStore';

interface TablePaginationProps {
  total: number;
}

export function TablePagination({ total }: TablePaginationProps) {
  const { page, itemsPerPage, setPage, setItemsPerPage } = usePaginationStore();
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="flex justify-end mt-4">
      <Group gap="sm">
        <Select
          value={itemsPerPage.toString()}
          onChange={(value) => setItemsPerPage(Number(value))}
          data={['5', '10', '20', '50'].map((value) => ({
            value,
            label: `${value} per page`,
          }))}
          size="sm"
          className="w-32"
        />
        <Text size="sm" c="dimmed">|</Text>
        <Pagination
          value={page}
          onChange={setPage}
          total={totalPages}
          size="sm"
          withEdges
        />
      </Group>
    </div>
  );
}