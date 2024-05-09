import { useState, useEffect } from "react"
import { getArticleComments } from "../../../../api"

const CommentsList = ({articleId}) => {
    const [articleComments, setArticleComments] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    if(articleId){
        useEffect (() => {
            getArticleComments(articleId).then((fetchedComments) => {
                setArticleComments(fetchedComments)
                setLoading(false)
            })
        }, [])
    }
    if (isLoading) return <p>Loading...</p>

    return (
        <section id="commentsSection">
            <h3 id='commentsHeading'>Comments</h3>
            <ul id="commentsList">
                {articleComments.map((comment) => {
                    return <li key={comment.comment_id}>
                            <section className='commentGrid'>
                            <p className='commentBody' key={comment.body}>{comment.body}</p> 
                            <p className='commentVotes' key={comment.votes}>{comment.votes} likes</p> 
                            <p className='commentAuthor' key={comment.author}>{comment.author}</p> 
                            <p className='commentCreated' key={comment.created_at}>{comment.created_at}</p> 
                            </section>
                        </li>
                })}
            </ul>
        </section>
    )
}

export default CommentsList