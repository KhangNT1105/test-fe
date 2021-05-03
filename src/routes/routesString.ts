import { lazy } from "react"

const Home = lazy(() => import('../pages/home/HomePage'));
const PageNotFound = lazy(() => import('../pages/404/PageNotFound'));


export const Pages = {
    Home,
    PageNotFound
}

export const RoutesString = {
    Home: '/',
}