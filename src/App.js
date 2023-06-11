import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReservContext from './context/ReservContext';
import Landpage from './Components/Landpage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Packages from './Components/Packages/Packages';
import Destination from './Components/Destination/Destination';
import Form from './Components/Form/Form';



function App() {
  return (
    <div className="App">
      <ReservContext>
        < BrowserRouter >
        <Routes>
          <Route path='/' element={<Landpage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/1' element={<Destination />} />
          <Route path='/2' element={<Form />} />
        </Routes>
        </ BrowserRouter >
      </ReservContext>
    </div>
  );
}

export default App;
