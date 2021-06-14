import React, {useState} from 'react'
import { Button } from 'reactstrap'
import CreateFilter from '../popup/CreateFilter'
import Card from './Card'

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
                <Button onClick = {() => {
                    Object.keys(transaction).map(k => 
                        console.log(k + ", " + transaction[k]))
                }}>Test</Button>
            </div>
            <div className = "filter-container">
                {Object.keys(transaction).map((k, v) => 
                {if(transaction[k] !== "") {
                    console.log(k + ", " + transaction[k]);
                    <Card key = {k} value = {transaction[k]} index = {v}></Card>
                }})}
            </div>
            <CreateFilter toggle = {toggle} modal = {modal} saveFilter = {saveFilter}/>
        </>
    )
}

export default Filter
