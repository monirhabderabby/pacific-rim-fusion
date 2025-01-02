import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/home';
import NavBar from './components/shared/NavBar';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
