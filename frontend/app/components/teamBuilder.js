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
        <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-md p-8 space-y-6">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
                🧠 Smart Team Builder
            </h2>
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    Game Type
                </label>
                <select
                    value={selectedGameType}
                    onChange={e => setSelectedGameType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {gameTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    Country
                </label>
                <select
                    value={selectedCountry}
                    onChange={e => setSelectedCountry(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {countries.map(country => (
                        <option key={country.code} value={country.code}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>
            <button
                onClick={handleMakeTeam}
                className={`w-full text-white font-semibold py-2 px-4 rounded-md transition duration-150 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                disabled={loading}
            >
                {loading ? (
                    <span className="flex items-center justify-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>Building...</span>
                    </span>
                ) : (
                    "Make Team"
                )}
            </button>


            {team && (
  <div className="mt-8 space-y-12">
    {/* Batters Section */}
    <div>
      <h3 className="text-xl font-bold text-blue-700 border-l-4 border-blue-400 pl-4 mb-6">
        Batters
      </h3>
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
               ICC {selectedGameType } Rank
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                Name
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {team.batters.map((player, idx) => (
              <tr key={idx} className="hover:bg-blue-100 transition">
                <td className="px-6 py-4 text-sm text-gray-800">{player.rank}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{player.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Bowlers Section */}
    <div>
      <h3 className="text-xl font-bold text-green-700 border-l-4 border-green-400 pl-4 mb-6">
        Bowlers
      </h3>
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                ICC {selectedGameType } Rank
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                Name
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {team.bowlers.map((player, idx) => (
              <tr key={idx} className="hover:bg-green-100 transition">
                <td className="px-6 py-4 text-sm text-gray-800">{player.rank}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{player.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

        </div>

    );
};

export default TeamBuilder;