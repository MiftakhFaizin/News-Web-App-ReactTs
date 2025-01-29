import PoliticsToday from "./components/PoliticsToday"
import SportsToday from "./components/Economy"
import TodayNews from "./components/TodayNews"

const Homepage = () => {
    return (
        <div className="flex justify-center">
            <div className="container min-h-screen px-10 mt-10">
                <TodayNews />
                <PoliticsToday />
                <SportsToday />
            </div>
        </div>
    )
}

export default Homepage