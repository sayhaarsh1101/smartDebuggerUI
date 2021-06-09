import React, {useState} from 'react'
import { Button } from 'reactstrap'
import CreateFilter from '../popup/CreateFilter'

const Filter = () => {
    const [transaction, setTransaction] = useState({
        mid: "",
        amount: "",
        systemname: "",
        time: "",
        status: ""
    })  

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    }

    const saveFilter = (field, fieldValue) => {
        setTransaction({...transaction, [field]: fieldValue})
        setModal(false)
    }

    return (
        <>
            <div className = "header text-center" style = {{height: '200px', 
            width: '100%', backgroundColor: '#E9EEF6'}}>
                <Button className = "btn btn-secondary" style = {{marginTop: '7%'}}
                onClick = {() => setModal(true)}>
                    ADD FILTER</Button>
                <Button onClick = {() => console.log(transaction)}>Test</Button>
            </div>
            <div className = "filter-container">

            </div>
            <CreateFilter toggle = {toggle} modal = {modal} saveFilter = {saveFilter}/>
        </>
    )
}

export default Filter
