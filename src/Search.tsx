import { useState } from "react";
import "./Search.css";
import { jobs } from "./JobList.tsx";
import { Jobs } from "./ListItem";

function SearchBar({
  setFilteredJobs,
}: {
  setFilteredJobs: (jobs: Jobs[]) => void;
}) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const HandleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Du sökte på ${searchTerm}`);

    const filteredList = jobs.filter((job) =>
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredList);

    setFilteredJobs(filteredList);
  };

  return (
    <>
      <form className="form" onSubmit={HandleSubmit}>
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

      {/* <ul>
        {filteredJobs.map((job) => (
          <RenderList key={job.id} {...job} />
        ))}
      </ul> */}
    </>
  );
}

export default SearchBar;
