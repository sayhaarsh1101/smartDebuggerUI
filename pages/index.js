
import Tables from '../components/Table'
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { FormGroup, Label, Input, Button } from 'reactstrap'

export default function Home() {
  return (
    <>

      <div>
        <h1 style={{textAlign:'center'}}>Smart Debugger</h1>
      </div>
      <div style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>

        <Input style={{height:'25px', marginRight:'0.50%'}} type="select" id="type" placeholder="type" value="orderid">
          <option value="Text">Order ID</option>
          <option value="Text">Status</option>
        </Input>

        <Input style={{height:'25px',marginRight:'1%'}} placeholder="Enter Search Value"></Input>

        <Button style={{height:'25px',backgroundColor:"#00b9f5",color:"#ffffff"}}>search</Button>{' '}
      </div>
      <div style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>
        <Tables></Tables>
      </div>

    </>
  )
}
