import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Repositories(props) {
  let [repo, setRepo] = useState([]);

  const fetchData = async () => {
    let url = `https://api.github.com/users/${props.name}/repos`;
    let rawData = await fetch(url);
    let data = await rawData.json();
    setRepo(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const repoBadge = {
    position: "absolute",
    top: "20px",
    left: "50px",
    fontSize: "14px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const lable = {
    color: "#9a7f7f",
    fontWeight: "bold",
  };
  const listItems = {
    fontSize: "18px",
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <h1 className="py-5 text-center">
            Found Repositories: {repo.length}
          </h1>
          {repo ? (
            repo.map((data, index) => {
              return (
                <div
                  className="col-md-12 p-5 position-relative"
                  style={{ border: "1px solid #c0c0c042" }}
                  key={index}
                >
                  <Link
                    to={`repos/${props.name}/${repo[index].name}`}
                    style={linkStyle}
                  >
                    <h4
                      style={{
                        color: "#ff008d",
                        paddingTop: "10px",
                        fontSize: "30px",
                      }}
                    >
                      {repo[index].name}{" "}
                      <span
                        className="badge rounded-pill bg-success"
                        style={repoBadge}
                      >
                        {repo[index].visibility}
                      </span>
                    </h4>
                    <p>{repo[index].description}</p>
                    <ul>
                      <li style={listItems}>
                        <span style={lable}>Language:</span> <b>{repo[index].language}</b>
                      </li>
                      <li style={listItems}>
                      <span style={lable}>Created:</span> <b>{repo[index].created_at}</b>
                      </li>
                    </ul>
                  </Link>
                </div>
              );
            })
          ) : (
            <h4 className="pl-5">NO Repository Found</h4>
          )}
        </div>
      </div>
    </div>
  );
}
