import React from 'react'
import UserCard from './UserCard'

const DashMain = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center my-5">WellCome To Odemy Dashboard</h2>
         
         {/* Dashb footer */}
         <div className='flex justify-center'>
         <UserCard></UserCard>

         </div>
      </div>
  )
}

export default DashMain