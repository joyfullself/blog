// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
    // <div>
    //   <nav className="bg-gray-800">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex items-center justify-between h-16">
    //         <div className="flex items-center">
    //           <div className="flex-shrink-0">
    //             <img
    //               className="h-8 w-8"
    //               src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
    //               alt="Workflow"
    //             />
    //           </div>
    //           <div className="hidden md:block">
    //             <div className="ml-10 flex items-baseline space-x-4">
    //               <a
    //                 href="#"
    //                 className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Dashboard
    //               </a>

    //               <a
    //                 href="#"
    //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Team
    //               </a>

    //               <a
    //                 href="#"
    //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Projects
    //               </a>

    //               <a
    //                 href="#"
    //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Calendar
    //               </a>

    //               <a
    //                 href="#"
    //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Reports
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="-mr-2 flex md:hidden">
    //           <button
    //             onClick={() => setIsOpen(!isOpen)}
    //             type="button"
    //             className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    //             aria-controls="mobile-menu"
    //             aria-expanded="false"
    //           >
    //             <span className="sr-only">Open main menu</span>
    //             {!isOpen ? (
    //               <svg
    //                 className="block h-6 w-6"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             ) : (
    //               <svg
    //                 className="block h-6 w-6"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M6 18L18 6M6 6l12 12"
    //                 />
    //               </svg>
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <Transition
    //       show={isOpen}
    //       enter="transition ease-out duration-100 transform"
    //       enterFrom="opacity-0 scale-95"
    //       enterTo="opacity-100 scale-100"
    //       leave="transition ease-in duration-75 transform"
    //       leaveFrom="opacity-100 scale-100"
    //       leaveTo="opacity-0 scale-95"
    //     >
    //       {(ref) => (
    //         <div className="md:hidden" id="mobile-menu">
    //           <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //             <a
    //               href="#"
    //               className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Dashboard
    //             </a>

    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Team
    //             </a>

    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Projects
    //             </a>

    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Calendar
    //             </a>

    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Reports
    //             </a>
    //           </div>
    //         </div>
    //       )}
    //     </Transition>
    //   </nav>

      
    // </div>
//   );
// }

// export default Nav;

import React, {useContext, useState} from 'react'

import Link from 'next/link';

import { Transition } from "@headlessui/react";

const categories = [{name: 'Motivation', slug: 'motivation'}, {name: "Wellness"}, {slug: 'wellness'}]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Calendar
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </div>
        // <div className="container mx-auto px-10 mb-8">
               
        //         <nav className='flex items-end flex-wrap p-3 mt-3'>
        //             <div className="md:float-left block">
        //                 <Link href="/">
        //                     <span className="cursor-pointer font-bold text-4xl text-black hover:text-pink-500 transition duration-300">
        //                         Joyfullself
        //                     </span>
        //                 </Link>
        //             </div>
        //             <div className="md:float-right hidden md:float- md:contents">
        //             {categories.map((category) => (
        //                 <Link key={category.slug} href={`/category/${category.slug}`}>
        //                     <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-pink-500 transition duration-300">
        //                         {category.name}
        //                     </span>
        //                 </Link>
        //             ))}
        //             </div>
        //             <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
        //                 <svg
        //                     className='w-6 h-6'
        //                     fill='none'
        //                     stroke='currentColor'
        //                     viewBox='0 0 24 24'
        //                     xmlns='http://www.w3.org/2000/svg'
        //                 >
        //                     <path
        //                     strokeLinecap='round'
        //                     strokeLinejoin='round'
        //                     strokeWidth={2}
        //                     d='M4 6h16M4 12h16M4 18h16'
        //                     />
        //                 </svg>
        //             </button>
        //         </nav>
        // </div>
    )
}

export default Header
