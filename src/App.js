import './App.css';
import Home from "./Components/Home"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './Components/Reservation';


function App() {
  return (
    <div className="App">
      < BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reserver' element={<Reservation />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
