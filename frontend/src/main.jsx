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
import Logout from './pages/Logout.jsx'
import ProtectedRoute from './pages/ProtectedRoute.jsx'


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
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },
      {
        path: "/add-task",
        element: (
          <ProtectedRoute>
            <AddTask />
          </ProtectedRoute>
        )
      },
      {
        path: "/update-task/:taskId",
        element: (
          <ProtectedRoute>
            <UpdateTask />
          </ProtectedRoute>
          )
      },
      {
        path: "/logout",
        element: (
          <ProtectedRoute>
            <Logout />
          </ProtectedRoute>
        )
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
