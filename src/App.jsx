import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import TicketTap from './component/screen/TicketsTab/TicketTap';
import HeaderView2 from './component/HeaderView2/HeaderView2';
import BlogTab from './component/screen/BlogTab/BlogTab';
import { Router, Routes, Route, Link } from 'react-router-dom'
import BlogDetail from './component/screen/BogDetail/BlogDetail'
import TicketDetail from './component/screen/TicketDetail/TicketDetail';
import AddPost from './component/screen/AddPost/AddPost';
import LogIn from './component/screen/LogIn/LogIn';
import Register from './component/screen/Register/Register';
function App() {
  return (
    <div className="App">
     <Header/>
     
     <Routes>
     <Route path='/readblog' element={<BlogDetail/>} />
      <Route path='/blog' element={<BlogTab/>} />
        <Route path='/tickets' element={<TicketTap/>} />
        <Route path='/ticketdetail' element={<TicketDetail/>} />
        <Route path='/addpost' element={<AddPost/>} />
        
        <Route path='/login' element={<LogIn/>} />
        <Route path='/register' element={<Register/>} />
        
        
       
      </Routes>
    </div>
  );
}

export default App;
