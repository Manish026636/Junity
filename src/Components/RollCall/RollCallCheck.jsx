import { Checkbox } from '@material-tailwind/react'
import React from 'react'
import RollCallResult from './RollCallResult'
import RollCallSearch from './RollCallSearch'
import RollCallCountry from './RollCallCountry'

const RollCallCheck = () => {
    return (
        <div>
            <div className=' w-full bg-[#FBFBFB]  border-2 border-[#F0F0F0] h-[90vh] rounded-3xl  '>
                <div className='flex justify-center items-center mt-6'>
                    <h1 className='text-3xl font-inter text-[#ADADAD] font-bold'>Roll Call</h1>
                </div>
                <div className='flex justify-center mt-2 items-center'>
                    <div className='lg:mt-4'>
                        <div class="flex items-center justify-center mx-4">
                            <div class="w-6 h-6 bg-blue-500 rounded-lg"></div>
                            <span class="ml-2 text-lg text-[#9F9F9F] font-medium">Present</span>
                        </div>
                    </div>
                    <div className='lg:mt-4'>
                        <div class="flex items-center justify-center mx-4">
                            <div class="w-6 h-6 bg-[#00bcd4] rounded-lg"></div>
                            <span class="ml-2 text-lg text-[#9F9F9F] font-medium">Present & Voting</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-4 mt-4 items-center'>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-on" className="border-blue-500" style={{ transform: 'scale(1.3)' }} />
                        <label className='text-lg text-[#9F9F9F] font-semibold'>All Present</label>
                    </div>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-off" className="border-[#00bcd4]" color="cyan" style={{ transform: 'scale(1.3)' }} />
                        <label className='text-lg text-[#9F9F9F] font-semibold'>All Present & Voting</label>

                    </div>
                </div>
                <div className='mx-4 mt-4'>
                <RollCallSearch/>
                </div>
                <div className='mx-4 mt-4'>
                <RollCallCountry/>
                </div>
               
            </div>
        </div>
    )
}

export default RollCallCheck
