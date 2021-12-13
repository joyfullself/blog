import { Fragment, useState  } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Blog', href: '/', current: false },
  { name: 'Team', href: '/team', current: false },
  { name: 'Imperium', href: '/imperium', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const [isShowing, setIsShowing] = useState(false)

  return (
    <Disclosure as="nav" className="bg-gray-900 sticky top-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="logo.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="logo_full.png"
                    alt="Workflow"
                  />
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-amber-300 hover:text-white transition ease duration 800 ' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>                  
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}






// import React, {useContext, useState} from 'react'

// import Link from 'next/link';

// import { Transition } from "@headlessui/react";

// const categories = [{name: 'Motivation', slug: 'motivation'}, {name: "Wellness"}, {slug: 'wellness'}]

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//       <div className="z-1">
//         <nav className="bg-gray-800 mb-8 sticky">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                 <a
//                       href="/"
//                       className="transition duration-500 ease  text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                     <img
//                     className="h-20 w-20"
//                     src="logo.png"
//                     alt="Workflow"
//                     href="/"
//                     />
//                 </a>

//                 </div>
//                 <div className="hidden md:block">
//                   <div className="ml-10 flex items-baseline space-x-4">
//                     <a
//                       href="/"
//                       className=" transition duration-500 ease hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Blog
//                     </a>

//                     <a
//                       href="#"
//                       className="transition duration-500 ease text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Team
//                     </a>

//                     <a
//                       href="/imperium"
//                       className="transition duration-500 ease text-amber-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Imperium
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="-mr-2 flex md:hidden">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   type="button"
//                   className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                   aria-controls="mobile-menu"
//                   aria-expanded="false"
//                 >
//                   <span className="sr-only">Open main menu</span>
//                   {!isOpen ? (
//                     <svg
//                       className="block h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M4 6h16M4 12h16M4 18h16"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="block h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           <Transition
//             show={isOpen}
//             enter="transition ease-out duration-500 transform"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="transition ease-in duration-100 transform"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             {(ref) => (
//               <div className="md:hidden" id="mobile-menu">
//                 <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                   <a
//                     href="/"
//                     className="transition duration-500 ease hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Blog
//                   </a>

//                   <a
//                     href="#"
//                     className="transition duration-500 ease text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Team
//                   </a>

//                   <a
//                     href="/imperium"
//                     className="transition duration-500 ease text-amber-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Imperium
//                   </a>

//                   <a
//                     href="#"
//                     className="transition duration-500 ease text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Calendar
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Reports
//                   </a>
//                 </div>
//               </div>
//             )}
//           </Transition>
//         </nav>
//       </div>
//     )
// }

// export default Header