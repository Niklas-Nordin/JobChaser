"use client";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { RenderList, Jobs } from "./ListItem";
import "../css/ListItem.css";

import {
  updateCompany,
  updateRole,
  updateContract,
  updateLanguages,
  updateLocation,
  updateSearchTerm,
} from "../redux/slices/filterSelectionSlice";

function FilterSelector({ jobList }: { jobList: Jobs[] }) {
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.filterSelection);

  const companies = [...new Set(jobList.map((job) => job.company))];
  const roles = [...new Set(jobList.map((job) => job.role))];
  console.log(companies);
  console.log(roles);

  const filterJobs = jobList.filter((jobs) => {
    return (
      (filterState.company ? jobs.company === filterState.company : true) &&
      (filterState.role ? jobs.role === filterState.role : true) &&
      (filterState.searchTerm
        ? jobs.company
            .toLowerCase()
            .includes(filterState.searchTerm.toLowerCase()) ||
          jobs.role.toLowerCase().includes(filterState.searchTerm.toLowerCase())
        : true)
    );
  });

  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <div>
          <label htmlFor="company">Companies</label>
          <select
            id="company"
            value={filterState.company}
            onChange={(e) => dispatch(updateCompany(e.target.value))}
            className="w-full"
          >
            <option value="">All</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="role">Roles</label>
          <select
            id="role"
            value={filterState.role}
            onChange={(e) => dispatch(updateRole(e.target.value))}
            className="w-full"
          >
            <option value="">All</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className="ul">
        {filterJobs.length > 0 ? (
          filterJobs.map((jobs) => <RenderList key={jobs.id} {...jobs} />)
        ) : (
          <p className="no-jobs">No jobs to be seen...</p>
        )}
      </ul>
    </div>
  );
}

export default FilterSelector;
