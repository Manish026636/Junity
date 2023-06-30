import React from "react";

const RollCallResult = () => {
  return (
    <div>
      <div className=" w-full bg-[#FBFBFB]  border-2 border-[#F0F0F0] h-auto pb-20 rounded-3xl  ">
        <div className="flex justify-center items-center h-[10vh]">
          <h1 className="text-3xl font-inter text-[#ADADAD] font-bold">
            Roll Call Result
          </h1>
        </div>
        <div class="flex mx-10 mt-10">
          <div class="w-8 h-8 bg-blue-500 rounded-lg "></div>
          <span class="ml-4 text-lg text-[#9F9F9F] font-semibold">Present</span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div class="flex w-1/2 h-10 bg-white border border-gray-200 rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-blue-500"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="text-white text-md ml-4 font-semibold">
                4 / 10 ~ 45%
              </span>
            </div>
          </div>
        </div>
        <div class="flex mx-10 mt-10">
          <div class="w-8 h-8 bg-[#37D3AD]  rounded-lg "></div>
          <span class="ml-4 text-lg text-[#9F9F9F] font-semibold">Present & Voting</span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div class="flex w-1/2 h-10 bg-white border border-gray-200 rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-[#37D3AD]"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="text-white text-md ml-4 font-semibold">
                4 / 10 ~ 45%
              </span>
            </div>
          </div>
        </div>
        <div class="flex mx-10 mt-10">
          <div class="w-8 h-8 bg-[#6F6F6F] rounded-lg "></div>
          <span class="ml-4 text-lg text-[#9F9F9F] font-semibold">Absent</span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div class="flex w-1/2 h-10 bg-white border border-gray-200 rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-[#6F6F6F]"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="text-white text-md ml-4 font-semibold">
                4 / 10 ~ 45%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RollCallResult;
