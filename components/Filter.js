import React, {useEffect,useState,useContext,useRef} from 'react'
import { Button } from 'reactstrap'
import CreateFilter from '../popup/CreateFilter'
import Card from '../components/Card'
import Tables from '../components/Tables'
import Calender from './Calender'
import {multiStateContext} from './StateContext'


const Filter = () => {

    const {fetchData,filterList,setFilterList, calenderstate, setcalenderstate ,pageAttributes,setPageAttributes, tableList,setTableList,fetchDocCount } = useContext(multiStateContext);
    const [modal, setModal] = useState(false);
    
  
    useEffect(async ()=>{
         await fetchDocCount();
         await fetchData();
    },[calenderstate,filterList])

    useEffect(() => {
        fetchData()
        
    }, [pageAttributes])
   

    
   
   
    const deleteFilter = (index) => {
        // let tempList = filterList
       //  tempList.splice(index, 1)
      //   setFilterList(tempList)
         setFilterList([...filterList.slice(0,index), ...filterList.slice(index+1)])
      console.log("lenth",filterList.length);
          if(filterList.length===0){
              setTableList([]);
          }else fetchData();
    
     }



    const toggle = () => {
        setModal(!modal)
    }

    const saveFilter = (filterObj) => {
        // let tempList = filterList
        // tempList.push(filterObj)
        setFilterList([...filterList,filterObj])
        setModal(false)
        console.log("filterList is",filterList)
    }

    




    return (
        <>
            <div className = "header text-center" style = {{height: '100px', 
            width: '100%',display:'flex'}}>
                <div style = {{marginLeft: '30%',marginTop:'1.5%'}}>
                <Button className = "btn btn-info" 
                onClick = {() => setModal(true)}>
                    ADD FILTER</Button></div>
                    <div style = {{marginLeft: '10%',width:'30%',marginTop:'1.5%'}}> <Calender /></div>
            </div>

            <div className = "filter-container">
            {filterList && filterList.map((obj , index) => <Card filterObj = {obj} index = {index} deleteFilter = {deleteFilter}/> )}
            </div>

        {/* <Calender /> */}
            <CreateFilter  fetchData={fetchData} toggle = {toggle} modal = {modal} save = {saveFilter}/>
           {/*  <div className = "header text-center">
                <Button className = "btn btn-info" onClick={fetchData}>
                    APPLY </Button>
            </div> */}
  
    {(tableList.length >0) ? <Tables tableList={tableList}></Tables> : " "}
        </>
    )
}

export default Filter
