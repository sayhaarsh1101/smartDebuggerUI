
import Tables from '../components/Table'
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { FormGroup, Label, Input, Button } from 'reactstrap'
import Filter from '../components/FilterList'

export default function Home() {
  return (
    <>

      <div>
        <h1 style={{textAlign:'center'}}>Smart Debugger</h1>
      </div>
     <Filter></Filter>
      <div style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>
        <Tables></Tables>
      </div>

    </>
  )
}
