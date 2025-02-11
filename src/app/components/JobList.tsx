import "../css/JobList.css";
import { RenderList, Jobs } from "../components/ListItem";

function JobList({ jobList }: { jobList: Jobs[] }) {
  return (
    <main className="main">
      <ul className="ul">
        {jobList.length > 0 ? (
          jobList.map((job) => <RenderList key={job.id} {...job} />)
        ) : (
          <li className="li-no-jobs">
            <p className="no-jobs">No jobs to be seen...</p>
          </li>
        )}
      </ul>
    </main>
  );
}

export default JobList;
