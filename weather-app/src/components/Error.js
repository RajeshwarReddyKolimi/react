import React from "react";

export default function Error({ error }) {
  return <p className="error">Error: {error?.message}</p>;
}
