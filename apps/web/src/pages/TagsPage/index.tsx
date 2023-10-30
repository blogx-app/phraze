import { useTheme } from "@emotion/react";
import {
  Box,
  Flex,
  PhzButton,
  PhzTable,
  PhzTableColumn,
  Text,
} from "@phraze-app/ui";

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
      <Flex gap="1rem" alignItems="center">
        <Box
          border={`${theme.colors.greyAAA} 1px dashed`}
          // maxWidth="66%"
          p={2}
          borderRadius="8px"
        >
          <Text color={theme.colors.textAAA}>
            Use tags to mark you blogs so that your visitor are able to dig more
            blogs with similar interest/topics like - management, engineering
            etc.
          </Text>
        </Box>
        <PhzButton variant="primary">Add new tag</PhzButton>
      </Flex>
      <PhzTable<Data> tableColumns={TABLE_COLUMNS} tableData={tableData} />
    </Flex>
  );
};

export default TagsPage;
