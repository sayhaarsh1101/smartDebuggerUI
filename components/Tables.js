 import React,{useContext,useState} from 'react'
import {TableHead, TableBody, TableCell, TableRow, Table}
 from '@material-ui/core'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {multiStateContext} from './StateContext'
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

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

<Paper className={classes.root} style={{marginBottom:'3%'}}>
   <div style={{display:'flex',height:'0.5%'}}>
     
   
 <div style={{display:'flex',marginLeft:'1%'}}> 
   <div style={{marginRight:'5%'}}><h6>DocCount</h6> <div style={{fontWeight:'400'}} >{pageAttributes.docCount} </div> </div> 
   <div style={{marginRight:'5%'}}><h6>PageCount</h6><div style={{fontWeight:'400'}}>{pageAttributes.totalpagecount} </div></div>
  <div style={{display:'flex', marginRight:'10%'}}>
    <h6 style={{marginRight:'5%'}}>PageSize</h6> 
  
   <FormGroup style={{width:'50px'}}> <Input type="select" name="select" id="exampleSelect" 
                   onChange={pagesizeChangeHandler} >
                        <option>5</option>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>

                    </Input>
                    </FormGroup>
                    
                    </div>
                    </div>
   <div style={{marginLeft:'58%',display:'flex'}}>
   {/*  <Button onClick={prevPageHandler} disabled={pageAttributes.pageno ===1} variant="outlined" color="primary" style={{marginRight:'5%',height:'35px'}}>Prev</Button>
  <Button onClick={nextPageHandler} disabled={pageAttributes.pageno === pageAttributes.totalpagecount} variant="outlined" color="primary" style={{height:'35px'}} >Next</Button> */}
   <IconButton onClick={prevPageHandler} disabled={pageAttributes.pageno ===1} color="primary" size="large" style={{marginRight:'20%'}} >
   <NavigateBeforeIcon />
   </IconButton>
   <IconButton onClick={nextPageHandler} disabled={pageAttributes.pageno === pageAttributes.totalpagecount} color="primary" size="large">
   <NavigateNextIcon />
   </IconButton>
   
  
  
  </div>

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