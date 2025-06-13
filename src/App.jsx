import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'
import { Register } from './Components/Register'
import { Home } from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
