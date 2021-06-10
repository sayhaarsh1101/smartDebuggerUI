import React, {useEffect,useState} from 'react'
import { Button } from 'reactstrap'
import CreateFilter from '../popup/CreateFilter'
import Card from '../components/Card'

const Filter = () => {
    /* const [transaction, setTransaction] = useState({
        mid: "",
        amount: "",
        systemname: "",
        time: "",
        status: ""
    })   */

    const [modal, setModal] = useState(false);
    const [filterList,setFilterList]=useState([])

    useEffect(() => {
        let arr = localStorage.getItem("filterList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setFilterList(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = filterList
        tempList.splice(index, 1)
        localStorage.setItem("filterList", JSON.stringify(tempList))
        setFilterList(tempList)
        window.location.reload()

    
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

    /* const saveFilter = (field, fieldValue) => {
        setTransaction({...transaction, [field]: fieldValue})
        setModal(false)
    } */
    const saveFilter = (filterObj) => {
        let tempList = filterList
        tempList.push(filterObj)
        localStorage.setItem("filterList", JSON.stringify(tempList))
        setFilterList(filterList)
        setModal(false)

        console.log("filterList is",filterList)
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
            {filterList && filterList.map((obj , index) => <Card filterObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray} filterList={filterList}/> )}
            </div>
            <CreateFilter toggle = {toggle} modal = {modal} save = {saveFilter}/>
            <div className = "header text-center">
                <Button className = "btn btn-info">
                    APPLY</Button>
            </div>
        </>
    )
}

export default Filter
