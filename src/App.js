
import './App.css';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import CrudApp from './Components/CrudApp';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import EditUser from './Components/EditUser';


function App() {
  return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<CrudApp/>}></Route>
     <Route path='/all' element={<AllUser/>}></Route>
     <Route path='/add' element={<AddUser/>}></Route>
     <Route path='/edit/:id' element={<EditUser/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
