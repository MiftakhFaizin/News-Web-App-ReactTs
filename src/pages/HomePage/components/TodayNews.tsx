import { useEffect, useState } from "react"
import { NewsModel } from "../../../models/NewsModel"
import LoadingNews from "../../../components/LoadingNews"
import { dateNow } from "../../../global"

const TodayNews = () => {
    const [todayNews, setTodayNews] = useState<NewsModel[]>([])
    const [urlImages, setUrlImages] = useState<string[]>([])
    const [carouselImageNow, setCarouselImageNow] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${dateNow()}&end_date=${dateNow()}&api-key=NAAYVO8A8oNvDSRyQBrtHTbzaqqfTAzs`)
                const json = await response.json()
                if (json) {
                    setTodayNews(json.response.docs)
                    setLoading(false)
                } else {
                    throw new Error("")
                }
            } catch (err) {
                fetchNews()
            }
        }

        if (dateNow() && todayNews.length === 0) {
            fetchNews()
        }
    }, [dateNow()])

    useEffect(() => {
        const getUrlImages = todayNews.map(news => news.multimedia[0]?.url)
        setUrlImages(getUrlImages)
    }, [todayNews])

    useEffect(() => {
        setTimeout(() => {
            if (carouselImageNow === urlImages.length - 1) {
                setCarouselImageNow(0)
            } else {
                setCarouselImageNow(carouselImageNow + 1)
            }
        }, 5000)
    }, [carouselImageNow])


    return (
       <>
             {loading ?
            <LoadingNews />
            :
            <div className="w-full grid md:grid-cols-2 gap-12 max-md:grid-rows-2">
                {urlImages.length !== 0 &&
                    <img
                        src={`https://static01.nyt.com/${urlImages[carouselImageNow]}`}
                        className="w-[600px] h-[400px] object-cover rounded-sm"
                    >
                    </img>
                }
                {todayNews.length !== 0 &&
                    <div className="flex flex-col overflow-y-auto border border-gray-100 rounded-sm w-full h-[400px] px-7 pt-1 pb-3 gap-7">
                        <h1 className="font-bold text-xl mb-2">Today News</h1>
                        {todayNews && todayNews.map((news, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <p className="text-md line-clamp-2 text-black font-semibold"><a href={news.web_url} target="_blank">{news.abstract}</a></p>
                                <p className="text-sm text-gray-600 line-clamp-2">{news.lead_paragraph}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        }
       </>
    )
}

export default TodayNews