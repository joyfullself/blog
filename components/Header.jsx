import React, {useContext} from 'react'

import Link from 'next/link';

const categories = [{name: 'Motivation', slug: 'motivation'}, {name: "Wellness"}, {slug: 'wellness'}]

const Header = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-black hover:text-pink-500 transition duration-300">
                            Joyfullself
                        </span>
                    </Link>
                </div>
                <nav className='flex items-end flex-wrap p-3 mt-3'>
                    
                    <div className="md:float-right hidden md:float- md:contents">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-pink-500 transition duration-300">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                    </div>
                    <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                </nav>
        </div>
    )
}

export default Header
