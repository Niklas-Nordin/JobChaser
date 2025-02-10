import { RenderList, Jobs } from "./ListItem";

function JobList({ jobList }: { jobList: Jobs[] }) {
  return (
    <main className="main">
      <ul className="ul">
        {jobList.length > 0 ? (
          jobList.map((job) => <RenderList key={job.id} {...job} />)
        ) : (
          <p>No jobs to be seen...</p>
        )}
      </ul>
    </main>
  );
}

export default JobList;
