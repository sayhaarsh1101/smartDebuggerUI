

import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { FormGroup, Label, Input, Button } from 'reactstrap'
import Filter from '../components/Filter'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <>

      <div>
        <h1 style={{textAlign:'center',marginTop:'20px'}}>Smart Debugger</h1>
      </div>
      <div style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>

      
        <Filter></Filter>
      </div>

    </>
  )
}
