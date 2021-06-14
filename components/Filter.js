import React, {useState} from 'react'
import { Button } from 'reactstrap'
import CreateFilter from '../popup/CreateFilter'
import Card from '../components/Card'
import Tables from '../components/Tables'

const Filter = () => {
   
    const [modal, setModal] = useState(false);
    const [filterList,setFilterList]=useState([])
    const [tableList,setTableList]=useState([])

    const deleteFilter = (index) => {
        let tempList = filterList
        tempList.splice(index, 1)
        setFilterList(tempList)
         if(tempList.length===0) setTableList([]);
         else fetchData();   
    }

    const toggle = () => setModal(!modal)

    const saveFilter = (filterObj) => {
        let tempList = filterList
        tempList.push(filterObj)
        setFilterList(filterList)
        setModal(false)
        console.log("filterList is",filterList)
    }

    async function fetchData(){
 
        const url = 'http://localhost:8080/getbyquery';

            const settings={
            method: 'POST',
            body: JSON.stringify(filterList),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        };
        var res= await fetch(url,settings).then(response => response.text()).then(data=>{
                setTableList(JSON.parse(data));
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
            {filterList && filterList.map((obj , index) => <Card filterObj = {obj} 
            index = {index} deleteFilter = {deleteFilter}/> )}
            </div>
            <CreateFilter fetchData={fetchData} toggle = {toggle} modal = {modal} 
            save = {saveFilter}/>
    {(tableList.length >0) ? <Tables tableList={tableList}></Tables> : " "}
        </>
    )
}

export default Filter