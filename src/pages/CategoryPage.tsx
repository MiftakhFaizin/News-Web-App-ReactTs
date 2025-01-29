import { useState, useEffect } from "react"
import { NewsModel } from "../models/NewsModel"
import { useParams } from "react-router-dom"
import ArticlesCards from "../components/ArticlesCards"
import LoadingNews from "../components/LoadingNews"

const CategoryPage = () => {
    const { category } = useParams()
    const [newsDatas, setNewsDatas] = useState<NewsModel[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchingNews = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("${category}")&api-key=NAAYVO8A8oNvDSRyQBrtHTbzaqqfTAzs`)
                const json = await response.json()

                if (json) {
                    setNewsDatas(json.response.docs)
                    setLoading(false)
                } else {
                    throw new Error("")
                }
            } catch (err) {
                fetchingNews()
            }
        }

        category && fetchingNews()
    }, [category])

    return (
        <div className="flex justify-center">
            <div className="container py-20 px-10">
                {loading ?
                    <LoadingNews />
                    :
                    <div>
                        {newsDatas.length !== 0 &&
                             <div>
                                <h1 className="font-bold text-2xl">{category}</h1>
                                <ArticlesCards newsDatas={newsDatas} />
                             </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default CategoryPage