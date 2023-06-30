import React from 'react'
import { AiFillEdit } from 'react-icons/ai';
import GSLSearch from './GSLSearch';
import { FcPlus,FcClock } from "react-icons/fc";

const GSLDashboard = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-8 mt-6 mx-6 ">
                <div className="w-full md:w-9/12 bg-[#475569] h-32 rounded-xl ">
                    <button className="flex text-white ">
                        <span className="m-4 text-md font-bold">Agenda</span><AiFillEdit className='mt-4' size={20} />
                    </button>
                    <h1 className='ml-4 mt-1 text-4xl  text-[#f4f6f9] font-bold'>India the new Super Power</h1>
                </div>
                <div className="w-full md:w-2/12 ">
                <div>
                <button><img
                      src="clock.png"
                      
                      className="w-12 mt-2 h-12 border border-gray-300 rounded-full"
                    /></button>
                </div>
                <div>
                <button><img
                      src="add.png"
                      
                      className="w-12 mt-2 h-12 border border-gray-300 rounded-full"
                    /></button>
                </div>
                </div>
            </div>
            <div class="flex flex-col gap-8 mt-6 mx-6 md:flex-row">
  <div class="w-full md:w-4/12">
  <button class="h-10 px-5 m-2 text-white font-semibold bg-[#62BDFF] rounded-xl hover:bg-blue-700">Upcoming</button>
  <button class="h-10 px-5 m-2 text-white font-semibold bg-[#6F6F6F] rounded-xl hover:bg-gray-700">Completed</button>
  
  </div>
  <div class="w-full md:w-7/12 m-2">
   <GSLSearch/>
  </div>
</div>


        </div>
    )
}

export default GSLDashboard
