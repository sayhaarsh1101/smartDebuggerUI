import React, {useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';



const Card = ({filterObj,index, deleteFilter}) => {

    const toggle = () => {
        setModal(!modal);
    }


    const handleDelete = () => {
        deleteFilter(index)
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
              
               <CancelIcon style={{color:'#1a1a1a'}}  onClick = {handleDelete}></CancelIcon>     
        </div>
        </div>
       
     </>
    );
};

export default Card;