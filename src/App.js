import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReservContext from './context/ReservContext';
import Landpage from './Components/Landpage';
import Login from './Components/Login';



function App() {
  return (
    <div className="App">
      <ReservContext>
        < BrowserRouter >
        <Routes>
          <Route path='/' element={<Landpage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </ BrowserRouter >
      </ReservContext>
    </div>
  );
}

export default App;
