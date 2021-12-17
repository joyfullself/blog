import React, { Component } from "react";
import { ScrollTo } from "react-scroll-to";
import ScrollToTop from "react-scroll-to-top";


export default class Imperium extends Component {

    render() {
        return (
            <div className="container mx-auto mt-4 px-8 rounded-lg py-8">
                <ScrollToTop smooth color="#D97706" width="28" height="28" viewBox="-50 0 256 256"/>

                <header class="relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                    <div class="relative z-30 px-8 py-4 text-2xl bg-black bg-opacity-40 rounded-xlg">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            <span className="block">Ready to unlock youth?</span>
                            <span className="block text-amber-600">Get yours today.</span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 py-4 justify-items-center">
                            <div className="grid grid-cols-2 gap-6 justify-items-center mx-auto">
                                <div className="inline-flex rounded-md shadow">
                                    <a
                                    href="/"
                                    className="transition duration-500 ease inline-flex items-center justify-center px-5 py-3 border border-transparent text-xs font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
                                    >
                                    Get started
                                    </a>
                                </div>
                                <div className="ml-3 inline-flex rounded-md shadow">
                                <ScrollTo>
                                    {({ scroll }) => (
                                        <a
                                        onClick={() => scroll({x: 20, y: 3000, smooth: true })}
                                        className="transition duration-500 ease cursor-pointer inline-flex items-center justify-center px-5 py-3 border border-transparent text-xs font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-150"
                                        >
                                        Learn more
                                        </a>
                                    )}
                                </ScrollTo>
                                </div>
                            </div>
                        </div>
                    </div>

                    <video autoPlay loop muted class="absolute z-10 w-auto min-w-min min-h-min max-w-2xl">
                        <source src="cta.mp4" type="video/mp4" />Your browser does not support the video tag.
                    </video>
                </header>

                <div className="bg-transparent shadow-lg rounded-lg mt-8" >
                    <img
                        className="object-fill  rounded-lg mx-auto"
                        src="1.png"
                        height="100%"
                        width="100%"
                    />
                </div>


                <div className="bg-transparent rounded-lg py-8 mt-8" >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 justify-items-center px-8">
                        <div className="lg:col-span-6 col-span-1 ml-5 mt-4">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                <span className="block">Testimonies</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-6 col-span-1 shadow-lg">
                            <img
                            className="object-fill rounded-2xl mx-auto"
                            src="testimony_1.png"
                            height="100%"
                            width="100%"
                            />
                        </div>
                        {/* <div className="">05</div>
                        <div className="">06</div>
                        <div className="">07</div>
                        <div className="">07</div> */}
                    </div>
                </div>

                <div className="bg-transparent rounded-xl mx-auto mt-8" >
                    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
                        <div className="rounded-lg shadow-lg">
                            <img
                            className="object-fill rounded-lg"
                            src="imperium_1.png"
                            height="100%"
                            width="100%"
                            />
                        </div>
                        <div className="rounded-lg shadow-lg">
                            <img
                            className="object-fill rounded-lg"
                            src="imperium_2.png"
                            height="100%"
                            width="100%"
                            />
                        </div>
                    </div> */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 justify-self-center text-center">
                        <div className="lg:col-span-1 col-span-2 bg-apple-grey rounded-lg shadow-lg py-4">
                            <img
                                className="object-fill rounded-lg transition duration-500 transform hover:scale-105 cursor-pointer"
                                src="2.png"
                                height="100%"
                                width="100%"
                            />
                            <h1 className="text-3xl font-semibold text-white sm:text-4xl">Ultimate Cleanse</h1>
                            <p className="text-2xl font-normal text-amber-300 sm:text-2xl py-4">Your new superpower</p>
                            <a href='/'>
                                <p className="text-apple-blue hover:underline mb-4">Learn More ></p>
                            </a>
                        </div>

                        <div className="lg:col-span-1 col-span-2 bg-apple-white rounded-lg shadow-lg py-4">
                            <img
                                className="object-fill rounded-lg transition duration-500 transform hover:scale-105 cursor-pointer"
                                src="3.png"
                                height="100%"
                                width="100%"
                            />
                            <h1 className="text-3xl font-semibold text-grey-700 sm:text-4xl">Ultimate Cleanse</h1>
                            <p className="text-2xl font-normal text-amber-600 sm:text-2xl py-4">Your new superpower</p>
                            <a href='/'>
                                <p className="text-apple-blue hover:underline mb-4">Learn More ></p>
                            </a>
                        </div>

                        <div className="lg:col-span-1 col-span-2 bg-apple-white rounded-lg shadow-lg py-4">
                            <img
                                className="object-fill rounded-lg transition duration-500 transform hover:scale-105 cursor-pointer px-8"
                                src="4.png"
                                height="100%"
                                width="100%"
                            />
                            <h1 className="text-3xl font-semibold text-grey-700 sm:text-4xl">Ultimate Restore</h1>
                            <p className="text-2xl font-normal text-amber-600 sm:text-2xl py-4">The Japanese Secret</p>
                            <a href='/'>
                                <p className="text-apple-blue hover:underline mb-4">Learn More ></p>
                            </a>
                        </div>

                        <div className="lg:col-span-1 col-span-2 bg-apple-grey rounded-lg shadow-lg py-4">
                            <img
                                className="object-fill rounded-lg transition duration-500 transform hover:scale-105 cursor-pointer px-8"
                                src="5.png"
                                height="100%"
                                width="100%"
                            />
                            <h1 className="text-3xl font-semibold text-white sm:text-4xl">Ultimate Youth and Vitality</h1>
                            <p className="text-2xl font-normal text-amber-300 sm:text-2xl py-4">Your new superpower</p>
                            <a href='/'>
                                <p className="text-apple-blue hover:underline mb-4">Learn More ></p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}