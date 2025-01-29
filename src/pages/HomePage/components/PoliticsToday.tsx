import { useEffect, useState } from "react"
import { NewsModel } from "../../../models/NewsModel"
import ArticlesCards from "../../../components/ArticlesCards"
import LoadingNews from "../../../components/LoadingNews"
import { dateNow } from "../../../global"

const PoliticsToday = () => {
    const [todayPoliticsNews, setTodayPoliticsNews] = useState<NewsModel[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchingNews = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=politics&begin_date=${dateNow()}&end_date=${dateNow()}&api-key=NAAYVO8A8oNvDSRyQBrtHTbzaqqfTAzs`)
                const json = await response.json()
                if (json) {
                    setTodayPoliticsNews(json.response.docs)
                    setLoading(false)
                } else {
                    throw new Error("")
                    
                }
            } catch (err) {
                fetchingNews()
            }
        }

        if (dateNow() && todayPoliticsNews.length === 0) {
            fetchingNews()
        }
    }, [dateNow])

    return (
        <>
            {loading ?
                <LoadingNews />
                :
                <div className="flex flex-col py-10">
                    {todayPoliticsNews.length !== 0 &&
                        <div>
                            <h1 className="font-bold text-2xl">Politics today</h1>
                            <ArticlesCards newsDatas={todayPoliticsNews} />
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default PoliticsToday