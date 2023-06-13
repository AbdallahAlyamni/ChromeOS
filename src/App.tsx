import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LockScreen from './components/LockScreen';
import HomeScreen from './components/HomeScreen';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="sign_in" element={<LockScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
