import React, { useState} from 'react'
import App from '../pages/App';


export const multiStateContext =React.createContext();

const StateContext = () => {
  
  const [calenderstate, setcalenderstate] = useState(
    {startDate: new Date(new Date().setHours(0,0,0,0)),
    endDate: new Date(),
    })

    const [tableList,setTableList]=useState([])
    const [filterList,setFilterList]=useState([{"field":"mid","fieldValue":"ABC123"}])
    

    const [pageAttributes,setPageAttributes]=useState(
        {
            pageno:1,
            pagesize:5,
            docCount:0,
            totalpagecount:1
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
    async function fetchDocCount(){

        const url = "http://localhost:8080/getbyagg/"+Date.parse(calenderstate.startDate)+"/"+Date.parse(calenderstate.endDate);
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
            setPageAttributes({...pageAttributes,docCount:JSON.parse(data).buckets[0].docCount,totalpagecount: Math.ceil(JSON.parse(data).buckets[0].docCount/pageAttributes.pagesize)}) ;
            return data;
            });

    }




return (
    <div>
        <multiStateContext.Provider value={{
            calenderstate, setcalenderstate,pageAttributes,setPageAttributes,tableList,setTableList,filterList,setFilterList,
            fetchData,fetchDocCount
        }}>
            <App/>
        </multiStateContext.Provider>

    </div>
)
}
export default StateContext;