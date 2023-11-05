import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {GenresPage, MoviesPage, SearchPage} from "./pages";
import {InfoPage} from "./pages/InfoPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path:'movies', element: <MoviesPage/>},
            {path:'info:id', element: <InfoPage/>},
            {path:'genres', element: <GenresPage/>},
            {path: 'search', element: <SearchPage/>}
        ]
    }
])
export {
    router
}