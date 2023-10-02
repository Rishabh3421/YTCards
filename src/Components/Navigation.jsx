import React from 'react'

const Navigation = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
    
  
  
    <div className="flex items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png" 
        alt="YouTube Logo"
        className="w-10 h-10 rounded-full mr-2"
      />
      <span className="text-white text-lg font-semibold">YouTube</span>
    </div>
    <div className="w-1/2">
      <input
        type="text"
        placeholder="Search on YouTube"
        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
      />
    </div>
  </div>
  )
}

export default Navigation
