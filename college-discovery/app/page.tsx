
"use client";
import { colleges } from "../data/colleges";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  
  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        College Discovery Platform
      </h1>

      <input
        type="text"
        placeholder="Search College..."
        className="w-full p-3 border rounded-lg mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-6">
        {filteredColleges.map((college) => (
          <div
            key={college.id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold">{college.name}</h2>
            <p>Location: {college.location}</p>
            <p>Fees: {college.fees}</p>
            <p>Rating: ⭐ {college.rating}</p>
            <a
href="/college"
  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
>
  View Details
</a>
          </div>
        ))}
      </div>
    </div>
  );
}