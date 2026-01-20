import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Homepage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { label: 'Features', href: '#' },
        { label: 'Materials', href: '#' },
        { label: 'Tutors', href: '#' },
        { label: 'Pricing', href: '#' }
    ];

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-[FBFCF8]">
                {/* Header */}
                <header className="bg-[#FCF8F1] bg-opacity-30">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 lg:h-20">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <a href="#" className="flex">
                                    <h1 className='font-bold text-2xl'>AcadEnch</h1>
                                </a>
                            </div>

                            {/* Mobile Menu Button */}
                            <button 
                                type="button" 
                                onClick={toggleMenu}
                                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMenuOpen ? (
                                    <svg 
                                        className="w-6 h-6" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M6 18L18 6M6 6l12 12" 
                                        />
                                    </svg>
                                ) : (
                                    <svg 
                                        className="w-6 h-6" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M4 8h16M4 16h16" 
                                        />
                                    </svg>
                                )}
                            </button>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                                {menuItems.map((item) => (
                                    <a 
                                        key={item.label}
                                        href={item.href} 
                                        className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <a 
                                href="#" 
                                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                                role="button"
                            >
                                Join Now
                            </a>
                        </div>

                        {/* Mobile Navigation Menu */}
                        {isMenuOpen && (
                            <div className="lg:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {menuItems.map((item) => (
                                        <a 
                                            key={item.label}
                                            href={item.href} 
                                            className="block px-3 py-2 text-base font-medium text-black transition-all duration-200 hover:text-opacity-80"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                    <a 
                                        href="#" 
                                        className="block w-full px-3 py-2 mt-4 text-base font-semibold text-center text-white transition-all duration-200 bg-black rounded-md hover:bg-gray-800"
                                        role="button"
                                    >
                                        Join Now
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                {/* Hero Section */}
                <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            {/* Hero Content */}
                            <div>
                                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                                    A key to learn for learners
                                </p>
                                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                                    Connect & learn from the tutors
                                </h1>
                                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                                    Learn and grow as an AcadEnch learner.
                                </p>

                                {/* CTA Button */}
                                <a 
                                    href="#" 
                                    className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400 group"
                                    role="button"
                                >
                                    Join for free
                                    <svg 
                                        className="w-6 h-6 ml-8 -mr-2 transition-transform duration-200 group-hover:translate-x-1" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={1.5} 
                                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                                        />
                                    </svg>
                                </a>

                                {/* Login Link */}
                                <p className="mt-5 text-gray-600">
                                    Already joined us?{' '}
                                    <a href="#" className="text-black transition-all duration-200 hover:underline">
                                        Log in
                                    </a>
                                </p>
                            </div>

                            {/* Hero Image */}
                            <div>
                                    <img 
                                        className="w-full rounded-md" 
                                        src="assets/mockupy.avif" 
                                        alt="People collaborating and learning" 
                                    />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}