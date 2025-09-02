"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2021/10/21/bangladesh-cricket.jpeg",
  "https://gamerules.com/wp-content/uploads/Cricket-2-750x422.jpg",
  "https://metaphoremagazine.com/wp-content/uploads/2024/10/3.Children-playing-cricket-in-a-slum-2-1600x1024.jpg",
];

export default function Home() {
  const [divContent, setDivContent] = useState("");
  const [cssLinks, setCssLinks] = useState([]);
  const [inlineStyles, setInlineStyles] = useState("");

   const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/page/home")
      .then((res) => res.json())
      .then(({ divContent, cssLinks, inlineStyles }) => {
        setDivContent(divContent);
        setInlineStyles(inlineStyles);

        // Append CSS links if not already present
        cssLinks.forEach((href) => {
          if (!document.querySelector(`link[href="${href}"]`)) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            document.head.appendChild(link);
          }
        });

        // Append inline styles if not already added
        if (inlineStyles) {
          // Check if a style tag with id exists to avoid duplicates
          if (!document.getElementById("espn-inline-styles")) {
            const styleTag = document.createElement("style");
            styleTag.id = "espn-inline-styles";
            styleTag.innerHTML = inlineStyles;
            document.head.appendChild(styleTag);
          }
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Dark Hero Section with Enhanced Carousel */}
      <div className="relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full floating-particles"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full floating-particles" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full floating-particles" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          {/* Enhanced Welcome Text */}
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="relative">
                <h1 className="text-6xl lg:text-8xl font-bold mb-8 relative leading-tight">
                  <span className="neon-text-blue">Welcome to </span>
                  <span className="neon-text-pink">CrickPlay</span>
                </h1>
                {/* Reflection effect under text */}
                <div className="absolute top-full left-0 right-0 h-20 bg-gradient-to-b from-cyan-500/20 to-transparent blur-xl transform rotate-180 scale-y-50 opacity-30"></div>
              </div>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 text-center">
              Enter the <span className="neon-text-blue">cyber realm</span> of cricket analytics with 
              <span className="neon-text-pink"> AI-powered</span> insights and futuristic team building
            </p>
            
            {/* Cyber stats bar */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              {[
                { label: "Teams Analyzed", value: "12+" },
                { label: "AI Predictions", value: "∞" },
                { label: "Data Points", value: "1M+" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold neon-text-blue">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Dark Carousel */}
          <div className="flex justify-center items-center mb-16">
            <div className="relative group">
              {/* Multiple layer glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-3xl opacity-30 blur-lg"></div>
              
              <div
                className="relative dark-glass-intense rounded-3xl shadow-2xl border border-white/10 overflow-hidden neon-glow"
                style={{ width: '900px', height: '550px' }}
              >
                <div
                  className="flex transition-all duration-1000 ease-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((src, idx) => (
                    <div
                      key={idx}
                      className="min-w-full h-full relative overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={`Cricket Scene ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      {/* Dark cyber overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10"></div>
                      
                      {/* Enhanced caption with cyber styling */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="dark-glass-intense rounded-2xl p-6 neon-border">
                          <h3 className="neon-text-blue font-bold text-2xl mb-2">
                            {idx === 0 && "🇧🇩 Bangladesh Cyber Squad"}
                            {idx === 1 && "⚡ Championship Matrix"}
                            {idx === 2 && "🌟 Grassroots Protocol"}
                          </h3>
                          <p className="text-gray-300 text-lg">
                            {idx === 0 && "Neural network analysis of Bangladesh's cricket evolution"}
                            {idx === 1 && "Real-time championship data streams and predictions"}
                            {idx === 2 && "AI-powered talent discovery from local communities"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Cyber Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative transition-all duration-300 ${
                        currentIndex === idx 
                          ? 'w-12 h-4 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full neon-glow' 
                          : 'w-4 h-4 dark-glass border border-white/20 rounded-full hover:border-cyan-400'
                      }`}
                    >
                      {currentIndex === idx && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Cyber Navigation Arrows */}
                <button
                  onClick={() => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 dark-glass-intense neon-border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-6 h-6 neon-text-blue group-hover:neon-text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 dark-glass-intense neon-border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-6 h-6 neon-text-blue group-hover:neon-text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Dark Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Neural Analytics",
                description: "Deep learning algorithms analyze team performance patterns",
                icon: "🧠",
                gradient: "from-cyan-500 to-blue-600",
                glow: "cyan"
              },
              {
                title: "Quantum Profiles", 
                description: "Multi-dimensional player data analysis with AI predictions",
                icon: "⚛️",
                gradient: "from-purple-500 to-pink-600",
                glow: "purple"
              },
              {
                title: "Cyber Builder",
                description: "AI-powered team optimization using advanced algorithms",
                icon: "�",
                gradient: "from-pink-500 to-red-500",
                glow: "pink"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity blur-lg`}></div>
                <div className="relative dark-glass-intense rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 reflection-effect">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 neon-glow`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  
                  {/* Floating indicator */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full floating-particles"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Live Updates Section */}
      {divContent && (
        <div className="relative py-20">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
          
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="relative group">
              {/* Subtle glow layers */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-3xl opacity-8 blur-xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-12 blur"></div>
              
              <div className="relative dark-glass-intense rounded-3xl border border-white/20 overflow-hidden">
                {/* Enhanced Header */}
                <div className="relative bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 px-8 py-8 border-b border-white/10">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                  </div>
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-3xl">�</span>
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold text-white mb-2">Live Cricket Updates</h2>
                        <p className="text-gray-300 text-lg">Latest match statistics and cricket news</p>
                      </div>
                    </div>
                    
                    {/* Live indicator */}
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                      <span className="text-green-400 font-bold text-lg">LIVE</span>
                    </div>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </div>
                
                {/* Enhanced Content Area with Vibrant Background */}
                <div className="relative p-8 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
                  {/* Content wrapper with enhanced styling */}
                  <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-600 rounded-full"></div>
                    
                    <div className="pl-8">
                      <div
                        className="max-w-none text-gray-900 leading-relaxed live-content"
                        dangerouslySetInnerHTML={{ __html: divContent }}
                      />
                    </div>
                  </div>
                  
                  {/* Bottom decoration */}
                  <div className="mt-8 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
