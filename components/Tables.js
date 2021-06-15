 import React,{useContext,useState} from 'react'
import {TableHead, TableBody, TableCell, TableRow, Table}
 from '@material-ui/core'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
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

  const {fetchData,pageAttributes,setPageAttributes } = useContext(multiStateContext);

  const [buttonState,setButtonState]= useState({ nextButtonState : false, PrevButtonState:true })

    dateconverter(tableList);
    const classes = useStyles();

    const pagesizeChangeHandler = (e)=>{

       setPageAttributes({...pageAttributes,pagesize: parseInt(e.target.value)})  
 }

  const prevPageHandler =()=>{
    if(pageAttributes.pageno>2  ){
    setPageAttributes({...pageAttributes ,pageno: pageAttributes.pageno-1});
    setButtonState({...buttonState,nextButtonState:false})
  }

  if(pageAttributes.pageno===2)
  {   setPageAttributes({...pageAttributes ,pageno: pageAttributes.pageno-1});
    setButtonState({...buttonState,PrevButtonState:true})}

  }



  const nextPageHandler =()=>{
     if(pageAttributes.pageno*pageAttributes.pagesize<pageAttributes.docCount)
    {
      setPageAttributes({...pageAttributes ,pageno: pageAttributes.pageno+1});
       setButtonState({...buttonState,PrevButtonState:false})
    }
    else
  { setButtonState({...buttonState,PrevButtonState:false})}
  
      if((pageAttributes.pageno+1)*pageAttributes.pagesize>pageAttributes.docCount)
      {
        setButtonState({...buttonState,nextButtonState:true})
        
      }

    }

    console.log("tableList in table is ",tableList)

    console.log("length is ",tableList.length)
    return (
      <div style={{marginLeft: 60, marginRight: 60}}>

<Paper className={classes.root} >
   <div>
     
   <button onClick={prevPageHandler} disabled={buttonState.PrevButtonState} >Prev page</button>
  <span>     </span>
  <button onClick={nextPageHandler} disabled={buttonState.nextButtonState} >Next page</button>
  <span>  </span>
  {pageAttributes.docCount} 
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