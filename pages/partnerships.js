import React from 'react'

const partnerships = () => {
    return (
        <div className="container mx-auto mt-8 px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-content-center bg-white text-center">
                <div className="lg:col-span-1 col-span-2 shadow-lg rounded-lg">
                    <a href='/imperium'>
                        <img
                            className="object-fill rounded-lg transition duration-500 transform hover:scale-105 cursor-pointer px-8"
                            src="partner_1.png"
                            height="100%"
                            width="100%"
                        />
                    </a>
                    <h1 className="text-3xl font-semibold text-grey-700 sm:text-4xl mt-4">Imperium</h1>
                    <p className="text-2xl font-normal text-amber-600 sm:text-2xl py-4">Youthfulness From Within</p>
                    <a href='/imperium'>
                        <p className="text-apple-blue hover:underline mb-4">Learn More ></p>
                    </a>
                </div>
                <div className="lg:col-span-1 col-span-2 shadow-lg rounded-lg ">
                    <a href='https://www.sweeterva.com/'>
                        <img
                            className="object-fill rounded-lg transition duration-500 transform hover:scale-105 cursor-pointer px-8"
                            src="partner_2.png"
                            height="100%"
                            width="100%"
                        />
                    </a>
                    <h1 className="text-3xl font-semibold text-grey-700 sm:text-4xl mt-4">Sweeterva</h1>
                    <p className="text-2xl font-normal text-amber-600 sm:text-2xl py-4">Sugar for Diabetics</p>
                    <a href='https://www.sweeterva.com/'>
                        <p className="text-apple-blue hover:underline mb-4">Learn More ></p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default partnerships
