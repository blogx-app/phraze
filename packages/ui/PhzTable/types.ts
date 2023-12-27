export interface PhzTableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  renderFn?: (value: number) => React.ReactNode;
}
export interface PhzTableProps<K extends Record<string, string | number>[]> {
  tableColumns: PhzTableColumn[];
  tableData: K;
}
