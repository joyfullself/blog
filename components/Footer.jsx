import { Fragment, useState  } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Blog', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Partnerships', href: '/imperium', current: false },
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