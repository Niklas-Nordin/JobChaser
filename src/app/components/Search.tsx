"use client";
// import { useState } from "react";
// import { Jobs } from "../components/ListItem";
import "../css/Search.css";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchTerm } from "../redux/slices/filterSelectionSlice";
import type { RootState } from "../redux/store";

function SearchBar() {
  //   {
  //   setFilteredJobs,
  //   jobList,
  // }: {
  //   setFilteredJobs: (jobList: Jobs[]) => void;
  //   jobList: Jobs[];
  // }
  // const [searchTerm, setSearchTerm] = useState<string>("");

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   console.log(`Du sökte på ${searchTerm}`);

  //   const filteredList = jobList.filter((job: Jobs) =>
  //     job.company.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   console.log(filteredList);

  //   setFilteredJobs(filteredList);
  // };

  const dispatch = useDispatch();
  const searchTerm = useSelector(
    (state: RootState) => state.filterSelection.searchTerm
  );

  return (
    <>
      <form className="searchbar">
        <input
          className="search"
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(event) => dispatch(updateSearchTerm(event.target.value))}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
