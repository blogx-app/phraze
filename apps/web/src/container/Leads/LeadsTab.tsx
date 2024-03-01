import { Box, PhzDataTable, PhzTableColumn } from "@phraze-app/ui";
import { useTheme } from "@emotion/react";

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

export const LeadsTab = () => {
  const theme = useTheme();

  return (
    <Box>
      <PhzDataTable
        tableColumns={TABLE_COLUMNS}
        tableData={tableData}
        tableTitle="Add Leads"
        tableDescription="All the leads collected on the blog appear here"
      />
    </Box>
  );
};

export default LeadsTab;
