import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/home';
import Categories from './pages/categories/categories';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/categories',
    element: <Categories/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
