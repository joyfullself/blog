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
        <div class="grid grid-cols-3 gap-4 justify-items-center">
            <div class="col-span-3 ...">
                <img
                    className="h-20 w-15"
                    src="imperium_logo.png"
                />
            </div>
            <div class="col-span-3 ...">
                <h1 class="font-bold text-4xl">A lasting gift for ever-lasting youth</h1>
            </div>
            <div class="col-span-3 ...">
                <a
                    href="/"
                    className="transition duration-500 ease hover:underline block px-3 py-2 rounded-md text-base font-medium"
                >
                    <p className="text-blue-900 font-semibold">Shop gifts</p>
                </a>
            </div>
            <div class="col-span-3 ...">
                <img
                    className="h-full w-full pb-8"
                    src="1.png"
                />
            </div>
            <div class="...">02</div>
            <div class="...">03</div>
            <div class="col-span-2 ...">04</div>
            <div class="...">05</div>
            <div class="...">06</div>
            <div class="col-span-2 ...">07</div>
        </div>
    )
}