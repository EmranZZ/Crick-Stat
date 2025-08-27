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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {country}
      </h1>

      {loading ? (
        <p>Loading players...</p>
      ) : (
        <div className="space-y-8">
          {playerData.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-4">{section.role}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {section.players.map((player, i) => (
                  <Link
                    key={i}
                    href={`https://www.cricbuzz.com${player.url}`}
                    target="_blank"
                    className="flex gap-4 items-center border p-3 rounded hover:shadow"
                  >
                    <img
                      src={player.img}
                      alt={player.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <span className="text-lg font-medium">{player.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
