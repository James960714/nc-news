import {getArticles} from "../../../api"
import { useState, useEffect } from "react";
import ListOfArticles from "./list_of_articles";

const Articles = ({setArticle}) => {

    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getArticles().then((articles => {
            setArticles(articles)
            setLoading(false)
        }))
    }, [])
    if (isLoading) return <p>Loading...</p>

    return (
        <ListOfArticles articles ={articles} setArticle = {setArticle}/>
    )
       
}

export default Articles;

