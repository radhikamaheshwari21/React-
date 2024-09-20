import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { user } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          User Details
        </h2>
        <p className="text-lg text-gray-600 text-center">
          User is - {user}
        </p>
      </div>
    </div>
  );
}

export default User

