import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#00b9f5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(oid,status,reason,suggestion,time) {
  return { oid,status,reason,suggestion,time};
}

const rows = [
  createData(1,"Failed","Duplicate order id","Send a unique order id","10:18"),
  createData(2,"Failed","Incorrect order id","Send a correctorder id","10:20"),
  createData(3,"Failed","order id does'nt exist","Send a unique order id","10:8"),
  createData(4,"Failed","Duplicate order id","Send a unique order id","10:12"),
  createData(5,"Failed","Incorrect order id","Send a correct order id","10:19"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead style={{backgroundColor:'#00b9f5'}}>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Reason</StyledTableCell>
            <StyledTableCell align="right">Suggestion</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.oid}>
              <StyledTableCell component="th" scope="row">
                {row.oid}
              </StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.reason}</StyledTableCell>
              <StyledTableCell align="right">{row.suggestion}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
