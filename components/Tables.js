 import React,{useContext,useState} from 'react'
import {TableHead, TableBody, TableCell, TableRow, Table}
 from '@material-ui/core'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {multiStateContext} from './StateContext'
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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



const Tables = ({tableList})=> {

  const {pageAttributes,setPageAttributes } = useContext(multiStateContext);

  const [buttonState,setButtonState]= useState({ nextButtonState : false, PrevButtonState:true })

    dateconverter(tableList);
    const classes = useStyles();

    const pagesizeChangeHandler = (e)=>{

       setPageAttributes({...pageAttributes,pageno: 1,pagesize: parseInt(e.target.value),totalpagecount: Math.ceil((pageAttributes.docCount/parseInt(e.target.value)))}) 
      
 }

const prevPageHandler =()=>{
  setPageAttributes({...pageAttributes ,pageno: pageAttributes.pageno-1});
 }

const nextPageHandler =()=>{
    setPageAttributes({...pageAttributes ,pageno: pageAttributes.pageno+1});
  }




  return (
      <div style={{marginLeft: 60, marginRight: 60}}>

<Paper className={classes.root} style={{width: '100%', justifyContent: 'center',marginBottom:'20px'}}>
   <div>
     
   <button onClick={prevPageHandler} disabled={pageAttributes.pageno ===1} >Prev page</button>
  <span>     </span>
  <button onClick={nextPageHandler} disabled={pageAttributes.pageno === pageAttributes.totalpagecount} >Next page</button>
  <span>  </span>
  TOTAL DocCount {pageAttributes.docCount}    TOTAL PageCount {pageAttributes.totalpagecount} 
  <FormGroup> <Input type="select" name="select" id="exampleSelect" 
                   onChange={pagesizeChangeHandler} >
                        <option>5</option>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>

                    </Input>
                    </FormGroup>
   </div>
                <Table border="1" style={{width: '100%', justifyContent: 'center'}} size="small" 
              aria-label="caption label">
                 <TableHead>
                     <TableRow style={{backgroundColor:'#00b9f5',color:'alice'}} >
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