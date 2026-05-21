import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './components/Home'
import Recipe from './components/Recipe'
import Favorites from './components/Favorites'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='recipe/:id' element={<Recipe/>}></Route>
      <Route path='favorites' element={<Favorites/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
