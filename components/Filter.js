import React, {useEffect,useState,useContext,useRef} from 'react'
import { Button } from 'reactstrap'
import CreateFilter from '../popup/CreateFilter'
import Card from '../components/Card'
import Tables from '../components/Tables'
import Calender from './Calender'
import {multiStateContext} from './StateContext'


const Filter = () => {

    const {fetchData,filterList,setFilterList, calenderstate, setcalenderstate ,pageAttributes,setPageAttributes, tableList,setTableList } = useContext(multiStateContext);
    const [modal, setModal] = useState(false);
    
  
    useEffect(async ()=>{
          await fetchDocCount();
          await fetchData();
    },[calenderstate,filterList])

    useEffect(() => {
        fetchData()
        
    }, [pageAttributes])
   

    
   
   
    const deleteFilter = (index) => {
        let tempList = filterList
        tempList.splice(index, 1)
        setFilterList(tempList)
         if(tempList.length===0){
             setTableList([]);
         }else fetchData();
   
    }



    const toggle = () => {
        setModal(!modal)
    }

    const saveFilter = (filterObj) => {
        let tempList = filterList
        tempList.push(filterObj)
        setFilterList(filterList)
        setModal(false)
        console.log("filterList is",filterList)
    }

    

    async function fetchDocCount(){

        const url = "http://localhost:8080/getbyagg/"+Date.parse(calenderstate.startDate)+"/"+Date.parse(calenderstate.endDate);
        console.log(url)
            const settings={
            method: 'POST',
            body: JSON.stringify(filterList),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        };
           var res= await fetch(url,settings).
           then(response => response.text()).then(data=>{
            setPageAttributes({...pageAttributes,docCount:JSON.parse(data).buckets[0].docCount,totalpagecount: Math.ceil(JSON.parse(data).buckets[0].docCount/pageAttributes.pagesize)}) ;
            return data;
            });

    }


    return (
        <>
            <div className = "header text-center" style = {{height: '200px', 
            width: '100%', backgroundColor: '#E9EEF6'}}>
                <Button className = "btn btn-info" style = {{marginTop: '7%'}}
                onClick = {() => setModal(true)}>
                    ADD FILTER</Button>
            </div>

            <div className = "filter-container">
            {filterList && filterList.map((obj , index) => <Card filterObj = {obj} index = {index} deleteFilter = {deleteFilter}/> )}
            </div>

            <Calender />
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
