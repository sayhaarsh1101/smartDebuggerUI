
import DateRangePicker from 'react-bootstrap-daterangepicker';
import {multiStateContext} from './StateContext'
import React, { Component , useState , useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

const Calender = () => {
   
    const {calenderstate, setcalenderstate  } = useContext(multiStateContext);
    
    const handleCallback=(start,end)=>{
        setcalenderstate({...calenderstate,startDate:start._d,endDate:end._d})
      }

      

    return (
        <div>
      <DateRangePicker  onCallback={handleCallback} initialSettings={
        { timePicker:true, 
          locale: {format: 'DD/MM/YYYY hh:mm A'} , 
          ranges: {'Today': [new Date(new Date().setHours(0,0,0,0)) , new Date()], 
                  ' Last 7 Days': [new Date(new Date().setDate(new Date().getDate()-7)), new Date()],
                  ' Last 30 Days': [new Date(new Date().setDate(new Date().getDate()-29)), new Date()],
                   } 
          }}>
          
          <input type="text" className="form-control col-4" />
        </DateRangePicker>
        </div> 
      );
};

export default Calender