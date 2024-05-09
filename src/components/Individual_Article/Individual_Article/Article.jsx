import { useState, useEffect } from "react"
import { getArticle } from "../../../../api"

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

    return (
    <section id="articleBox">
        <h2 className="heading" id="articleHeading">{article.title}</h2>
        <p id="author">Written by: {article.author}</p>        
        <p id="dateCreated">{article.created_at}</p>
        <p id="articleBody">{article.body}</p>
        <img id='articleImg' src={article.article_img_url}/>
        <button className='likeButton'>Like this article</button>
    </section>
    )   
    
}


export default Article