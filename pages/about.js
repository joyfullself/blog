import React from 'react';
import Head from 'next/head';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const about = () => {
    return (
        <ParallaxProvider>
            <div className="container mx-auto">
            <Head>
                <title>Joyfullself</title>
                <link rel="icon" href="/logo.png" />
            </Head>
                <div className="grid lg:grid-cols-2 grid-cols-1 px-4 justify-items-center ">
                    <div className="lg:col-span-2 col-span-1 sticky top-16">
                        <Parallax className="custom-class" y={[50, 0]} tagOuter="figure">
                            <img src="/cropped_about_1.jpg" />
                        </Parallax>
                    </div>
                    <div className="lg:col-span-2 col-span-1 z-0 sticky top-16">
                        <div className="bg-white w-screen bg-opacity-80 grid lg:grid-cols-2 grid-cols-1 px-4 py-4 justify-items-center text-black">
                            <div className="col-span-2 text-center mt-8">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Empower a joyful self</span>{' '}
                                </h1>
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block text-pink-500 xl:inline">with wellness</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    In mid-2021, a group of friends went on a mission to live happier, healthier, and more fulfilling lives.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 col-span-1 z-0 ">
                        <div className="bg-white bg-opacity-100 grid w-screen grid-cols-1 justify-items-center text-black">
                            <div className="col-span-2 mt-8">
                                <img
                                className="object-fill rounded-lg mx-auto "
                                src="aboutus_2.png"
                                height="100%"
                                width="100%"
                                />
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-100 grid w-screen grid-cols-1 justify-items-center text-black">
                            <div className="col-span-2">
                                <img
                                className="object-fill rounded-lg mx-auto "
                                src="aboutus_1.png"
                                height="100%"
                                width="100%"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </ParallaxProvider> 
    )
}

export default about




        // <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        //             <div className="sm:text-center lg:text-left">
                    
                    
                   
        //             
        //             </div>
        //         </main>