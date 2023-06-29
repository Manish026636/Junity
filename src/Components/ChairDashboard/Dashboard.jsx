import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className=" ml-16 flex justify-center items-center ">
                <h1 className="text-4xl mt-36  font-bold text-gray-400">Greetings, Chairperson</h1>
            </div>
            <div className="flex gap-8 justify-center items-center">
                <div className='bg-gradient-to-r  text-center from-gray-700 via-gray-700 to-gray-600 mt-12 w-96 h-80 rounded-2xl '>
                <h1 className='text-xl text-white font-semibold pt-24'>Committee Name</h1>
                <h1 className='text-4xl text-[#6FF6FF]  font-bold pt-10'>UNHRC</h1>
                </div>
                <div className='bg-gradient-to-r text-center from-gray-700 via-gray-700 to-gray-600 mt-12 w-96 h-80 rounded-2xl '>
                <h1 className='text-xl text-white font-semibold pt-24'>Total Members</h1>
                <h1 className='text-4xl text-[#6FF6FF] font-bold pt-10'>50</h1>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
