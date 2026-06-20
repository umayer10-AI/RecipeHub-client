"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const Searching = ({s, c}) => {
  const [query, setQuery] = useState(s);
  const [category, setCategory] = useState(c);
  const router = useRouter();

  // shared function (IMPORTANT)
  const updateRoute = (newQuery = query, newCategory = category) => {
    const params = new URLSearchParams();

    if (newQuery) params.append("search", newQuery);
    if (newCategory) params.append("category", newCategory);

    router.push(`/browse?${params.toString()}`);
  };

  // search button click
  const handleSearch = () => {
    updateRoute();
  };

  return (
    <div className="bg-[#0B1120] text-white pb-10">
      <div className="max-w-[80%] mx-auto px-4">

        <div className="flex flex-col md:flex-row gap-4 items-center">

          {/* Search Input */}
          <div className="flex w-full md:flex-1 items-center bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">

            <input
              type="text"
              placeholder="Search recipes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent px-4 py-2 outline-none text-white"
            />

            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-cyan-500 to-blue-700 px-4 py-2 hover:opacity-90 transition flex items-center gap-2"
            >
              <Search size={18} />
              Search
            </button>

          </div>

          {/* Category Select (AUTO ROUTE) */}
          <select
            value={category}
            onChange={(e) => {
              const value = e.target.value;
              setCategory(value);
              updateRoute(query, value);
            }}
            className="w-full md:w-60 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl text-white outline-none"
          >
            <option value="">All Categories</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
          </select>

        </div>
      </div>
    </div>
  );
};

export default Searching;