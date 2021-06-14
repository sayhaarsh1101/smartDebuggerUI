 import React from 'react'
import {TableHead, TableBody, TableCell, TableRow, Table}
 from '@material-ui/core'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60
  },
  tableCell: {
    width: 80,
    height: 40
  },
  input: {
    width: 80,
    height: 40
  }
}));

async  function  dateconverter (tableList){
  tableList.map(data=>
  {
    const dateObject = new Date(data.timestamp)
    const dateAsString = dateObject.toLocaleString()
      data.timestamp = dateAsString
  })
  return tableList;
  }

const Tables = ({tableList}) => {

    dateconverter(tableList);
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableList.length - page * rowsPerPage);
    console.log("tableList in table is ",tableList)

    console.log("length is ",tableList.length)
    return (
      <div style={{marginLeft: 60, marginRight: 60}}>

      <Paper className={classes.root} >
          <Table border="1" style={{width: '100%', justifyContent: 'center'}} size="small" 
        aria-label="caption label">
           <TableHead>
               <TableRow style={{backgroundColor: '#00b9f5',color:'alice'}} >
                   <TableCell>mid</TableCell>
                   <TableCell>status</TableCell>
                   <TableCell>reason</TableCell>
                   <TableCell>timestamp</TableCell>
                   <TableCell>systemname</TableCell>
                   </TableRow>
           </TableHead>
            <TableBody>
                {tableList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(data=>(
                <TableRow key={data.id}>
                <TableCell>{data.mid}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>{data.reason}</TableCell>
                <TableCell>{data.timestamp}</TableCell>
                <TableCell>{data.systemname}</TableCell>
      
                </TableRow>
                ))} {emptyRows > 0 && (
                  <TableRow style={{ height: 50 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
            </TableBody>
        </Table>
        <TablePagination
  rowsPerPageOptions={[5, 10, 25]}
  component="div"
  count={tableList.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onChangePage={handleChangePage}
  onChangeRowsPerPage={handleChangeRowsPerPage}
/>
            </Paper>
        </div>
    )
}

export default Tables 