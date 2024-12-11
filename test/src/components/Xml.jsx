import React, { useState } from "react";

export default function Xml() {
  const [data, setData] = useState(null);

  function handleClick() {
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    console.log(xhr.open);
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    console.log(xhr.onload);
    xhr.send();
    console.log(xhr);
  }

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
    </div>
  );
}
