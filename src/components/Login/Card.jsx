import React from 'react';
import useCont from '../Context/UserContext';
import useTheme from '../Context/theme';
// import ThemeBtn from './ThemeBtn';
// import useTheme from '../Context/theme';

function Card({ className }) {
  const { user } = useCont();
  const {themeMode}=useTheme()
  const cardClassNames = `w-full p-5 bg-white border border-gray-200 rounded-lg shadow ${
    themeMode === "dark" ? "dark:bg-gray-800 dark:border-gray-700" : ""
  } ${className}`;

  // const {themeMode, lightTheme, darkTheme} = useTheme()
  
  if(user) return (
      <div className={cardClassNames}>
      <h3 className="text-white p-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        User Information
      </h3>
      
      <a href="/">
                <img className="p-8 rounded-t-lg" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid" alt="product_image1" />
            </a>
    <div className={"px-5 pb-5"}>
    <a href="/">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Welcome {user.username}
        </h5>
    </a>
    </div>
    </div>

  );
}

export default Card;

