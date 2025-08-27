'use client'

import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-gray-300 shadow-xl">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
                CrickPlay
            </Link>
            {/* Navigation Buttons */}
            <div className="flex space-x-4">
                <Link
                    href="/"
                    className="px-4 py-2 rounded-md text-sm font-bold text-gray-700 hover:bg-blue-100 transition"
                >
                    Home
                </Link>
                <Link
                    href="/teams"
                    className="px-4 py-2 rounded-md text-sm font-bold text-gray-700 hover:bg-blue-100 transition"
                >
                    Teams
                </Link>
                
                <Link
                    href="/team-builder"
                    className="px-4 py-2 font-bold rounded-md text-sm  text-gray-700 hover:bg-blue-100 transition"
                >
                    Smart Team Builder
                </Link>
            </div>
        </nav>
    );
}