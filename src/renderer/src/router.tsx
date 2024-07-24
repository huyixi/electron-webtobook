import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './components/common/NotFound'
import { ErrorElement } from './components/common/ErrorElement'

import App from './App'
import Add from './pages/add'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Add />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
