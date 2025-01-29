import { FaSpinner } from "react-icons/fa"

const LoadingNews = () => {
    return (    
        <div className="flex justify-center pt-48 h-screen">
            <FaSpinner className="animate-spin text-xl" />
        </div>
    )
}

export default LoadingNews