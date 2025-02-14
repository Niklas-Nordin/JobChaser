"use client";
import { useState } from "react";
import { Jobs } from "../components/ListItem";
import "../css/Search.css";

function SearchBar({
  setFilteredJobs,
  jobList,
}: {
  setFilteredJobs: (jobList: Jobs[]) => void;
  jobList: Jobs[];
}) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Du sökte på ${searchTerm}`);

    const filteredList = jobList.filter((job: Jobs) =>
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredList);

    setFilteredJobs(filteredList);
  };

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
