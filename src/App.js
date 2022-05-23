import Repo from './Components/Repositories.jsx';
import { BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import RepoDetail from "./Components/RepoDetail.jsx";
import UserName from "./Components/UserName";
import {useState} from 'react';

function App() {

  let [userName, setUserName] = useState('github')

  let setGitUserName = (name) => {
    console.log("UserName from APP.JS:", name)
    setUserName(name)
  }

  return (
    <div className="App">
      <UserName setGitUserName={setGitUserName} />
      <Routes>
        <Route path="/" exact="true" element={<Repo name={userName} key={userName} />} />
        <Route path="/repos/:name/:name" element={<RepoDetail name={userName} key={userName} />} /> 
      </Routes>
    </div>
  );
}

export default App;
