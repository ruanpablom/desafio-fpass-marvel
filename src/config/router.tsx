import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layouts";
import {Home} from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ],
  },
]);