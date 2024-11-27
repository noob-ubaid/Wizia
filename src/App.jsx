import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarArea from './components/NavbarArea'
import HomePage from './components/HomePage';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarArea/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
