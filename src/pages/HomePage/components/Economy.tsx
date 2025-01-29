import { useEffect, useState } from "react"
import { NewsModel } from "../../../models/NewsModel"
import ArticlesCards from "../../../components/ArticlesCards"
import LoadingNews from "../../../components/LoadingNews"
import { dateNow } from "../../../global"

const EconomyToday = () => {
    const [todayEconomyNews, setTodayEconomyNews] = useState<NewsModel[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchingNews = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Economy")&begin_date=${dateNow()}&end_date=${dateNow()}&api-key=NAAYVO8A8oNvDSRyQBrtHTbzaqqfTAzs`)
                const json = await response.json()
                if (json) {
                    setTodayEconomyNews(json.response.docs)
                    setLoading(false)
                } else {
                    throw new Error("")
                    
                }
            } catch (err) {
                fetchingNews()
            }
        }

        if (dateNow() && todayEconomyNews.length === 0) {
            fetchingNews()
        }
    }, [dateNow])

    return (
        <>
            {loading ?
                <LoadingNews />
                :
                <div className="flex flex-col py-10">
                    {todayEconomyNews.length !== 0 &&
                        <div>
                            <h1 className="font-bold text-2xl">Sports today</h1>
                            <ArticlesCards newsDatas={todayEconomyNews} />
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default EconomyToday