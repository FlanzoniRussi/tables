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

function createData(name, age, cpf, adress, consult) {
  return { name, age, cpf, adress, consult};
}

const rows = [
  createData('Fabiano Lanzoni', 29, '000.000.000-00', 'Rua de teste', 'Cardiologista'),
  createData('Fabiano Lanzoni', 29, '000.000.000-00', 'Rua de teste', 'Cardiologista'),
  createData('Fabiano Lanzoni', 29, '000.000.000-00', 'Rua de teste', 'Cardiologista'),

];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do paciente</TableCell>
            <TableCell align="center">Idade</TableCell>
            <TableCell align="center">CPF</TableCell>
            <TableCell align="center">Endereço</TableCell>
            <TableCell align="center">Consulta</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.cpf}</TableCell>
              <TableCell align="center">{row.adress}</TableCell>
              <TableCell align="center">{row.consult}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}