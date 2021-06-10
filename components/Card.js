import React, {useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';



const Card = ({filterObj,index, deleteTask, updateListArray}) => {

    const toggle = () => {
        setModal(!modal);
    }
    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
        console.log("ffffff")
    }

    return (
        <>
        <div class = "card-wrapper mr-5">
            <div class = "card-top"></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": '#ffffff', "border-radius": "8px"}}>{filterObj.field}</span>
                <p style={{color:"white"}}className = "mt-3">{filterObj.fieldValue}</p>       
        </div>
        <div >
               <EditIcon  style={{color:'#1a1a1a'}} onClick = {() => setModal(true)}></EditIcon>
               <CancelIcon style={{color:'#1a1a1a'}}  onClick = {handleDelete}></CancelIcon>     
        </div>
        </div>
       
     </>
    );
};

export default Card;