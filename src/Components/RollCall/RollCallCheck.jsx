import { Checkbox } from '@material-tailwind/react'
import React from 'react'
import RollCallResult from './RollCallResult'
import RollCallSearch from './RollCallSearch'
import RollCallCountry from './RollCallCountry'
import RollCallPagination from './RollCallPagination'

const RollCallCheck = () => {
    return (
        <div>
            <div className=' w-full bg-[#FBFBFB]  border-2 border-[#F0F0F0] h-auto rounded-3xl pb-2 '>
                <div className='flex justify-center items-center mt-6'>
                    <h1 className='text-3xl font-inter text-[#ADADAD] font-bold'>Roll Call</h1>
                </div>
                
                <div className='flex justify-center gap-4 mt-2 items-center'>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-on" className="border-blue-500 bg-[#FFFFFF]" style={{ transform: 'scale(1.3)' }} />
                        <label className='text-lg text-[#9F9F9F] font-semibold'>All Present</label>
                    </div>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-off" className="border-[#00bcd4] bg-[#FFFFFF]" color="cyan" style={{ transform: 'scale(1.3)' }} />
                        <label className='text-lg text-[#9F9F9F] font-semibold'>All Present & Voting</label>

                    </div>
                </div>
                <div className='mx-4 mt-4'>
                <RollCallSearch/>
                </div>
                <div className='mx-4 mt-2'>
                <RollCallCountry/>
                </div>
                <div className='flex justify-end items-end mx-4 mt-4'>
                <RollCallPagination/>
                </div>
                <div className='text-center mx-4 mt-2'>
                <button type="button" class="text-white bg-[#2194FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-md font-bold px-7 py-2 mr-2 mb-2 ">Submit</button>

                </div>
            </div>
        </div>
    )
}

export default RollCallCheck
