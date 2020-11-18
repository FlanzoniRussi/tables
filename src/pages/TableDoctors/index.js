import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, age, specialty, clinic, adress) {
  return { name, age, specialty, clinic, adress };
}

const rows = [
  createData('Mauro Coelho', 52, 'Cardiologista', 'Clinica do coração', 'Av do coração, 500'),
  createData('Ronaldo Peireira', 45, 'Cardiologista', 'Clinica do coração', 'Av do coração, 500'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do médico</TableCell>
            <TableCell align="center">Idade</TableCell>
            <TableCell align="center">Especialidade</TableCell>
            <TableCell align="center">Clínica</TableCell>
            <TableCell align="center">Endereço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.specialty}</TableCell>
              <TableCell align="center">{row.clinic}</TableCell>
              <TableCell align="center">{row.adress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}