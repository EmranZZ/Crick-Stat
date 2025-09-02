"use client"
import React, { useState } from 'react';

const countries = [
    { name: 'Afghanistan', code: 'AFG' },
    { name: 'Australia', code: 'AUS' },
    { name: 'Bangladesh', code: 'BAN' },
    { name: 'England', code: 'ENG' },
    { name: 'India', code: 'IND' },
    { name: 'Ireland', code: 'IRE' },
    { name: 'New Zealand', code: 'NZL' },
    { name: 'Pakistan', code: 'PAK' },
    { name: 'South Africa', code: 'SA' },
    { name: 'Sri Lanka', code: 'SL' },
    { name: 'West Indies (multi-nation)', code: 'WI' },
    { name: 'Zimbabwe', code: 'ZIM' },
];

const gameTypes = ['Test', 'ODI', 'T20'];

const TeamBuilder = () => {
    const [selectedGameType, setSelectedGameType] = useState(gameTypes[0]);
    const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleMakeTeam = async () => {
        setLoading(true);
        setTeam(null);
        const response = await fetch('http://localhost:5000/api/build-team', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gameType: selectedGameType,
                country: selectedCountry,
            }),
        });
        const data = await response.json();
        setTeam(data);
        setLoading(false);
    };

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
                
                <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 dark-glass-intense neon-border rounded-3xl mb-8 neon-glow mx-auto">
                        <span className="text-5xl">🧠</span>
                    </div>
                    <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-white drop-shadow-lg leading-tight">
                        <span className="text-blue-300">Smart </span>
                        <span className="text-purple-300">Team Builder</span>
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
                        <span className="text-blue-300">Neural network</span> powered team optimization using 
                        <span className="text-purple-300"> quantum algorithms</span> and ICC performance matrices
                    </p>
                    
                    {/* Decorative line */}
                    <div className="mt-8 flex justify-center">
                        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 pb-16">
                {/* Enhanced Dark Configuration Panel */}
                <div className="relative group mb-16">
                    {/* Multiple glow layers */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-3xl opacity-30 blur-lg"></div>
                    
                    <div className="relative dark-glass-intense rounded-3xl border border-white/10 p-10 reflection-effect">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-blue-300 mb-4 drop-shadow-lg">
                                ⚙️ Neural Configuration
                            </h2>
                            <p className="text-gray-300 text-lg">
                                Configure your team parameters for optimal AI analysis
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Enhanced Game Type Selection */}
                            <div className="space-y-6">
                                <label className="block text-lg font-bold text-purple-300 mb-4 drop-shadow-lg">
                                    🎯 Game Matrix
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {gameTypes.map(type => (
                                        <button
                                            key={type}
                                            onClick={() => setSelectedGameType(type)}
                                            className={`relative py-4 px-6 rounded-2xl font-bold transition-all duration-300 ${
                                                selectedGameType === type
                                                    ? 'neon-gradient text-white shadow-2xl transform scale-110 neon-glow'
                                                    : 'dark-glass text-gray-300 hover:text-white hover:scale-105 border border-white/10 hover:border-white/30'
                                            }`}
                                        >
                                            {type}
                                            {selectedGameType === type && (
                                                <>
                                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full border-2 border-slate-900 floating-particles"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-2xl"></div>
                                                </>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Enhanced Country Selection */}
                            <div className="space-y-6">
                                <label className="block text-lg font-bold neon-text-pink mb-4">
                                    🌐 Team Protocol
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedCountry}
                                        onChange={e => setSelectedCountry(e.target.value)}
                                        className="w-full px-6 py-4 dark-glass-intense border-2 border-white/10 rounded-2xl focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all duration-300 text-white font-medium text-lg appearance-none cursor-pointer hover:border-white/30"
                                    >
                                        {countries.map(country => (
                                            <option key={country.code} value={country.code} className="bg-slate-800 text-white">
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                    {/* Custom cyber dropdown arrow */}
                                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg className="w-6 h-6 neon-text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Build Team Button */}
                        <div className="mt-12 text-center">
                            <button
                                onClick={handleMakeTeam}
                                disabled={loading}
                                className="group relative inline-flex items-center justify-center px-12 py-6 neon-gradient text-white font-bold text-xl rounded-3xl transition-all duration-500 hover:shadow-2xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none neon-glow reflection-effect"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-2 mr-4 h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                        </svg>
                                        <span className="neon-text-blue">Neural Processing...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="mr-3 text-2xl">⚡</span>
                                        <span>Initialize Team Matrix</span>
                                        <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </>
                                )}
                                
                                {/* Button particles */}
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full floating-particles"></div>
                                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full floating-particles" style={{animationDelay: '1s'}}></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enhanced Dark Team Results */}
                {team && (
                    <div className="space-y-10">
                        {/* Success Message with cyber styling */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-3xl opacity-40 blur-lg"></div>
                            <div className="relative dark-glass-intense neon-border rounded-3xl p-8 text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <span className="text-4xl mr-3">🎉</span>
                                    <h3 className="text-3xl font-bold neon-text-blue">Neural Team Generated!</h3>
                                </div>
                                <p className="text-xl text-gray-300">
                                    Quantum optimized <span className="neon-text-pink">{selectedGameType}</span> team matrix for 
                                    <span className="neon-text-blue"> {countries.find(c => c.code === selectedCountry)?.name}</span>
                                </p>
                            </div>
                        </div>

                        {/* Enhanced Batters Section */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-lg"></div>
                            <div className="relative dark-glass-intense rounded-3xl border border-white/10 overflow-hidden">
                                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-8 py-6 border-b border-white/10">
                                    <h3 className="text-2xl font-bold neon-text-blue flex items-center">
                                        <span className="mr-3 text-3xl">🏏</span>
                                        Neural Batters Matrix
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-cyan-500/10">
                                            <tr>
                                                <th className="px-8 py-6 text-left text-lg font-bold neon-text-blue uppercase tracking-wider">
                                                    ICC {selectedGameType} Rank
                                                </th>
                                                <th className="px-8 py-6 text-left text-lg font-bold neon-text-blue uppercase tracking-wider">
                                                    Player Identity
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {team.batters.map((player, idx) => (
                                                <tr key={idx} className="hover:bg-cyan-500/5 transition-colors duration-300 group">
                                                    <td className="px-8 py-6">
                                                        <div className="flex items-center">
                                                            <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg font-bold rounded-2xl mr-4 neon-glow">
                                                                {player.rank}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <span className="text-white font-bold text-lg group-hover:neon-text-blue transition-colors">
                                                            {player.name}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Bowlers Section */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-lg"></div>
                            <div className="relative dark-glass-intense rounded-3xl border border-white/10 overflow-hidden">
                                <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 px-8 py-6 border-b border-white/10">
                                    <h3 className="text-2xl font-bold neon-text-pink flex items-center">
                                        <span className="mr-3 text-3xl">⚾</span>
                                        Neural Bowlers Matrix
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-pink-500/10">
                                            <tr>
                                                <th className="px-8 py-6 text-left text-lg font-bold neon-text-pink uppercase tracking-wider">
                                                    ICC {selectedGameType} Rank
                                                </th>
                                                <th className="px-8 py-6 text-left text-lg font-bold neon-text-pink uppercase tracking-wider">
                                                    Player Identity
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {team.bowlers.map((player, idx) => (
                                                <tr key={idx} className="hover:bg-pink-500/5 transition-colors duration-300 group">
                                                    <td className="px-8 py-6">
                                                        <div className="flex items-center">
                                                            <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 text-white text-lg font-bold rounded-2xl mr-4 neon-glow">
                                                                {player.rank}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <span className="text-white font-bold text-lg group-hover:neon-text-pink transition-colors">
                                                            {player.name}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamBuilder;