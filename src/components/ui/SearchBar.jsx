import { useState } from "react";

export default function SearchBar({ setSearch }) {
  const [localSearch, setLocalSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    setSearch(value);
  };

  return (
    <>
      <form>
        <input
          type="search"
          placeholder="Search..."
          value={localSearch}
          onChange={handleChange}
          className="px-2 py-1 focus:bg-slate-200 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
      </form>
    </>
  );
}
