import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layouts";
import {Home, Character} from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/character/:id',
        element: <Character />
      }
    ],
  },
]);