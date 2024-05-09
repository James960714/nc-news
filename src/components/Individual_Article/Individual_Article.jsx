import Article from "../Individual_Article/Individual_Article/Article"
import CommentsList from "./List_of_Comments/List_of_Comments"
import { useParams } from "react-router-dom"

const IndividualArticle = () => {

    const {article_id} = useParams() 
    return (
        <>
            <Article articleId = {article_id}/>
            <CommentsList articleId={article_id}/>
        </>
    )
}

export default IndividualArticle