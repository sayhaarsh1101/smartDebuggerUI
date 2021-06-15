

import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { FormGroup, Label, Input, Button } from 'reactstrap'
import Filter from '../components/Filter'
import 'bootstrap/dist/css/bootstrap.min.css'
import StateContext from '../components/StateContext';
import App from './App';

export default function Home() {
  return (
    <>
    
         <StateContext>
              <App/>
      </StateContext>
      
    </>
  )
}
