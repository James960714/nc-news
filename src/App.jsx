import './App.css'
import {Routes, Route} from 'react-router-dom'
import Articles from './components/All_Articles'
import Header from './components/Header'
import Profile from './components/Profile'
import IndividualArticle from './components/Individual_Article'
import { UserProvider } from './Contexts/User'
import ErrorPage from './components/Error_Page'


function App() {
  
  return (
    <UserProvider>
    <Header/>
    <Routes>
      <Route path='/' element={<Articles/>}/> 
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/articles/:article_id' element={<IndividualArticle/>}/>
      <Route path="*" element={<ErrorPage/>}/>   
     </Routes>
    </UserProvider>
  )
}

export default App
