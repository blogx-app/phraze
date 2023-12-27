import { useTheme } from "@emotion/react";
import { PlusCircle } from "@phosphor-icons/react";
import {
  Flex,
  PhzButton,
  PhzDataTable,
  PhzTableColumn,
  Text,
} from "@phraze-app/ui";
import AddTagsDialog from "./AddTags.Dialog";

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
      <PhzDataTable
        tableColumns={TABLE_COLUMNS}
        tableData={tableData}
        tableTitle="Tags"
        tableDescription="Tags are used to manage blogposts"
        tableSearchActionPlaceholder={<AddTagsDialog />}
      />
    </Flex>
  );
};

export default TagsPage;
