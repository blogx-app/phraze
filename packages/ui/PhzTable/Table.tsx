import {
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "./styles";
import { PhzTableProps } from "./types";

export const PhzTable = <T extends Record<string, string | number>>({
  tableColumns,
  tableData,
}: PhzTableProps<T[]>) => {
  console.log(tableColumns, tableData);
  return (
    <TableRoot>
      <TableHeader>
        <TableRow>
          {tableColumns.map((column) => (
            <TableHeaderCell
              key={column.id}
              style={{
                textAlign: column.align || "left",
                minWidth: column.minWidth,
              }}
            >
              {column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((data, id) => {
          return (
            <TableRow>
              {tableColumns.map((column) => {
                return (
                  <TableCell
                    style={{
                      textAlign: column.align || "left",
                      minWidth: column.minWidth,
                    }}
                  >
                    {data[column.id]}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </TableRoot>
  );
};

export default PhzTable;
