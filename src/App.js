import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import ContactUs from './components/ContactUs';
import Messaging from './components/Messaging';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>s
        <Route path='/' element={<Homepage/>} exact/>
        <Route path='/homepage' element={<Homepage/>} exact/>
        <Route path='/contactUs' element ={<ContactUs/>} exact/>
        <Route path='/messaging' element={<Messaging/>} exact/>
        <Route path='/userProfile' element={<UserProfile/>} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
