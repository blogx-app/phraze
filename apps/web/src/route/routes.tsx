import { RouteObject } from "react-router-dom";
import { AppLayout } from 'ui'
import BlogEditorPage from "../pages/BlogEditorPage";

export const routesName = {
    root: '/',
    editor: '/editor'
}

const routes: RouteObject[] = [
    {
        path: routesName.root,
        element: <AppLayout />,
        children: [
            { path: routesName.editor, element: <BlogEditorPage /> },
        ]
    }
]

export default routes