import axios from 'axios';

const ncNewsAPI = axios.create({
    baseURL: 'https://nc-news-backend-portfolio-piece.onrender.com'
  });
  
export const getArticles = () => {
    return ncNewsAPI.get("/api/articles")
    .then((articles)=>{
       return articles.data.articles
        })
}

export const getArticle = (articleId) => {
  return ncNewsAPI.get(`api/articles/${articleId}`)
  .then((article) => {
    return article.data
  })
}

export const getArticleComments = (articleId) => {
  return ncNewsAPI.get(`api/articles/${articleId}/comments`)
  .then((response) => {
    return response.data
  })
}

export const patchVote = (articleId, vote) => {
  return ncNewsAPI.patch(`api/articles/${articleId}`, {inc_votes: vote})
}

export const postComment = (articleId, comment) => {
  return ncNewsAPI.post(`/api/articles/${articleId}/comments`, comment)
}


 
