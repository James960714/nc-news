import Article from "../Individual_Article/Individual_Article/Article"

import { useParams } from "react-router-dom"
import Comments from "./Comments/Comments"
const IndividualArticle = () => {

    const {article_id} = useParams() 
    return (
        <>
            <Article articleId = {article_id}/>
            <Comments/>
        </>
    )
}

export default IndividualArticle