import React, { useState} from 'react'
import Home from '../pages';
import App from '../pages/App';


export const multiStateContext =React.createContext();

const StateContext = () => {
  
  const [calenderstate, setcalenderstate] = useState(
    {startDate: new Date(),
    endDate: new Date(),
    })

    const [tableList,setTableList]=useState([])
    const [filterList,setFilterList]=useState([{"field":"mid","fieldValue":"ABC123"}])
    

    const [pageAttributes,setPageAttributes]=useState(
        {
            pageno:1,
            pagesize:5,
            docCount:0
        }
    )



    async function fetchData(){
        
        
        const url = "http://localhost:8080/datefilterquery/"+Date.parse(calenderstate.startDate)+"/"+Date.parse(calenderstate.endDate)+"/"+pageAttributes.pageno+"/"+pageAttributes.pagesize;
        console.log(url)
            const settings={
            method: 'POST',
            body: JSON.stringify(filterList),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        };
           var res= await fetch(url,settings).
           then(response => response.text()).then(data=>{
               
            
                setTableList(JSON.parse(data));
                
                return data;
            });
   
    }




return (
    <div>
        <multiStateContext.Provider value={{
            calenderstate, setcalenderstate,pageAttributes,setPageAttributes,tableList,setTableList,filterList,setFilterList,
            fetchData
        }}>
            <App/>
        </multiStateContext.Provider>

    </div>
)
}
export default StateContext;