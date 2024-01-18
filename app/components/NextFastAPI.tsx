"use client";

import React, { useState, useEffect } from "react";

const NextFastAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {/* <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul> */}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from the API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // Pass the data to the page via props
  return { props: { users } };
}

export default NextFastAPI;
