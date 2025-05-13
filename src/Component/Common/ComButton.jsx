import React from 'react'

export const ComButton = ({title,onClick, customStyle}) => {
  return (
     <button onClick={onClick} className={`relative group inline-flex items-center justify-center text-lg font-bold text-white rounded-lg overflow-hidden shadow-xl transition-all duration-300 ease-out${customStyle}` }>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out blur-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10">{title}</span>
          <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
        </button>
  )
}
  