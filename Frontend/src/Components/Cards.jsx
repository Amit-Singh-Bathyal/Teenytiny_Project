import React from 'react'

const Cards = () => {
  return (
   <div>
<div class="bg-gray-200 flex items-center justify-center min-h-screen">

  <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm">
    <h2 class="text-black text-xl font-semibold mb-4">{question}</h2>
    <div class="flex space-x-4">
      <button class="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">{option1}</button>
      <button class="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">{option2}</button>
    </div>
  </div>
  </div>
</div>
  )
}

export default Cards