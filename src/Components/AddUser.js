import {useState} from 'react';
import { FormControl, FormGroup, InputLabel,Input, Typography,Button,styled} from "@mui/material"
import { addUsers } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Container= styled(FormGroup)`
   width:50%;
   margin: 5% auto 0 auto;
   & > div{
    margin-top:20px;
   }
`



function AddUser(){
    const initialValues={
        name:'',
        email:'',
        designation:'',
        salary:'',
    }
  const[user,setUser]=useState(initialValues);
  const navigate=useNavigate();

  const onValueChange=(e)=>{
   
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }

  const addUser =async()=>{
    //   e.preventDefault();
    console.log(user);
      await addUsers(user);  
      navigate('/all')
  }
    
 return(
    <Container>
        <Typography variant="h4">Add User!</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name='name' onChange={(e)=>onValueChange(e)}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name='email'  onChange={(e)=>onValueChange(e)}/>
        </FormControl>
        <FormControl>
            <InputLabel>Designation</InputLabel>
            <Input name='designation'  onChange={(e)=>onValueChange(e)}/>
        </FormControl>
        <FormControl>
            <InputLabel>Salary</InputLabel>
            <Input name='salary'  onChange={(e)=>onValueChange(e)}/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=>addUser()}>Add User</Button>
        </FormControl>
    </Container>
 )
}
export default AddUser