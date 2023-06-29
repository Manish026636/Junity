import React from "react";
import { AiFillHome, AiFillFileText,AiFillPhone, AiFillExclamationCircle  } from 'react-icons/ai';
import { FcTodoList, FcBookmark, FcApproval, FcDatabase, FcDocument } from 'react-icons/fc';
import CommitteDetails from "./CommitteDetails";

const Sidebar = () => {
  return (
    <div>
      <aside className="flex">
        <div className="flex flex-col items-center w-16 h-screen py-8 bg-white dark:bg-gray-900 dark:border-gray-700">
          <nav className="flex flex-col items-center flex-1 space-y-8 ">
            {/* Single Logo */}

            <a
              href="#"
              className="p-1.5 inline-block text-blue-500 focus:outline-nones bg-blue-100 transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
            <AiFillHome size={24} />
            </a>

            <a
              href="#"
              className="p-1.5 inline-block text-gray-500  transition-colors duration-200   rounded-lg dark:text-blue-400 dark:bg-gray-800"
            >
              <AiFillFileText size={24}/>
            </a>

            <a
              href="#"
              className="p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <AiFillPhone size={24}/>
            </a>

            <a
            href="#"
            className="p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <AiFillExclamationCircle size={24} />
          </a>
          

            
          </nav>

          <div className="flex flex-col items-center mt-4 space-y-4">
            <a href="#">
              <img
                className="object-cover w-8 h-8 rounded-lg"
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
            </a>

            <button
              href="#"
              className="text-gray-500 hover:text-red-400 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0  dark:hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="h-screen px-5 py-8 overflow-y-auto bg-white border-l border-r sm:w-56 w-40 dark:bg-gray-900 dark:border-gray-700">
          <div className="relative flex justify-center items-center">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
            <img src="LogoFree.png" className="w-[13vh]" alt="" />
          </div>

          <nav className="mt-10 -mx-3 space-y-6 ">
            <div className="space-y-3 ">
             

              <CommitteDetails/>
            </div>

            <div className="space-y-3 ">
              <button className="flex border border-1 border-[#F0F0F0] items-center px-3 w-full py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FcTodoList size={24}/>
                <span className="mx-2 text-md font-bold">Roll Call</span>
              </button>

              <button className="flex border border-1 border-[#F0F0F0] items-center px-3 w-full py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FcBookmark size={24} />

                <span className="mx-2 text-md font-bold">GSL</span>
              </button>

              <button className="flex border border-1 border-[#F0F0F0] items-center px-3 w-full py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FcApproval size={24}/>

                <span className="mx-2 text-md font-bold">MOD</span>
              </button>
              <button className="flex border border-1 border-[#F0F0F0] items-center px-3 w-full py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FcDatabase size={24}/>

                <span className="mx-2 text-md font-bold">UNMOD</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
