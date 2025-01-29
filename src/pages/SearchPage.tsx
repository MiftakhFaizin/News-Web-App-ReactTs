import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { NewsModel } from "../models/NewsModel"
import ArticlesCards from "../components/ArticlesCards"
import LoadingNews from "../components/LoadingNews"

const SearchPage = () => {
    const { keyword } = useParams()
    const [newsDatas, setNewsDatas] = useState<NewsModel[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchNews = async () => {
           try {
                setLoading(true)
                const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=NAAYVO8A8oNvDSRyQBrtHTbzaqqfTAzs`)
                const json = await response.json()

                if (json) {
                    setNewsDatas(json.response.docs)
                    setLoading(false)
                } else {
                    throw new Error("")
                }
           } catch (err) {
                console.log(err)
                fetchNews()
           }
        }
        keyword && fetchNews()
    }, [keyword])

    return (
        <div className="flex justify-center">
            <div className="container flex flex-col py-20 px-10">
                {loading ?
                        <LoadingNews />
                        :
                        <div>
                            {newsDatas.length !== 0 &&
                                <div>
                                    <h1 className="font-bold text-2xl">Search result for "{keyword}"</h1>
                                    <ArticlesCards newsDatas={newsDatas} />
                                </div>
                            }
                        </div>
                    }
                </div>
        </div>
    )
}

export default SearchPage