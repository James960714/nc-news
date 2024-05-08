import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Articles from './components/All_Articles'
import Header from './components/Header'
import Profile from './components/Profile'
import ArticleID from './components/ArticleID'

function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Articles/>}/> 
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/article' element={<ArticleID/>}/>   
    </Routes>
    </>
  )
}

export default App
