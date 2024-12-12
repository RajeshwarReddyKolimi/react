import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Loader from "./Loader";
import Error from "./Error";

export default function FetchData() {
  const { fetchData, data: user, error, isLoading } = useFetch();
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    if (currentUser)
      fetchData(`https://jsonplaceholder.typicode.com/users/${currentUser}`);
  }, [currentUser]);
  return (
    <main>
      <h1>User data</h1>
      <label htmlFor="id">User Id (between 1 and 10): </label>
      <input
        onChange={(e) => setCurrentUser(e.target.value)}
        type="number"
        placeholder="Enter user id"
        id="id"
        min={1}
        max={10}
      />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        user && (
          <div className="user-item">
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            <p>{user?.address?.city}</p>
          </div>
        )
      )}
    </main>
  );
}
