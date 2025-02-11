import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Jobs } from "./ListItem";
import JobList from "./JobList";
import SearchBar from "./Search";

function App() {
  const [jobList, setJobList] = useState<Jobs[]>([]);

  const [filteredJobs, setFilteredJobs] = useState<Jobs[]>(jobList);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch("../jobs.json");

        if (!response.ok) {
          throw new Error(`Couldn't get data... Status: ${response.status}`);
        }

        const data = await response.json();
        setJobList(data);
        setFilteredJobs(data);
      } catch (error) {
        console.error("Couldn't get the data...", error);
      }
    };

    getJobs();
  }, []);

  return (
    <>
      <h1 className="h1">The JobChaser</h1>
      <SearchBar setFilteredJobs={setFilteredJobs} jobList={jobList} />
      <JobList jobList={filteredJobs} />
    </>
  );
}

export default App;
