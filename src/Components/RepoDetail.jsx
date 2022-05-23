import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

export default function RepoDetail(props) {
    let [commits, setCommits] = useState('')
    let name = useParams()

    const fetchData = async () => {
        let url = `https://api.github.com/repos/${props.name}/${name.name}/commits?per_page=20`;
        let rawData = await fetch(url);
        let data = await rawData.json();
        setCommits(data);
      };

    useEffect(() =>{
        fetchData()
    },[])

    const homelink = {
        color: 'white',
        fontSize: '22px',
    }
    const commitLable = {
        color: "#9a7f7f",
        fontWeight: "bold",
    }
    const listItems = {
        fontSize: '18px'
    }
  return (
    <div className="container my-5">
      <Link to='/' style={homelink}>&lt;&lt; Home Page</Link>
      <div className="row my-5">
              <h1 className="text-center py-5">Commit detail of Repository</h1>
              {commits ? commits.map((commit, index) =>{
                  return(
                    <div className="col-md-12 p-5 position-relative"
                         style={{ border: "1px solid #c0c0c042" }}
                         key={index}>
                       <p style={{ fontSize: "22px"}}><span style={{fontSize: "22px", fontWeight: "bold", color: "red"}}>{index+1}:</span> {commits[index].commit.message}</p>
                       <ul>
                           <li style={listItems}><span style={commitLable}>Name: </span>{commits[index].commit.author.name}</li>
                           <li style={listItems}><span style={commitLable}>Email: </span>{commits[index].commit.author.email}</li>
                           <li style={listItems}><span style={commitLable}>Date: </span>{commits[index].commit.author.date}</li>
                       </ul>
                    </div>
                  )
              }): <h1>NO commits Found</h1>}
      </div>
    </div>
  );
}
