import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home';
import MainLayout from './components/MainLayout/MainLayout';
import About from './components/pages/About';
import MyProject from './components/pages/MyProject';
import Skill from './components/pages/Skill';
import MyContract from './components/pages/MyContract';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/mySkill",
        element: <Skill></Skill>
      },
      {
        path: "/myProject",
        element: <MyProject></MyProject>
      },
      {
        path: "/contact",
        element: <MyContract></MyContract>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
