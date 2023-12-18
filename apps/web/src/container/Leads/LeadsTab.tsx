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
import PhzSearchInput from "@phraze-app/ui/PhzSearchInput/PhzSearchInput";

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
      <PhzPaper>
        <Box mb={4}>
          <Text fontSize={4} mb={1} fontWeight={500}>
            Leads
          </Text>
          <Text fontSize={2} color="textSubtle">
            All the leads collected on the website will appear here
          </Text>
        </Box>
        <Box mb={2}>
          <PhzSearchInput inputStyle={{ height: "2.5rem" }} />
        </Box>
        <PhzTable tableColumns={TABLE_COLUMNS} tableData={tableData} />
      </PhzPaper>
    </Box>
  );
};

export default LeadsTab;
