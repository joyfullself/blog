import React, { Component } from "react";
import { ScrollTo } from "react-scroll-to";
import ScrollToTop from "react-scroll-to-top";


export default class Imperium extends Component {

    render() {
        return (
            <div className="container mx-auto mt-4 px-8 shadow-lg rounded-lg py-8">
                <ScrollToTop smooth color="#D97706" width="28" height="28" viewBox="-50 0 256 256"/>
                <div className="bg-white shadow-lg rounded-lg">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to unlock youth?</span>
                        <span className="block text-amber-600">Get yours today.</span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                href="#"
                                className="transition duration-500 ease inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
                                >
                                Get started
                                </a>
                            </div>
                            <div className="ml-3 inline-flex rounded-md shadow">
                            <ScrollTo>
                                {({ scroll }) => (
                                    <a
                                    onClick={() => scroll({x: 20, y: 2000, smooth: true })}
                                    className="transition duration-500 ease cursor-pointer inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                                    >
                                    Learn more
                                    </a>
                                )}
                            </ScrollTo>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg mt-8" >
                    <img
                        className="object-fill  rounded-2xl mx-auto"
                        src="1.png"
                        height="100%"
                        width="100%"
                    />
                </div>

                <div className="bg-white shadow-lg rounded-lg py-8 mt-8" >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 justify-items-center px-8">
                        <div className="lg:col-span-6 col-span-1 ml-5 mt-4">
                            <h1 className="text-2xl font-semibold text-gray-700">Testimonies</h1>
                        </div>
                        <div className="lg:col-span-2 col-span-1">
                            <img
                            className="object-fill rounded-2xl mx-auto"
                            src="testimony_1.png"
                            height="100%"
                            width="100%"
                            />
                        </div>
                        <div className="">05</div>
                        <div className="">06</div>
                        <div className="">07</div>
                        <div className="">07</div>
                    </div>
                </div>

                <div className="bg-white rounded-xl mx-auto mt-8" >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
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
                    </div>
                </div>
            </div>
        )
    }
}