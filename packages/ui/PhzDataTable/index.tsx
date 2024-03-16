import { PlusCircle } from "@phosphor-icons/react";
import { Box, Flex } from "../Box";
import PhzButton from "../PhzButton";
import { PhzPaper } from "../PhzPaper";
import { PhzSearchInput } from "../PhzSearchInput";
import { PhzTable } from "../PhzTable";
import Text from "../Text";
import { useTheme } from "@emotion/react";

// extend PhzTableProps, figure out the typing later on.
export interface PhzDataTableProps {
  tableColumns: any;
  tableData: any;
  tableTitle: string;
  tableDescription: string;
  tableSearchActionPlaceholder?: React.ReactNode;
}

export const PhzDataTable = ({
  tableColumns,
  tableData,
  tableTitle,
  tableDescription,
  tableSearchActionPlaceholder,
}: PhzDataTableProps) => {
  const theme = useTheme();

  return (
    <PhzPaper>
      <Box mb={3}>
        <Text fontSize={4} mb={1} fontWeight={700}>
          {tableTitle}
        </Text>
        <Text fontSize="14px" color="textSubtle">
          {tableDescription}
        </Text>
      </Box>
      <Flex
        mb={2}
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
      >
        <PhzSearchInput inputStyle={{ height: "2.5rem" }} />
        {tableSearchActionPlaceholder ? tableSearchActionPlaceholder : <></>}
      </Flex>
      <PhzTable tableColumns={tableColumns} tableData={tableData} />
    </PhzPaper>
  );
};

export default PhzDataTable;
