"use client";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { RenderList, Jobs } from "./ListItem";
import "../css/ListItem.css";
import "../css/filterSelector.css";

import {
  updateCompany,
  updateRole,
  updateContract,
  updateLanguages,
  updateLocation,
} from "../redux/slices/filterSelectionSlice";

function FilterSelector({ jobList }: { jobList: Jobs[] }) {
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.filterSelection);

  const companies = [...new Set(jobList.map((job) => job.company))];
  const roles = [...new Set(jobList.map((job) => job.role))];
  const contracts = [...new Set(jobList.map((job) => job.contract))];
  const locations = [...new Set(jobList.map((job) => job.location))];

  const filterJobs = jobList.filter((jobs) => {
    return (
      (filterState.company ? jobs.company === filterState.company : true) &&
      (filterState.role ? jobs.role === filterState.role : true) &&
      (filterState.contract ? jobs.contract === filterState.contract : true) &&
      (filterState.location ? jobs.location === filterState.location : true) &&
      (filterState.searchTerm
        ? jobs.company
            .toLowerCase()
            .includes(filterState.searchTerm.toLowerCase()) ||
          jobs.role
            .toLowerCase()
            .includes(filterState.searchTerm.toLowerCase()) ||
          jobs.contract
            .toLowerCase()
            .includes(filterState.searchTerm.toLowerCase()) ||
          jobs.location
            .toLowerCase()
            .includes(filterState.searchTerm.toLowerCase())
        : true)
    );
  });

  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <div className="dropdown-menu">
          <label htmlFor="company">Companies</label>
          <select
            id="company"
            value={filterState.company}
            onChange={(e) => dispatch(updateCompany(e.target.value))}
            className="input-field w-full"
          >
            <option className="option" value="">
              All
            </option>
            {companies.map((company, index) => (
              <option className="option" key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown-menu">
          <label htmlFor="role">Roles</label>
          <select
            id="role"
            value={filterState.role}
            onChange={(e) => dispatch(updateRole(e.target.value))}
            className="input-field w-full"
          >
            <option className="option" value="">
              All
            </option>
            {roles.map((role, index) => (
              <option className="option" key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown-menu">
          <label htmlFor="contract">Contract</label>
          <select
            id="contract"
            value={filterState.contract}
            onChange={(e) => dispatch(updateContract(e.target.value))}
            className="input-field w-full"
          >
            <option className="option" value="">
              All
            </option>
            {contracts.map((contract, index) => (
              <option className="option" key={index} value={contract}>
                {contract}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown-menu">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            value={filterState.location}
            onChange={(e) => dispatch(updateLocation(e.target.value))}
            className="input-field w-full"
          >
            <option className="option" value="">
              All
            </option>
            {locations.map((location, index) => (
              <option className="option" key={index} value={location}>
                {location}
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
