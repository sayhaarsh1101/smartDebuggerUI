import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, saveFilter}) => {
    const [fieldName, setFieldName] = useState('');
    const [fieldData, setFieldData] = useState('');
    //const [filterList, setFilterList] = useState([])
     const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "value"){
            setFieldName(value)
        }else{
            setFieldData(value)
        }


    } 
      const handleSave = (e) => {
        saveFilter(fieldName, fieldData)
    } 

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Choose any field</Label>
                    <Input type="select" name="select" id="exampleSelect" 
                    onChange = {handleChange}>
                        <option>mid</option>
                        <option>amount</option>
                        <option>systemname</option>
                        <option>time</option>
                        <option>status</option>
                    </Input>
                </FormGroup>
                <FormGroup style = {{marginTop: '20px'}}>
                    <Label for="exampleEmail">Enter the value</Label>
                    <Input type="email" name="email" id="exampleEmail"
                     placeholder="eg. 1000" onChange = {handleChange}/>
                </FormGroup>
            </Form>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;
