import React from 'react'

function Card({username,btnText}) {
    console.log(username)
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src="https://up.yimg.com/ib/th/id/OIP.jHvTOSF7924Ah63W7mozxQHaEo?pid=Api&rs=1&c=1&qlt=95&w=192&h=120"
        alt="Card"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
        <p className="text-gray-600 mt-2">
       {btnText || "visit me"}
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Card