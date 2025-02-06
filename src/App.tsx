import "./App.css";
// import { RenderList, Jobs } from "./ListItem";
import JobList from "./JobList";
import SearchBar from "./Search";

function App() {
  return (
    <>
      <h1 className="h1">The JobChaser</h1>
      <SearchBar />
      <JobList />
    </>
  );
}

export default App;
