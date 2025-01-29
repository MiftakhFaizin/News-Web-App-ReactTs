import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <Homepage />
            },
            {
                path: "search-page/:keyword",
                element: <SearchPage />
            },
            {
                path: "category-page/:category",
                element: <CategoryPage />,
            }
        ]
    },
])

export default router