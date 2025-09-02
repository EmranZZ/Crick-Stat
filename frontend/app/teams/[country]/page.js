"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, React } from "react";
import axios from "axios";
import Link from "next/link";

export default function CountryPage({ params }) {
   console.log("params:", JSON.stringify(params, null, 2));
  const searchParams = useSearchParams();
   const relativePath = searchParams.get("path");  // get relative path from query param
  const baseUrl = "https://www.cricbuzz.com/cricket-team/";
  const country= params.country

  const fullUrl = relativePath ? baseUrl + relativePath : null;

  const [playerData, setPlayerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fullUrl) {
      axios
        .post("http://localhost:5000/api/teams/country", { url:fullUrl })
        .then((res) => {
          setPlayerData(res.data); // expects structured role-based JSON
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [fullUrl]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Enhanced Dark Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full floating-particles"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full floating-particles" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-block mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg mx-auto mb-8">
                <span className="text-3xl">🏏</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 capitalize leading-tight">
              <span className="neon-text-blue">{country}</span>
              <span className="neon-text-pink"> Squad</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-center">
              Explore the <span className="neon-text-blue">neural profiles</span> of cricket players from {country}
            </p>
            
            {/* Cyber line decoration */}
            <div className="mt-8 flex justify-center">
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              {/* Outer spinning ring */}
              <div className="w-20 h-20 border-4 border-cyan-200/20 border-t-cyan-400 rounded-full animate-spin"></div>
              
              {/* Inner pulsing dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <p className="mt-6 text-xl neon-text-blue font-medium">Neural network loading players...</p>
            
            {/* Loading dots animation */}
            <div className="flex space-x-2 mt-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {playerData.map((section, idx) => (
              <div key={idx} className="relative group">
                {/* Section glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity blur-lg"></div>
                
                <div className="relative dark-glass-intense rounded-3xl border border-white/10 p-8">
                  {/* Role header with cyber styling */}
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mr-4 neon-glow">
                      <span className="text-2xl">
                        {section.role.toLowerCase().includes('batter') && '🏏'}
                        {section.role.toLowerCase().includes('bowler') && '⚾'}
                        {section.role.toLowerCase().includes('keeper') && '🥅'}
                        {section.role.toLowerCase().includes('all') && '⚡'}
                        {!section.role.toLowerCase().includes('batter') && 
                         !section.role.toLowerCase().includes('bowler') && 
                         !section.role.toLowerCase().includes('keeper') && 
                         !section.role.toLowerCase().includes('all') && '👤'}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold neon-text-blue">{section.role}</h2>
                      <p className="text-gray-400">Neural Player Matrix</p>
                    </div>
                  </div>

                  {/* Players grid with enhanced styling */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {section.players.map((player, i) => (
                      <Link
                        key={i}
                        href={`https://www.cricbuzz.com${player.url}`}
                        target="_blank"
                        className="group/player relative block"
                      >
                        {/* Player card glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-2xl opacity-0 group-hover/player:opacity-30 transition-opacity duration-300 blur"></div>
                        
                        <div className="relative dark-glass rounded-2xl border border-white/10 p-4 transition-all duration-300 group-hover/player:border-white/30 group-hover/player:-translate-y-2 group-hover/player:scale-105 reflection-effect">
                          {/* Player image with cyber frame */}
                          <div className="relative mb-4">
                            <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden neon-border group-hover/player:neon-glow transition-all duration-300">
                              <img
                                src={player.img}
                                alt={player.name}
                                className="w-full h-full object-cover group-hover/player:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMUYyOTM3Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNDAiIHI9IjE1IiBmaWxsPSIjNjM3M0ZGIi8+CjxwYXRoIGQ9Ik0yNSA3NUMyNSA2NS4zMzUgMzMuMzM1IDU3IDQzIDU3SDE1N0M2Ni42NjUgNTcgNzUgNjUuMzM1IDc1IDc1IiBmaWxsPSIjNjM3M0ZGIi8+Cjwvc3ZnPgo=';
                                }}
                              />
                              {/* Image overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 opacity-0 group-hover/player:opacity-100 transition-opacity"></div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full border border-slate-900 floating-particles"></div>
                          </div>

                          {/* Player name with neon effect */}
                          <div className="text-center">
                            <h3 className="text-lg font-bold text-white group-hover/player:neon-text-blue transition-all duration-300 mb-1">
                              {player.name}
                            </h3>
                            <div className="flex items-center justify-center space-x-1 text-xs text-gray-400 group-hover/player:text-cyan-300 transition-colors">
                              <span>🔗</span>
                              <span>View Profile</span>
                            </div>
                            
                            {/* Progress bar animation */}
                            <div className="mt-3 h-0.5 bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full transform -translate-x-full group-hover/player:translate-x-0 transition-transform duration-1000"></div>
                            </div>
                          </div>

                          {/* Hover indicator */}
                          <div className="absolute top-3 right-3 opacity-0 group-hover/player:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/player:translate-x-0">
                            <div className="w-6 h-6 dark-glass neon-border rounded-lg flex items-center justify-center">
                              <svg className="w-3 h-3 neon-text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
