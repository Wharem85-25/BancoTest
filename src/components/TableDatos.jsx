import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const API = process.env.URLBASE;

const valuesColumn = (column) => {
  return <TableCell align="right">{column}</TableCell>
}

const values = (row) => {
  const cells = []
  Object.values(row).forEach(key => {
  cells.push(<TableCell align="right">{key}</TableCell>)
  })
  return cells;
}

const TableDatos = ({columns, datos}) => {
	return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          {columns.map((column) => (
                valuesColumn(column)
          ))}
              </TableRow>
        </TableHead>
        <TableBody>
          {datos.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {values(row)}
              </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDatos;
