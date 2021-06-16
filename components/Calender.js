
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
      <DateRangePicker  onCallback={handleCallback}  >
          <input type="text" className="form-control col-4" />
        </DateRangePicker>
        </div> 
      );
};

export default Calender