import axios from 'axios';

const API_URL= "http://localhost:3002/users";

export  const addUsers = async(data)=>{
    try{
        return await axios.post(API_URL,data);
    }
    catch(error){
        console.log("error while calling api",error.message);
    }
}

export  const getUsers = async(data)=>{
    try{
        return await axios.get(API_URL);
    }
    catch(error){
        console.log("error while calling getUsers api",error.message);
    }
}
//get  api for prefilled data

export  const getUser = async(data)=>{
    try{
        return await axios.get(`${API_URL}/${data}`);
    }
    catch(error){
        console.log("error while calling getUser api",error.message);
    }
}
//edit api
export  const editUsers = async(data,id)=>{
    try{
        return await axios.put(`${API_URL}/${id}`,data);
    }
    catch(error){
        console.log("error while calling editUsers api",error.message);
    }
}

export  const deleteUsers = async(id)=>{
    try{
        return await axios.delete(`${API_URL}/${id}`);
    }
    catch(error){
        console.log("error while calling deleteUsers api",error.message);
    }
}