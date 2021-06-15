
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { FormGroup, Label, Input, Button } from 'reactstrap'
import Filter from '../components/Filter'
import 'bootstrap/dist/css/bootstrap.min.css'
import StateContext from '../components/StateContext';


function App() {

    
      return (
          <div>
        <div>
        <h1 style={{textAlign:'center'}}>Smart Debugger</h1>
      </div>
      <div style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>

      
        <Filter></Filter>
      </div>
      </div>
      );
    }
    
    export default App;