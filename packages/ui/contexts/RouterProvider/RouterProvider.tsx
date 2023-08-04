import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RouterProviderWrapperProps } from "./type"

const RouterProviderWrapper = ({ routes }: RouterProviderWrapperProps) => {
    const route = createBrowserRouter(routes)

    return <RouterProvider router={route} />
}

export default RouterProviderWrapper