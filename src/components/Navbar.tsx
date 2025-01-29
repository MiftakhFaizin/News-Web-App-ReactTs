import { Link, NavLink } from "react-router-dom"
import Search from "./Search"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"
import { IoClose } from "react-icons/io5"

const Navbar = () => {
    const [isHamburgermenu, setIsHamburgerMenu] = useState<boolean>(false)

    return (
        <div className="flex justify-center">
            <div className="container flex justify-between items-center py-5 px-10 gap-8">
                <h1 className="font-bold text-3xl max-md:hidden"><Link to="">News</Link></h1>
                <RxHamburgerMenu onClick={() => setIsHamburgerMenu(true)} className="md:hidden" />
                <ul onClick={() => {setIsHamburgerMenu(false)}} className={`justify-self-center flex gap-5 md:overflow-x-auto md:py-3 max-md:bg-white max-md:fixed max-md:pt-10 max-md:gap-10 max-md:top-0 max-md:left-0 max-md:min-h-screen max-md:w-[80%] max-md:flex-col max-md:z-10 max-md:shadow-2xl max-md:shadow-slate-600 ${isHamburgermenu ? "" : "max-md:-translate-x-[100%]"} transition-all duration-200 linear`}>
                    <h1 className="font-bold text-3xl md:hidden self-center"><Link to="">News</Link></h1>
                    <IoClose onClick={() => setIsHamburgerMenu(false)} className="md:hidden ml-5" />
                    <NavLink
                        className={({ isActive }) => (isActive ? "self-start bg-black text-white rounded-md max-md:ml-5 px-5 py-1" : "self-start md:border border-gray-700 rounded-md px-5 py-1")}
                        to="">
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "self-start bg-black text-white rounded-md max-md:ml-5 px-5 py-1" : "self-start md:border border-gray-700 rounded-md px-5 py-1")}
                        to="category-page/Booming">
                        Booming
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? "self-start bg-black text-white rounded-md max-md:ml-5 px-5 py-1" : "self-start md:border border-gray-700 rounded-md px-5 py-1")}
                        to="category-page/Sports">
                        Sports
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? "self-start bg-black text-white rounded-md max-md:ml-5 px-5 py-1" : "self-start md:border border-gray-700 rounded-md px-5 py-1")}
                        to="category-page/Technology">
                        Technology
                    </NavLink>
                </ul>
                <Search  />
            </div>
        </div>
    )
}

export default Navbar