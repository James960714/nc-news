import { useState, useEffect } from "react"
import { getArticle, patchVote } from "../../../../api"

const Article = ({articleId}) => {
    const [article, setArticle] = useState({})
    const [isLoading, setLoading] = useState(true)
    
    if(articleId){
        useEffect (() => {
            getArticle(articleId).then((fetchedArticle) => {
                setArticle(fetchedArticle)
                setLoading(false)
            })
        }, [])
    }
    if (isLoading) return <p>Loading...</p>

    const handleVote = (vote) => {
        patchVote(articleId, vote).then(() => {
            setArticle((currArticle) => {
                return {...currArticle, votes: currArticle.votes + vote}
            })
        })
    }
    return (
    <section id="articleBox">
        <h2 className="heading" id="articleHeading">{article.title}</h2>
        <p id="author">Written by: {article.author}</p>        
        <p id="dateCreated">{article.created_at}</p>
        <p id="articleBody">{article.body}</p>
        <p id="articleVotes">{article.votes} likes</p>
        <img id='articleImg' src={article.article_img_url}/>
        <button className='likeButton' onClick={() => {handleVote(1)}}>Like this article</button>
        <button className='dislikeButton'onClick={() => {handleVote(-1)}}>Dislike this article</button>
    </section>
    )   
    
}


export default Article