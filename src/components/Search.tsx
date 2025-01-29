import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { useNavigate } from "react-router-dom"

const Search = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        navigate(`/search-page/${inputValue}`)
        setInputValue("")
    }

    return (
        <form onSubmit={handleSubmit} className="justify-self-end relative">
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setInputValue(e.target.value)}}
                value={inputValue}
                className="text-sm py-2 px-9 max-sm:px-5 rounded-md focus:shadow shadow-slate-500 outline outline-offset-0 outline-gray-700 transition-all duration-200 linear"
                placeholder="Enter keyword..."
            >
            </input>
            <CiSearch className="absolute text-xl -translate-y-7 translate-x-2 max-sm:translate-x-0.5" />
        </form>
    )
}

export default Search