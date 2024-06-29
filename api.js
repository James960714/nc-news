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

export const getArticlesByTopic = (topic) => {
  return ncNewsAPI.get(`/api/articles?topic=${topic}`)
  .then((articles)=>{
    return articles.data.articles
  })
  .catch((err) => {
    return Promise.reject(err)
  })
  
}

export const getArticle = (articleId) => {
  return ncNewsAPI.get(`api/articles/${articleId}`)
  .then((article) => {
    return article.data
  })
  .catch((err) => {
    return Promise.reject(err)
  })
}

export const getArticleComments = (articleId) => {
  return ncNewsAPI.get(`api/articles/${articleId}/comments`)
  .then((response) => {
    return response.data
  })
  .catch((err) => {
    return Promise.reject(err)
  })
}

export const patchVote = (articleId, vote) => {
  return ncNewsAPI.patch(`api/articles/${articleId}`, {inc_votes: vote})
}

export const postComment = (articleId, comment) => {
  return ncNewsAPI.post(`/api/articles/${articleId}/comments`, comment)
  .catch((err) => {
    return Promise.reject(err)
  })
}

export const deleteComment = (commentId) => {
  return ncNewsAPI.delete(`/api/comments/${commentId}`)
}

export const getTopics = () => {
  return ncNewsAPI.get("/api/topics")
  .then((topics)=>{
     return topics.data.topics
    })
}
