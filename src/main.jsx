import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as RootLoader,action as rootAction, } from './routes/root'
import { loader as contactLoader } from './routes/contact'
import ErrorPage from '../error-page'
import Contact from './routes/contact'
import EditContact, {
  action as editAction,
} from './routes/edit'
import { action as destroyAction } from "./routes/destroy";
import Index from './routes'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader:RootLoader,
    action: rootAction,
    children:[
      { index: true, element: <Index /> },
      {
        path:'contacts/:contactId',
        element: <Contact></Contact>,
        loader: contactLoader,
      },
      {
        path:'contacts/:contactId/edit',
        element: <EditContact></EditContact>,
        loader: contactLoader,
        action:editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action:destroyAction
      },
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
