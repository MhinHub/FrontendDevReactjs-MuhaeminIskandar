import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './layout'
import { getAll, getDetail } from '~/services'
import { Detail, Home, ErrorBoundary } from '~/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        loader: getAll,
        element: <Home />
      },
      {
        path: 'detail/:id',
        loader: ({ params }) => {
          return getDetail(params.id ?? '')
        },
        element: <Detail />
      }
    ]
  }
])

const Routes: FC = () => {
  return <RouterProvider router={router} />
}

export default Routes
