import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <ul className="flex justify-between list-none m-0 p-0">
        <li className="text-lg cursor-pointer hover:text-blue-500">Home</li>
        <div className="flex space-x-4">
          <li className="text-lg cursor-pointer hover:text-blue-500">Sports</li>
          <li className="text-lg cursor-pointer hover:text-blue-500">Music</li>
          <li className="text-lg cursor-pointer hover:text-blue-500">e-Games</li>
          <li className="text-lg cursor-pointer hover:text-blue-500">Travel</li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar