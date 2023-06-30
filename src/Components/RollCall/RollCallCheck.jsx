import { Checkbox } from '@material-tailwind/react'
import React from 'react'

const RollCallCheck = () => {
    return (
        <div>
            <div className=' w-full bg-[#FBFBFB]  border-2 border-[#F0F0F0] h-[90vh] rounded-3xl  '>
                <div className='flex justify-center items-center mt-8'>
                    <h1 className='text-3xl font-inter text-[#ADADAD] font-bold'>Roll Call</h1>
                </div>
                <div className='flex justify-center mt-4 items-center'>
                    <div className='lg:mt-4'>
                        <div class="flex items-center justify-center mx-4">
                            <div class="w-6 h-6 bg-blue-500 rounded-lg"></div>
                            <span class="ml-2 text-lg text-[#9F9F9F] font-medium">Present</span>
                        </div>
                    </div>
                    <div className='lg:mt-4'>
                        <div class="flex items-center justify-center mx-4">
                            <div class="w-6 h-6 bg-[#37D3AD] rounded-lg"></div>
                            <span class="ml-2 text-lg text-[#9F9F9F] font-medium">Present & Voting</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-4 items-center'>
                    <div className='lg:mt'>
                        <div class="flex items-center justify-center mx-4">
                        <Checkbox className='border border-[#2194FF]'  />
                        <label for="default-checkbox" class="ml-2 text-lg font-semibold text-[#9F9F9F] dark:text-gray-300">Present</label>
                        </div>
                    </div>
                    <div className='lg:mt'>
                        <div class="flex items-center justify-center mx-4">
                        <Checkbox className='border bg-[#37D3AD] border-[#37D3AD]'  />
                        <label for="default-checkbox" class="ml-2 text-lg font-semibold text-[#9F9F9F] dark:text-gray-300">All Present & Voting</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RollCallCheck
