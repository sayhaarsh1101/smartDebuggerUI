
import CreateTask from './CreateTask'
import React, {useEffect, useState} from 'react';
import Card from '../components/Card'

const Filter = () => {

    const [modal, setModal] = useState(false);
    const [transaction, setTransaction] = useState({
        mid: "",
        amount: "",
        systemname: "",
        time: "",
        status: ""
    }) 

    const toggle = () => {
        setModal(!modal)
    }

    const saveFilter = (fieldName, fieldData) => {
        setTransaction({...transaction, [fieldName]: fieldData})
        setModal(false)
    }

    

    return (
        <>
        <div>
            <button className="btn btn-info" onClick = {() => setModal(true)} style={{marginLeft:'5%'}}>ADD FILTER</button>
        </div>
        <div className = "task-container">
            
            </div>
        <CreateTask toggle={toggle} modal={modal} saveFilter ={saveFilter}></CreateTask>
        </>
    )
}

export default Filter
