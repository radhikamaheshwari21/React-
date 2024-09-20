import React from 'react'
import useCont from '../Context/UserContext';

function Profile() {
    const { user } = useCont();

    if (!user) return <div className={'w-full m- 2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white p-5  ${className}'}>Not Available</div>
    return <div className={' w-full m- 2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white p-5  ${className}'}> Username: {user.username}</div>
}

export default Profile