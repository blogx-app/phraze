import { useTheme } from "@emotion/react";
import { PlusCircle } from "@phosphor-icons/react";
import {
  Box,
  Flex,
  PhzButton,
  PhzPaper,
  PhzTable,
  PhzTableColumn,
  Text,
} from "@phraze-app/ui";
import { PhzSearchInput } from "@phraze-app/ui";

const TABLE_COLUMNS: PhzTableColumn[] = [
  { id: "title", label: "Title", minWidth: 220 },
  { id: "createdAt", label: "Created\u00a0At", minWidth: 120 },
  {
    id: "updatedAt",
    label: "Updated At",
    minWidth: 170,
    align: "right",
    renderFn: (value: number) => value.toLocaleString("en-US"),
  },
];

type Data = Record<string, string | number>;

function createData(value: number): Data {
  return {
    title: `Tag ${value}`,
    createdAt: "12/12/12",
    updatedAt: "12/12/12",
  };
}

const tableData = [1, 2, 3, 4].map((value) => createData(value));

const TagsPage = () => {
  const theme = useTheme();

  return (
    <Flex maxWidth="48rem" flexDirection="column" gap="1rem">
      <PhzPaper>
        <Box mb={3}>
          <Text fontSize={4} mb={1} fontWeight={700}>
            Tags
          </Text>
          <Text fontSize="14px" color="textSubtle">
            Tags are used to manage blogposts
          </Text>
        </Box>
        <Flex mb={2} alignItems="center" justifyContent="space-between">
          <PhzSearchInput inputStyle={{ height: "2.5rem" }} />
          <PhzButton variant="primary">
            <PlusCircle
              size={22}
              color={theme.colors.background}
              style={{ marginRight: "4px" }}
              weight="light"
            />
            Add Tag
          </PhzButton>
        </Flex>
        <PhzTable<Data> tableColumns={TABLE_COLUMNS} tableData={tableData} />
      </PhzPaper>
    </Flex>
  );
};

export default TagsPage;
