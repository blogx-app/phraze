import styled from "@emotion/styled";

export const TableRoot = styled.table`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundContent};

  box-shadow:
    0 0 0 1px #333,
    ${({ theme }) => theme.shadows.card};
  border-spacing: 0;
`;

export const TableHeader = styled.thead``;

export const TableHeaderCell = styled.th`
  font-size: 14px;

  background-color: ${({ theme }) => theme.colors.tableHeaderBackground};
  color: var(--text-color);

  padding: 0.5rem;
  box-shadow: inset 0 -1px #333;

  :first-child {
    border-top-left-radius: 0.5rem;
  }

  :last-child {
    border-top-right-radius: 0.5rem;
  }
`;

export const TableRow = styled.tr`
  :last-child > td {
    box-shadow: none;
  }
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  font-weight: normal;
  color: var(--text-color);
  font-size: 14px;

  padding: 0.5rem;
  box-shadow: inset 0 -1px #282828;
`;
