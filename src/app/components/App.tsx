"use client";
import { useEffect } from "react";
import { useState } from "react";
import "../css/App.css";
import { Jobs } from "../components/ListItem";
// import JobList from "../components/JobList";
import SearchBar from "../components/Search";
import FilterSelector from "./FilterSelector";

function App() {
  const [jobList, setJobList] = useState<Jobs[]>([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch("./jobs.json");

        if (!response.ok) {
          throw new Error(`Couldn't get data... Status: ${response.status}`);
        }

        const data = await response.json();
        setJobList(data);
      } catch (error) {
        console.error("Couldn't get the data...", error);
      }
    };

    getJobs();
  }, []);

  return (
    <>
      <SearchBar />
      <FilterSelector jobList={jobList} />
    </>
  );
}

export default App;
