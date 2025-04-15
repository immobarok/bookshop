import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Error from './components/Error/Error.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import ListedBook from './components/ListedBook/ListedBook.jsx'

const router = createBrowserRouter([
  {
    path: "/", Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: 'books/:bookId',
        loader: async () => {
          const response = await fetch('./booksData.json');
          const data = await response.json();
          return data;
        },

        Component: BookDetails,
      },
      {
        path: 'listedBooks',
        loader: async () => {
          const response = await fetch('./booksData.json');
          const data = await response.json();
          return data;
        },
        Component: ListedBook
      },
      { path: 'dashboard', Component: Dashboard },
      { path: '*', Component: Error }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
