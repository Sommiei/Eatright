import { useEffect, useState } from "react";
import axios from "axios";

export const AxiosPageApi = () => {
  const [gitHubUsers, setGitHubUsers] = useState([]);
  const [gitError, setGitError] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const [eDeyLoad, setEDeyLoad] = useState(false);

  useEffect(() => {
    seachGitHubUsers();
  }, [nameQuery]);


  const getGitHubUsers = () => {
    setEDeyLoad(true);
    setGitError("");
    axios
      .then((response) => {
        console.log(response.status);
        console.log("here data", response.data);
        setGitHubUsers(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log({ error });
        console.log(error.response.status);
        console.log(error.response.data);
        setGitError(error.response.data.message);
      })
      .finally(function () {
        setEDeyLoad(false);
      });
  };
  const seachGitHubUsers = () => {
    setEDeyLoad(true);
    setGitError("");
    axios
      .then((response) => {
        console.log(response.status);
        console.log("here data", response.data);
        setGitHubUsers(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log({ error });
        console.log(error.response.status);
        console.log(error.response.data);
        setGitError(error.response.data.message);
      })
      .finally(function () {
        setEDeyLoad(false);
      });
  };

  return (
    <>
      <div>Axios Page: Working with apis (GET Request)</div>
      <button onClick={getGitHubUsers} className="btn bg-red-800">
        Get Users 
      </button>
      <button onClick={seachGitHubUsers} className="btn bg-red-800">
        Search Users
      </button>
      <p> {nameQuery} </p>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setNameQuery(e.target.value);
        }}
        className="input input-bordered w-full max-w-xs"
      />
      <div>
      {eDeyLoad && (
          <div className="text-red-800 font-bold text-5xl">Loading...</div>
        )}
        {gitError && (
          <div className="text-red-800 font-bold text-5xl">{gitError}</div>
        )}
        {gitHubUsers.map((user) => (
          <div
            className="flex items-center  space-x-4 bg-orange-600 m-4 p-2 text-white capitalize font-bold"
            key={user.id}
          >
            <div>{user.name}</div>
            <div>{user.description}</div>
          </div>
        ))}

        {/* { gitHubUsers ? (
          <div className="text-red-800 font-bold text-5xl">Loading...</div>
        ) : gitError.length > 0 ? (
          <div className="text-red-800 font-bold text-5xl">{gitError}</div>
        ) : (
          gitHubUsers.map((user) => (
            <div
              className="flex items-center  space-x-4 bg-orange-600 m-4 p-2 text-white capitalize font-bold"
              key={user.id}
            >
              <img className="w-10 h-10 rounded-full" src={user.avatar_url} />
              <div>{user.login}</div>
            </div>
          ))
        )} */}
      </div>
    </>
  );
};
