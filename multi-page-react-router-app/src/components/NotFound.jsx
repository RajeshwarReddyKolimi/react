import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section>
      <p>You are lost!</p>
      <p>
        Go back to{" "}
        <Link className="simple-link" to="/">
          Home
        </Link>
      </p>
    </section>
  );
}
