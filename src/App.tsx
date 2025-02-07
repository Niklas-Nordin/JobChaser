import { useState } from "react";
import "./App.css";
// import { RenderList, Jobs } from "./ListItem";
import JobList from "./JobList";
import SearchBar from "./Search";
import { jobs } from "./JobList";

function App() {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  return (
    <>
      <h1 className="h1">The JobChaser</h1>
      <SearchBar setFilteredJobs={setFilteredJobs} />
      <JobList jobs={filteredJobs} />
    </>
  );
}

export default App;
