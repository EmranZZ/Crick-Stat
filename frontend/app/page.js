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
<div className="bg-gray-50 min-h-screen p-4">
  {/* Carousel Container */}
  <div className="bg-gray-50 min-h-screen p-0 flex justify-center items-center">
  {/* Smaller Carousel Container */}
  <div
    className="overflow-hidden relative rounded-lg shadow-md border border-gray-300 bg-white"
    style={{ width: '600px', height: '450px' }} // smaller size
  >
    <div
      className="flex transition-transform duration-700 ease-in-out h-full"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className="min-w-full h-full flex items-center justify-center bg-black"
        >
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>

    {/* Dots */}
    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {images.map((_, idx) => (
        <span
          key={idx}
          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
            currentIndex === idx ? 'bg-blue-600 scale-110' : 'bg-gray-400'
          }`}
        ></span>
      ))}
    </div>
  </div>
</div>


  {/* Text / HTML Section */}
  <div className="max-w-4xl mx-auto mt-2 p-0 bg-white shadow-md rounded-lg border border-gray-200">
    <div
      className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-800"
      dangerouslySetInnerHTML={{ __html: divContent }}
    />
  </div>
</div>

  );
}
