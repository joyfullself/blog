import React from 'react';
// import Image from 'next/image';

export default function Imperium() {
    return (
        // <div className="container mx-auto px-10 mb-8">
        //     <h1>Imperium</h1>
        // </div>
        // <div>
        //         <h1>Gift of youth</h1>
                // <a
                //     href="/"
                //     className="transition duration-500 ease hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                //   >
                //     Blog
                //   </a>
                // <img
                //     className="h-full w-full pb-8 object-cover"
                //     src="1.png"
                // />
        //         <img
        //             className="h-full w-full pt-8 pb-8 object-cover bg-slate-800"
        //             src="1.png"
        //         />
        // </div>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
            <div className="col-span-3 ...">
                <img
                    className="h-20 w-15"
                    src="imperium_logo.png"
                />
            </div>
            <div className="col-span-3 ...">
                <h1 className="font-bold text-4xl text-center text-gray-700  px-4 lg:px-20">A lasting gift for ever-lasting youth</h1>
            </div>
            <div className="col-span-3 ...">
                <a
                    href="/"
                    className="transition duration-500 ease hover:underline block px-3 py-2 rounded-md text-base font-medium"
                >
                    <p className="text-blue-900 font-semibold">Shop gifts</p>
                </a>
            </div>
            <div className="col-span-3 ...">
                <img
                    className="h-full w-full pb-8"
                    src="1.png"
                />
            </div>
            <div className="...">02</div>
            <div className="...">03</div>
            <div className="col-span-2 ...">04</div>
            <div className="...">05</div>
            <div className="...">06</div>
            <div className="col-span-2 ...">07</div>
        </div>
    )
}