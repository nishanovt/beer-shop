import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white phone:px-px py-10 laptop:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-8 h-8 mr-2" src="/logo.png" alt="Logo" />
          <span className="font-bold phone:text-sm tablet:text-lg">Beer-Shop</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
