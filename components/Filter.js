import React, {useEffect,useState} from 'react'
import { Button } from 'reactstrap'
import CreateFilter from '../popup/CreateFilter'
import Card from '../components/Card'
import Tables from '../components/Tables'

const Filter = () => {
   
 
       /* let tableList=[{"mid":"ABC123","systemname":"theia","timestamp":1623155141812,"status":null,"reason":null},
   {"mid":"ABC123","systemname":"theia","timestamp":1623156329834,"status":null,"reason":null}]; */
    const [modal, setModal] = useState(false);
    const [filterList,setFilterList]=useState([])
    const [tableList,setTableList]=useState([])

    useEffect(() => {
        let arr = localStorage.getItem("filterList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setFilterList(obj)
        }
    }, [])

    const deleteFilter = (index) => {
        let tempList = filterList
        tempList.splice(index, 1)
        localStorage.setItem("filterList", JSON.stringify(tempList))
        setFilterList(tempList)
         
         window.location.reload()
         //fetchData();
        
    
    }

    const updateListArray = (obj, index) => {
        let tempList = filterList
        tempList[index] = obj
        localStorage.setItem("filterList", JSON.stringify(tempList))
        setFilterList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal)
    }

    const saveFilter = (filterObj) => {
        let tempList = filterList
        tempList.push(filterObj)
        localStorage.setItem("filterList", JSON.stringify(tempList))
        setFilterList(filterList)
        setModal(false)

        console.log("filterList is",filterList)
    }

    async function fetchData(){

        if(filterList.length===0){
            setTableList([{"mid":null,"systemname":null,"timestamp":null,"status":null,"reason":null}])
        }else{
            const url = 'http://localhost:8080/getbyquery';

            const settings={
            method: 'POST',
            body: JSON.stringify(filterList),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        };
           var res= await fetch(url,settings).
           then(response => response.text()).then(data=>{
               
                setTableList(JSON.parse(data));
                
                return data;
            });
               
        }
       
        
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
            {filterList && filterList.map((obj , index) => <Card filterObj = {obj} index = {index} deleteFilter = {deleteFilter} updateListArray = {updateListArray}/> )}
            </div>
            <CreateFilter fetchData={fetchData} toggle = {toggle} modal = {modal} save = {saveFilter}/>
            <div className = "header text-center">
                <Button className = "btn btn-info" onClick={fetchData}>
                    APPLY </Button>
            </div>
      <Tables tableList={tableList}></Tables>
        </>
    )
}

export default Filter
