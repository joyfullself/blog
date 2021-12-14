import React from 'react';
import Head from 'next/head';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import BackgroundVideo from '../components/BackgroundVideo';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const about = () => {

const videoSource1 = "cta.mp4";
const videoSource2 = "cta.mp4";

    return (
        <ParallaxProvider>
            <div className="container mx-auto px-8">
            <Head>
                <title>Joyfullself</title>
                <link rel="icon" href="/logo.png" />
            </Head>
                <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center mt-4 px-4">
                    <div className="col-span-2">
                            <img
                            className="rounded-lg"
                            src="/cropped_about_1.jpg"
                            />
                    </div>

                    <div className="col-span-2 z-0">
                        <div className="bg-white w-screen bg-opacity-80 grid lg:grid-cols-2 grid-cols-1 px-4 py-4 justify-items-center text-black">
                            <div className="col-span-2 text-center mt-8">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">On a mission to empower a</span>{' '}
                                </h1>
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block text-pink-500 xl:inline">joyful self</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 col-span-2 mt-4">
                        <div class="relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                            <div class="relative z-30 px-8 lg:py-4 py-12 text-2xl bg-black bg-opacity-40 rounded-xlg">
                                <h1 className="lg:px-8 lg:py-24 px-10 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Wellness in</span>{' '}
                                    <span className="block text-pink-500 xl:inline">Mind</span>
                                </h1> 
                            </div>
                            <video autoPlay loop muted class="absolute z-10 w-auto">
                                <source src="about_1.mp4" type="video/mp4" />Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="lg:col-span-1 col-span-2 mt-4">
                        <div class="relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                            <div class="relative z-30 px-8 lg:py-4 py-12 text-2xl bg-black bg-opacity-40 rounded-xlg">
                                <h1 className="lg:px-8 lg:py-24 px-10 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Wellness in</span>{' '}
                                    <span className="block text-pink-500 xl:inline">Body</span>
                                </h1>
                            </div>
                            <video autoPlay loop muted class="absolute z-10 w-auto">
                                <source src="about_2.mp4" type="video/mp4" />Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    )
}

export default about
