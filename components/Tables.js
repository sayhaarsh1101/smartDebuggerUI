 import React from 'react'
import {TableHead, TableBody, TableCell, TableRow, Table}
 from '@material-ui/core'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


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

const Tables = ({tableList}) => {
    const classes = useStyles();
    
    console.log("tableList in table is ",tableList)

    console.log("length is ",tableList.length)
    return (
        <div style={{marginLeft: 60, marginRight: 60}}>

            <Paper className={classes.root} >
                <Table border="1" style={{width: '100%', justifyContent: 'center'}} size="small" 
              aria-label="caption label">
                 <TableHead>
                     <TableRow style={{backgroundColor:'burlywood',color:'alice'}} >
                         <TableCell>mid</TableCell>
                         <TableCell>status</TableCell>
                         <TableCell>reason</TableCell>
                         <TableCell>timestamp</TableCell>
                         <TableCell>systemname</TableCell>
                         </TableRow>
                 </TableHead>
                  <TableBody>
                      {tableList.map(data=>(
                      <TableRow key={data.id}>
                      <TableCell>{data.mid}</TableCell>
                      <TableCell>{data.status}</TableCell>
                      <TableCell>{data.reason}</TableCell>
                      <TableCell>{data.timestamp}</TableCell>
                      <TableCell>{data.systemname}</TableCell>
            
                      </TableRow>
                      ))}
                  </TableBody>
              </Table>
            </Paper>
        </div>
    )
}

export default Tables 