import React, { useState,useMemo } from "react";

const SearchBar = ({ data, searchKey = "title", renderResults }) => {
  const [search, setSearch] = useState("");

  // filter items based on search term
  const filteredData = useMemo(() => {
    return data.filter((item) =>
    item[searchKey]?.toLowerCase().includes(search.toLowerCase())
  )},[data,searchKey,search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, width: "30%", margin: "20px" }}
      />

      {/* Results - handled by parent with renderResults) */}
      {filteredData.length === 0 ? (
        <p>No results found</p>
      ) : (
        renderResults(filteredData)
      )}
    </div>
  );
};

export default React.memo(SearchBar);
