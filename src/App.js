import Repo from './Components/Repositories.jsx';
import { BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import RepoDetail from "./Components/RepoDetail.jsx";
import UserName from "./Components/UserName";

function App() {
  let github_name = "holoplot";
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" exact="true" element={<Repo name={github_name} />} /> */}
        <Route path="/" exact="true" element={<UserName />} />
        <Route path="/repos/holoplot/:name" element={<RepoDetail name={github_name} />} /> 
      </Routes>
    </div>
  );
}

export default App;
