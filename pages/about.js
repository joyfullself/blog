import React from 'react';
import Head from 'next/head';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTiktok, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const socials = [
    { name: 'TikTok', href: '/', current: false },
    { name: 'Instagram', href: '/', current: false },
    { name: 'Facebook', href: '/', current: false },
]


const about = () => {



    return (
        <ParallaxProvider>
            <div className="container mx-auto px-8">
            <Head>
                <title>Joyfullself</title>
                <link rel="icon" href="/logo.png" />
            </Head>
                <div className="bg-white grid rounded-lg shadow-lg lg:grid-cols-2 grid-cols-1 justify-items-center mt-4 px-4">
                    <div className="col-span-2 mt-4">
                            <img
                            className="rounded-lg"
                            src="/cropped_about_1.jpg"
                            />
                    </div>

                    <div className="col-span-2">
                        <h1 className="text-center mt-8 mb-8 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            Empower with Wellness
                        </h1>
                    </div>

                    <div className="col-span-2">
                        <div className= "grid grid-cols-3 justify-items-center text-black">
                            <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <a
                                    href='https://www.tiktok.com/@joyfullself?lang=en'
                                >
                                    <h1 className="text-xl tracking-tight font-semibold text-gray-900 sm:text-xl md:text-xl">
                                        <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
                                        <span className="text-white">TT</span>
                                    </h1>
                                </a>
                            </div>
                            <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <a
                                    href='https://www.instagram.com/joyfullself/'
                                >
                                    <h1 className="text-xl tracking-tight font-semibold text-gray-900 sm:text-xl md:text-xl">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        <span className="text-white">IG</span>
                                    </h1>
                                </a>
                            </div>
                            <div className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <a
                                    href='https://www.facebook.com/joyfullself'
                                >
                                    <h1 className="text-xl tracking-tight font-semibold text-gray-900 sm:text-xl md:text-xl">
                                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                        <span className="text-white">FB</span>
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 col-span-2 mt-4">
                        <div className="relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                            <div className="relative z-30 px-8 lg:py-4 py-12 text-2xl  rounded-xlg">
                                <h1 className="lg:px-8 lg:py-24 px-10 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Wellness in</span>{' '}
                                    <span className="block text-pink-500 xl:inline">Mind</span>
                                </h1>
                            </div>
                            <video autoPlay loop muted className="absolute z-10 w-auto">
                                <source src="about_1.mp4" type="video/mp4" />Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="lg:col-span-1 col-span-2 mt-4 mb-8">
                        <div className="relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                            <div className="relative z-30 px-8 lg:py-4 py-12 text-2x rounded-xlg">
                                <h1 className="lg:px-8 lg:py-24 px-10 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Wellness in</span>{' '}
                                    <span className="block text-pink-500 xl:inline">Body</span>
                                </h1>
                            </div>
                            <video autoPlay loop muted className="absolute z-10 w-auto">
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
