import { Fragment, useState  } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Blog', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Partnerships', href: '/partnerships', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    return (
        <div class="mt-8 bg-gray-900">
        <div class="max-w-2xl mx-auto text-white py-10">
            <div class="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Joyfullself, 2021. </p>
                <div class="order-1 md:order-2">
                {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'transition duration-500 ease text-amber-300 hover:text-amber-500  hover:bg-gray-700 ' : 'transition duration-500 ease text-gray-300 hover:bg-gray-700 hover:text-white',
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
    )
}


// import { faTiktok, faInstagram, faFacebook, faYoutube, faSpotify, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
// const socials = [
//     { name: 'TikTok', href: '/', current: false },
//     { name: 'Instagram', href: '/', current: false },
//     { name: 'Facebook', href: '/', current: false },
//     { name: 'Youtube', href: '/', current: false },
//     { name: 'Spotify', href: '/', current: false },
//     { name: 'Telegram', href: '/', current: false },
//     { name: 'Twitter', href: '/', current: false },
// ]
{/* <div class="mt-8 bg-gray-900 "> */}
    //     <div class="max-w-2xl mx-auto text-white py-10">
    //         <div class="flex flex-col md:flex-row md:justify-between items-center text-sm text-white grid-cols-2">
    //             <p class="order-2 md:order-1 mt-8 md:mt-0"> Copyright &copy; 2021 Joyfullself. All Rights Reserved. </p>
    //             <div class="order-1 md:order-2 grid grid-cols-5 ml-60">
    //                 <div className="col-span-5 text-center py-4">FOLLOW US</div>
                    // <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                    //     <a
                    //         href='https://www.tiktok.com/@joyfullself?lang=en'
                    //     >
                    //             <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
                    //     </a>
                    // </div>
                    // <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    //     <a
                    //         href='https://www.instagram.com/joyfullself/'
                    //     >
                    //         <h1 className="text-xl tracking-tight font-semibold sm:text-xl md:text-xl">
                    //             <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    //         </h1>
                    //     </a>
                    // </div>
                    // <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    //     <a
                    //         href='https://www.facebook.com/joyfullself'
                    //     >
                    //         <h1 className="text-xl tracking-tight font-semibold sm:text-xl md:text-xl">
                    //             <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    //         </h1>
                    //     </a>
                    // </div>
                    // <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    //     <a
                    //         href=''
                    //     >
                    //         <h1 className="text-xl tracking-tight font-semibold sm:text-xl md:text-xl">
                    //             <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                    //         </h1>
                    //     </a>
                    // </div>
                    // <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    //     <a
                    //         href=''
                    //     >
                    //         <h1 className="text-xl tracking-tight font-semibold sm:text-xl md:text-xl">
                    //             <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
                    //         </h1>
                    //     </a>
                    // </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>



    // <div className="grid grid-cols-2 text-center justify-items-center bg-gray-900 p-4 text-white">
    //         <div className="font-normal text-xs">Copyright &copy; 2021 Joyfullself. All Rights Reserved.</div>
    //         <div className="grid grid-rows-2">
    //             <div className="">
    //                 FOLLOW US
    //             </div>
    //             <div className="grid grid-cols-7 justify-items-center">
    //                 <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
    //                     <a
    //                         href='https://www.tiktok.com/@joyfullself?lang=en'
    //                     >
    //                             <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
    //                     </a>
    //                 </div>
    //                 <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    //                     <a
    //                         href='https://www.instagram.com/joyfullself/'
    //                     >
    //                         <h1 className="text-xs tracking-tight font-semibold sm:text-xl md:text-xl">
    //                             <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    //                         </h1>
    //                     </a>
    //                 </div>
    //                 <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    //                     <a
    //                         href='https://www.facebook.com/joyfullself'
    //                     >
    //                         <h1 className="text-xl tracking-tight font-semibold sm:text-xl md:text-xl">
    //                             <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    //                         </h1>
    //                     </a>
    //                 </div>
    //                 <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    //                     <a
    //                         href=''
    //                     >
    //                         <h1 className="text-xl tracking-tight font-semibold sm:text-xl md:text-xl">
    //                             <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
    //                         </h1>
    //                     </a>
    //                 </div>
    //                 <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    //                     <a
    //                         href=''
    //                     >
    //                         <h1 className="text-xl tracking-tight font-semibold sm:text-xl md:text-xl">
    //                             <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
    //                         </h1>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>