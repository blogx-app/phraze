import {
  Box,
  Flex,
  PhzPaper,
  PhzTable,
  PhzTableColumn,
  Text,
} from "@phraze-app/ui";
import LeadsIcon from "./icons/AudienceIcon";
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
      <Flex gap="1rem" mb={3}>
        <PhzPaper>
          <Box>
            <LeadsIcon />
          </Box>
          <Text fontSize="2rem" fontWeight="bold" as="span" mr={2}>
            4
          </Text>
          <Text as="span">Total Leads </Text>
          <Text fontSize="0.75rem" color={theme.colors.textSubtle}>
            Last lead: 5s ago
          </Text>
        </PhzPaper>
      </Flex>
      <PhzTable tableColumns={TABLE_COLUMNS} tableData={tableData} />;
    </Box>
  );
};

export default LeadsTab;
