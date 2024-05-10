import {Link} from 'react-router-dom'

const ListOfArticles = ({articles}) => {

    
    return(
        <section>
            <h2 className="heading">Articles</h2>
            <ul className="articlesList">
                {articles.map((article) => {
                    return <li id="articlesArticleCards" key={article.article_id}>  
                        <section id="articleCard">
                            <Link to={`/articles/${article.article_id}`} id='articleLink'><h4 className="heading">{article.title}</h4></Link>
                            <img id="articlesImg" src={article.article_img_url}></img>
                            <ul id="articlesArticleInfo">
                                <li key={article.topic}>Topic: {article.topic}</li>  
                                <li key={article.author}>Author: {article.author}</li>
                                <li key={article.comment_count}>Comments: {article.comment_count}</li>
                                <li key={article.votes}>Votes: {article.votes}</li>
                                <li key={article.created_at}>Created: {article.created_at}</li>
                            </ul>
                        </section>                        
                    </li>
                })}
            </ul>
        </section>)
}

export default ListOfArticles;

