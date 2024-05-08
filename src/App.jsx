import './App.css'
import {Routes, Route} from 'react-router-dom'
import Articles from './components/All_Articles/All_Articles'
import Header from './components/Header'
import Profile from './components/Profile'
import IndividualArticle from './components/Individual_Article/Individual_Article'
import {useState} from 'react'


function App() {
  
  const [articleId, setArticle] = useState(null)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Articles setArticle = {setArticle}/>}/> 
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/article' element={<IndividualArticle articleId = {articleId}/>}/>   
    </Routes>
    </>
  )
}

export default App
