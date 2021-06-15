import React, { useState} from 'react'
import Home from '../pages';
import App from '../pages/App';


export const multiStateContext =React.createContext();

const StateContext = () => {
  
  const [calenderstate, setcalenderstate] = useState(
    {startDate: null,
    endDate: null,
    })




return (
    <div>
        <multiStateContext.Provider value={{
            calenderstate, setcalenderstate
        }}>
            <App/>
        </multiStateContext.Provider>

    </div>
)
}
export default StateContext;