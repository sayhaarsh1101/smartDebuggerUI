
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import React, {useEffect,useState} from 'react'
const Calender = ({calenderEndDate,calenderStartDate,setcalenderstate,calenderstate}) => {
   

    const handleInputs=(e)=>{

  var calenderStartDate=e.value[0];
  var calenderEndDate=e.value[1];

  setcalenderstate({...calenderstate,startDate:e.value[0],endDate:e.value[1]})

}

    const presets = [
        { label: 'Today', start: new Date(), end: new Date() },
        { label: 'Last Month', start: new Date(new Date().setDate(new Date().getDate() - 30)), end: new Date() },
        { label: 'Last Week', start: new Date(new Date().setDate(new Date().getDate() - 7)), end: new Date() }
        ];



    return (
        <div>
          {/* <DateRangePickerComponent placeholder="Enter Date Range"
          startDate={startValue}
          endDate={endValue}
          min={minDate}
          max={maxDate}
          minDays={3}
          maxDays={5}
          format="dd-MMM-yy"
          //Uncomment below code to show month range picker. Also comment the properties min, max, mindays and maxdays
          // start="Year"
          // depth="Year"
          ></DateRangePickerComponent> */}
            <DateRangePickerComponent placeholder='Select a range' presets={presets} onChange={handleInputs} />
  
        </div>
      );
};

export default Calender