import React from 'react'


const Contact = () => {
  return (
/*    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Have questions or want to get in touch? Fill out the form below!
        </p>
        <label>
          username
        </label>
        <input
        type='text'
        id = 'name'
        placeholder='username'
        />
        <label>
          password
        </label>
        <input
        type='text'
        id = 'name'
        placeholder='password'
        />
        <label>
          your message
        </label>
        <textarea
        type='text'
        id = 'name'
        placeholder='message'
        rows={5}
        />
        <button>
          Submit
        </button>

        </div>
        </div>
  )
}*/

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Have questions or want to get in touch? Fill out the form below!
        </p>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default Contact