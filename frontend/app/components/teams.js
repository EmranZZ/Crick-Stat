"use client"
import Link from "next/link";
import React from "react";

const teams = [
    {
        label: "Bangladesh",
        url: "https://www.cricbuzz.com/cricket-team/bangladesh/6/players",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/512px-Flag_of_Bangladesh.svg.png",
    },
    {
        label: "India",
        url: "https://www.cricbuzz.com/cricket-team/india/2/players",
        flag: "https://www.publicdomainpictures.net/pictures/230000/velka/india-flag.jpg",
    },
    {
        label: "Afganistan",
        url: "https://www.cricbuzz.com/cricket-team/afghanistan/96/players",
        flag: "https://static.vecteezy.com/system/resources/previews/026/614/722/non_2x/national-flag-of-afghanistan-islamic-emirate-afghan-country-flag-islamic-emirate-of-afghanistan-detailed-banner-eps-illustration-cut-file-vector.jpg",
    },
    {
        label: "Ireland",
        url: "https://www.cricbuzz.com/cricket-team/ireland/27/players",
        flag: "https://upload.wikimedia.org/wikipedia/commons/1/13/Ireland_flag_300.png",
    },
    {
        label: "Pakistan",
        url: "https://www.cricbuzz.com/cricket-team/pakistan/3/players",
        flag: "https://img.freepik.com/free-vector/illustration-pakistan-flag_53876-27123.jpg",
    },
    {
        label: "Australia",
        url: "https://www.cricbuzz.com/cricket-team/australia/4/players",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png",
    },
    {
        label: "Sri Lanka",
        url: "https://www.cricbuzz.com/cricket-team/sri-lanka/5/players",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1024px-Flag_of_Sri_Lanka.svg.png",
    },
    {
        label: "England",
        url: "https://www.cricbuzz.com/cricket-team/england/9/players",
        flag: "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png",
    },
    {
        label: "West Indies",
        url: "https://www.cricbuzz.com/cricket-team/west-indies/10/players",
        flag: "https://static.vecteezy.com/system/resources/previews/024/839/650/non_2x/illustration-of-west-indies-flag-design-vector.jpg",
    },
    {
        label: "South Africa",
        url: "https://www.cricbuzz.com/cricket-team/south-africa/11/players",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/2560px-Flag_of_South_Africa.svg.png",
    },
    {
        label: "Zimbabwe",
        url: "https://www.cricbuzz.com/cricket-team/zimbabwe/12/players",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/1280px-Flag_of_Zimbabwe.svg.png",
    },
    {
        label: "New Zealand",
        url: "https://www.cricbuzz.com/cricket-team/new-zealand/13/players",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_New_Zealand.png/1200px-Flag_of_New_Zealand.png",
    },
];

export default function Teams() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
            {/* Enhanced Dark Header Section */}
            <div className="relative overflow-hidden">
                {/* Cyber background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
                
                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full floating-particles"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full floating-particles" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full floating-particles" style={{animationDelay: '2s'}}></div>
                
                <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 dark-glass-intense neon-border rounded-3xl mb-8 neon-glow mx-auto">
                            <span className="text-4xl">⚡</span>
                        </div>
                    </div>
                    <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                        <span className="neon-text-blue">Cricket </span>
                        <span className="neon-text-pink">Teams</span>
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
                        Explore the <span className="neon-text-blue">cyber matrix</span> of global cricket teams with 
                        <span className="neon-text-pink"> AI-powered</span> analytics and deep statistical insights
                    </p>
                    
                    {/* Cyber line decoration */}
                    <div className="mt-8 flex justify-center">
                        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Enhanced Dark Teams Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teams.map((team, index) => (
                        <Link
                            key={team.label}
                            href={{
                                pathname: `/teams/${team.label.toLowerCase().replace(/\s+/g, '-')}`,
                                query: { path: team.url.replace('https://www.cricbuzz.com/cricket-team/', '')  },
                            }}
                            className="group relative block"
                        >
                            {/* Multiple glow layers */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
                            
                            {/* Main card with dark glass effect */}
                            <div className="relative dark-glass-intense rounded-3xl border border-white/10 p-6 transition-all duration-500 group-hover:border-white/30 group-hover:-translate-y-4 group-hover:scale-105 reflection-effect">
                                {/* Flag container with cyber styling */}
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden neon-border group-hover:neon-glow transition-all duration-300">
                                        <img
                                            src={team.flag}
                                            alt={`${team.label} flag`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Flag overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    
                                    {/* Cyber decorative elements */}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full border-2 border-slate-900 floating-particles"></div>
                                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full border border-slate-800 floating-particles" style={{animationDelay: '1s'}}></div>
                                </div>

                                {/* Team name with neon effect */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white group-hover:neon-text-blue transition-all duration-300 mb-3">
                                        {team.label}
                                    </h3>
                                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                                        <span>🌐</span>
                                        <span>Cyber Profile</span>
                                    </div>
                                    
                                    {/* Progress bar animation */}
                                    <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                                    </div>
                                </div>

                                {/* Hover indicator with cyber styling */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <div className="w-10 h-10 dark-glass neon-border rounded-xl flex items-center justify-center neon-glow">
                                        <svg className="w-5 h-5 neon-text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Card number indicator */}
                                <div className="absolute top-4 left-4 text-xs font-mono text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                                    #{String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Enhanced Dark Stats Section */}
            <div className="relative py-20">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></div>
                <div className="relative max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="neon-text-blue">Global Cricket </span>
                            <span className="neon-text-pink">Matrix</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-xl">
                            Real-time analytics from the cricket cyber network
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Teams", value: "12+", icon: "🏏", gradient: "from-cyan-400 to-blue-500" },
                            { label: "Countries", value: "12", icon: "🌍", gradient: "from-purple-400 to-pink-500" },
                            { label: "Players", value: "200+", icon: "👥", gradient: "from-pink-400 to-red-500" },
                            { label: "Matches", value: "∞", icon: "🎯", gradient: "from-green-400 to-teal-500" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="relative mb-6">
                                    <div className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                                        <span className="text-3xl">{stat.icon}</span>
                                    </div>
                                    {/* Reflection effect */}
                                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-r ${stat.gradient} rounded-3xl opacity-20 blur-lg scale-y-50`}></div>
                                </div>
                                <div className="text-4xl font-bold neon-text-blue mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-lg">{stat.label}</div>
                                
                                {/* Cyber line under each stat */}
                                <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}