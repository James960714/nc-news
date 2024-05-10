import { useState, useEffect } from "react"
import { getArticle, patchVote } from "../../../../api"

const Article = ({articleId}) => {
    const [article, setArticle] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [voteChange, setVoteChange] = useState(0)
    const [err, setErr] = useState(null)

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
        patchVote(articleId, vote).catch(()=> {
            setVoteChange((currVoteChange) => {return currVoteChange - vote})
            setErr('Something went wrong, please try again.');
        })
        setVoteChange((currVoteChange) => {return currVoteChange + vote})
        setErr(null);
    }

    return (
    <section id="articleBox">
        <h2 className="heading" id="articleHeading">{article.title}</h2>
        <p id="author">Written by: {article.author}</p>        
        <p id="dateCreated">{article.created_at}</p>
        <p id="articleBody">{article.body}</p>
        <p id="articleVotes">{article.votes + voteChange} likes</p>
        <img id='articleImg' src={article.article_img_url}/>
        {err ? <p className="errMessage">{err}</p> : null}
        <button className='likeButton' disabled={voteChange === 1} onClick={() => {handleVote(1)}}>Like this article</button>
        <button className='dislikeButton' disabled={voteChange === -1}onClick={() => {handleVote(-1)}}>Dislike this article</button>
    </section>
    )   
    
}


export default Article