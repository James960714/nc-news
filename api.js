import axios from 'axios';

const ncNewsAPI = axios.create({
    baseURL: 'https://nc-news-backend-portfolio-piece.onrender.com'
  });
  
const getUsers = () => {
    return ncNewsAPI.get("/api/articles")
    .then((response)=>{
       return response.data
        })
}



export default getUsers;
 
