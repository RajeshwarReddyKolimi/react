import React from "react";
import { Link } from "react-router";

export default function Contact() {
  return (
    <section>
      <p>
        Contact me:{" "}
        <Link className="simple-link" to="mailto:info@nothing.com">
          info@nothing.com
        </Link>
      </p>
    </section>
  );
}
