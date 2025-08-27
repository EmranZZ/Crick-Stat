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
        <div className="min-h-screen bg-gray-50 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">Cricket Teams</h1>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teams.map((team) => (
                    <Link
                        key={team.label}
                        href={{
                            pathname: `/teams/${team.label.toLowerCase().replace(/\s+/g, '-')}`,
                            query: { path: team.url.replace('https://www.cricbuzz.com/cricket-team/', '')  },
                        }}
                        className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center"
                    >
                        <img
                            src={team.flag}
                            alt={`${team.label} flag`}
                            className="w-24 h-16 object-cover rounded mb-4 border"
                        />
                        <span className="text-lg font-semibold">{team.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}