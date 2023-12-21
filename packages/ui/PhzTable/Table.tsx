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
        {tableData.map((data, idx) => {
          return (
            <TableRow key={`${data.title} + ${idx}`}>
              {tableColumns.map((column, idx2) => {
                return (
                  <TableCell
                    key={`${column.id}-${idx2}`}
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
