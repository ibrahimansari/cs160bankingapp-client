import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, deposited, withdrew, net, balance) {
  id += 1;
  return { id, name, deposited, withdrew, net, balance};
}

const data = [
  createData('Monday', 100, 0, 100, 100),
  createData('Tuesday', 0, 100, -100, 0),
  createData('Wednesday', 1000, 0, 1000, 1000),
  createData('Thursday', 0, 100, -100, 900),
  createData('Friday', 0, 50, -50, 850),
  createData('Saturday', 0, 100, -100, 750),
  createData('Sunday', 300, 0, 300, 750)
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Day </TableCell>
            <TableCell align="right">Desposited</TableCell>
            <TableCell align="right">Withdrew</TableCell>
            <TableCell align="right">Net</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.deposited}</TableCell>
              <TableCell align="right">{n.withdrew}</TableCell>
              <TableCell align="right">{n.net}</TableCell>
              <TableCell align="right">{n.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
