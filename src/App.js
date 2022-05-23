import Repo from './Components/Repositories.jsx';
import { BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import RepoDetail from "./Components/RepoDetail.jsx";

function App() {
  let github_name = "holoplot";
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact="true" element={<Repo name={github_name} />} />
        <Route path="/repos/holoplot/:name" element={<RepoDetail name={github_name} />} /> 
      </Routes>
    </div>
  );
}

export default App;
