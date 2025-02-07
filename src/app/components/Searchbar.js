'use client'

import { useState } from "react";
import axios from "axios";

const Searchbar = () => {
  const [query, setQuery] = useState(''); // Initial state set and update to follow triggering a re-render
  const [health, setHealth] = useState(''); // Initial state for health parameter
  const [searchResults, setSearchResults] = useState([]); // Results returned in an array

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    try {
      const data = { ingredient: query };
      if (health) {
        data.health = health.split(','); // Split by comma to handle multiple health labels
      }
      const response = await axios.post('/search', data); // use Local host address to test
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="max-w-md mx-auto space-y-2 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 search-form" onSubmit={handleSearch}>
      <div className="relative flex items-center">
        <label htmlFor="default-search" className="sr-only">Search</label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for recipes here"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state
        />
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          id="health"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Optional health labels (comma-separated)"
          value={health}
          onChange={(e) => setHealth(e.target.value)} // Update health state
        />
      </div>
      <div className="flex justify-center">
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>
  );
};

export default Searchbar;
