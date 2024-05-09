import './App.css'
import {Routes, Route} from 'react-router-dom'
import Articles from './components/All_Articles/All_Articles'
import Header from './components/Header'
import Profile from './components/Profile'
import IndividualArticle from './components/Individual_Article/Individual_Article'



function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Articles/>}/> 
      <Route path='/profile' element={<Profile/>}/>
      <Route path='articles/:article_id' element={<IndividualArticle/>}/>   
    </Routes>
    </>
  )
}

export default App
