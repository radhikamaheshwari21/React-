import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Login from './components/Login/Login.jsx'
import { UserContextProvider } from './components/Context/UserContext.jsx'
import TodoFile from './components/TodoFile/TodoFile.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<App/>}>
      <Route path="" element = {<Home/>} />
      <Route path="About" element = {<About/>} />
      <Route path="Contact" element = {<Contact/>} />
      <Route path="Todo" element = {<TodoFile/>} />
      <Route path="User/:user" element = {<User/>} />
      <Route path="Login" element = {<Login/>} />
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
    <RouterProvider router = {router}/>
    </UserContextProvider>
  </StrictMode>,
)
