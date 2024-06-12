import logo from './logo.svg';
import './App.css';
import { Addroom } from './components/Addroom';
import { Searchroom } from './components/Searchroom';
import { Viewallroom } from './components/Viewallroom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Addroom/>} />
    <Route path='/search' element={<Searchroom/>} />
    <Route path='/viewall' element={<Viewallroom/>} />
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
