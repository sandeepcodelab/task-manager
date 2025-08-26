import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Help from './pages/Help.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddTask from './pages/AddTask.jsx'
import UpdateTask from './pages/UpdateTask.jsx'


let router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Register />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/add-task",
        element: <AddTask />
      },
      {
        path: "/update-task",
        element: <UpdateTask />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
