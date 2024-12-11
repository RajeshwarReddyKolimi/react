import React from "react";

export default function Form({ handleChangeLocation }) {
  return (
    <form action={handleChangeLocation}>
      <input type="text" name="location" id="location" />
      <button type="submit">Get</button>{" "}
    </form>
  );
}
