import React from 'react'
import RollCallCheck from './RollCallCheck'
import RollCallResult from './RollCallResult'

const RollCallDashboard = () => {
    return (
        <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 mx-2 lg:mx-20 mt-10 justify-center items-center">
        <div>
          <RollCallCheck/>
        </div>
        <div>
            <RollCallResult/>
        </div>
      </div>
      


        </div>
    )
}

export default RollCallDashboard
