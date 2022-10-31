import {useState,useEffect} from 'react';
import { FormControl, FormGroup, InputLabel,Input, Typography,Button,styled} from "@mui/material"
import { getUser,editUsers } from '../service/api';
import { useNavigate ,useParams} from 'react-router-dom';

const Container= styled(FormGroup)`
   width:50%;
   margin: 5% auto 0 auto;
   & > div{
    margin-top:20px;
   }
`



function EditUser(){
    const initialValues={
        name:'',
        email:'',
        designation:'',
        salary:'',
    }
  const[user,setUser]=useState(initialValues);
  const navigate=useNavigate();
  const {id}  = useParams();

  useEffect(()=>{
     getUserDetails();
   },[])

  const getUserDetails = async()=>{
   
      let response= await getUser(id);
      console.log(response)
      setUser(response.data);
  }

  const onValueChange=(e)=>{
   
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }

  const EditUserDetails =async()=>{
    //   e.preventDefault();
    // console.log(user);
      await editUsers(user,id);  
      navigate('/all');
  }
    
 return(
    <Container>
        <Typography variant="h4">Edit User!</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name='name' onChange={(e)=>onValueChange(e)} value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name='email'  onChange={(e)=>onValueChange(e)} value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Designation</InputLabel>
            <Input name='designation'  onChange={(e)=>onValueChange(e)} value={user.designation}/>
        </FormControl>
        <FormControl>
            <InputLabel>Salary</InputLabel>
            <Input name='salary'  onChange={(e)=>onValueChange(e)} value={user.salary}/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=>EditUserDetails()}>EditUser</Button>
        </FormControl>
    </Container>
 )
}
export default EditUser