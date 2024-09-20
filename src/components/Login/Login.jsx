import React, { useState } from 'react'
import useCont from '../Context/UserContext'
import { ThemeProvider } from '../Context/theme.jsx';
import Card from './Card.jsx'
import Profile from './Profile.jsx'
import ThemeBtn from './ThemeBtn.jsx'

function Login() {
  const {setUser} = useCont()
  const [username,setUsername] = useState()
  const[password,setPassword] = useState()
  const onButtonClick = (e)=>{
    e.preventDefault()
    setUser({username,password})
  }

  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  // useEffect(() => {
  //   console.log("Applying theme: ",themeMode)
  //   document.querySelector('html').classList.remove("light", "dark")
  //   document.querySelector('html').classList.add(themeMode)
  // }, [themeMode])

    return (   
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
  
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
            Enter your Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
  
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Enter Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
  
          <button onClick={onButtonClick} className="w-full py-2 p-1 px-2  mt-5 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            Submit
          </button>

        </div>
        <Profile/>

    <ThemeProvider value={{ themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>
              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
           </div>
      </div> 
    </ThemeProvider>
      </div>

    );
    
  }
  
export default Login