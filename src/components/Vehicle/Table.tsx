import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { GroundProps } from "@data/final.schema";

function createData(name: string, front: number, side: number, back: number) {
  return { name, front, side, back };
}

export default function ArmorTable(props: { vehicle: GroundProps }): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { vehicle } = props;

  const rows = [createData("Hull", 1300, 400, 200), createData("Turret", 1250, 300, 540)];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Armour (Stat card)</TableCell>
            <TableCell align="right">Front</TableCell>
            <TableCell align="right">Side</TableCell>
            <TableCell align="right">Back</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.front}</TableCell>
              <TableCell align="right">{row.side}</TableCell>
              <TableCell align="right">{row.back}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
