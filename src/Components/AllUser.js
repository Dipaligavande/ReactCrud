import { useEffect ,useState} from "react";
import {Link} from  'react-router-dom';
import { Table,TableBody, TableCell, TableHead, TableRow ,styled, Button} from "@mui/material";
import { getUsers ,deleteUsers} from "../service/api";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";


const StyledTable= styled(Table)`
   width:90%;
   margin: 50px auto 0 auto;
`
const Thead=styled(TableRow)`
    background:#000;
    & > th{
      color:#ffF;
      font-size:20px;
    }


`
const TBody=styled(TableRow)`
& > th{

   font-size:15px;
 }

`

function AllUser(){
   const[users,setUsers]=useState([])
   const[search,setSearch]=useState("");

  

   useEffect(()=>{
      getEmployees();
   },[])

   const getEmployees =async()=>{
      let response =await getUsers();
      console.log(response);
      setUsers(response.data);
   }
   const deleteUserDetails = async(id)=>{
      await deleteUsers(id);
      getEmployees();
   }

    return(
      <>
      <TextField style={{display:'flex',margin:"20px auto 0 auto",width:"20%",height:"20px"}} type="text" 
      placeholder="Search.." onChange={(e)=>{setSearch(e.target.value)}}
      InputProps={{
         startAdornment: (
           <InputAdornment position="start">
             <SearchRoundedIcon />
           </InputAdornment>
         ),
       }}></TextField>
       <StyledTable>
         <TableHead>
            <Thead>
               <TableCell>Id</TableCell>
               <TableCell>Name</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>Designation</TableCell>
               <TableCell>Salary</TableCell>
               <TableCell>Action</TableCell>
            </Thead>
         </TableHead>
         <TableBody>
           {
            users.filter((user)=>{
               
               if(search===''){
                  console.log(user)
                  return user
               }else if(user.name.toLowerCase().includes(search.toLowerCase())){
                  return user
               }
               

            }).map((user,i)=>{
               return(
                  <TBody key={i}>
                  <TableCell>{i+1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.designation}</TableCell>
                  <TableCell>{user.salary}</TableCell>
                  <TableCell>
                  <Link to={`/edit/${user.id}`}>
                  <Button><EditIcon color="primary"></EditIcon></Button>
                  </Link>
                  <Link>
                  <Button><DeleteIcon style={{color:"red"}} onClick={()=>deleteUserDetails(user.id)}></DeleteIcon></Button>
                  </Link>
                  </TableCell>
               </TBody>
               )
               
            })
           }
         </TableBody>
       </StyledTable>
       
       </>
    )
   }
   export default AllUser