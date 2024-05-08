import axios from 'axios';

const ncNewsAPI = axios.create({
    baseURL: 'https://nc-news-backend-portfolio-piece.onrender.com'
  });
  
export const getArticles = () => {
    return ncNewsAPI.get("/api/articles")
    .then((response)=>{
       return response.data
        })
}

export const getArticle = (articleId) => {
  return ncNewsAPI.get(`api/articles/${articleId}`)
  .then((article) => {
    return article.data
  })
}



 
