'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full relative">
            {/* Dark Cyber Background with Grid */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 cyber-grid"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
            
            <div className="relative dark-glass-intense">
                <div className="flex items-center justify-between px-6 py-4 lg:px-8">
                    {/* Enhanced Logo with Neon Effect */}
                    <Link href="/" className="group flex items-center space-x-3">
                        <div className="relative">
                            {/* Outer glow ring */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
                            {/* Logo container */}
                            <div className="relative w-12 h-12 dark-glass neon-border rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold neon-text-blue">
                                    C
                                </span>
                            </div>
                            {/* Floating particles */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full floating-particles"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full floating-particles" style={{animationDelay: '1s'}}></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold neon-text-blue group-hover:text-white transition-colors tracking-tight">
                                CrickPlay
                            </span>
                            <span className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors">
                                Cyber Analytics
                            </span>
                        </div>
                    </Link>

                    {/* Enhanced Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Link
                            href="/"
                            className="group relative px-6 py-3 rounded-2xl text-white font-bold transition-all duration-300 hover:text-blue-300 reflection-effect hover:bg-white/10"
                        >
                            <div className="absolute inset-0 dark-glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative z-20 flex items-center space-x-2 drop-shadow-lg">
                                <span>🏠</span>
                                <span>Home</span>
                            </span>
                        </Link>
                        <Link
                            href="/teams"
                            className="group relative px-6 py-3 rounded-2xl text-white font-bold transition-all duration-300 hover:text-purple-300 reflection-effect hover:bg-white/10"
                        >
                            <div className="absolute inset-0 dark-glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative z-20 flex items-center space-x-2 drop-shadow-lg">
                                <span>⚡</span>
                                <span>Teams</span>
                            </span>
                        </Link>
                        <Link
                            href="/team-builder"
                            className="group relative px-6 py-3 ml-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-cyan-400/50 rounded-2xl text-white font-bold transition-all duration-300 hover:scale-105 hover:border-pink-400/70 neon-glow"
                        >
                            <div className="absolute inset-0 neon-gradient rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            <span className="relative z-20 flex items-center space-x-2 drop-shadow-lg">
                                <span>🧠</span>
                                <span>Smart Builder</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Enhanced Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border-2 border-cyan-400/50 text-white hover:border-pink-400/70 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    >
                        <svg className="w-6 h-6 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Enhanced Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 dark-glass-intense border-t border-white/10 backdrop-blur-xl">
                        <div className="px-6 py-6 space-y-3">
                            <Link
                                href="/"
                                className="block px-6 py-4 rounded-xl text-white font-bold hover:neon-text-blue dark-glass hover:bg-white/10 transition-all duration-300 reflection-effect drop-shadow-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                🏠 Home
                            </Link>
                            <Link
                                href="/teams"
                                className="block px-6 py-4 rounded-xl text-white font-bold hover:neon-text-pink dark-glass hover:bg-white/10 transition-all duration-300 reflection-effect drop-shadow-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                ⚡ Teams
                            </Link>
                            <Link
                                href="/team-builder"
                                className="block px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/50 text-white font-bold hover:border-pink-400/70 transition-all duration-300 drop-shadow-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                🧠 Smart Team Builder
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}