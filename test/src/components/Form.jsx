// import React from "react";
// import { useFormStatus } from "react-dom";
// import { useActionState } from "react";
// export default function Form() {
//   // const { pending } = useFormStatus();
//   function handleSubmit(e) {
//     "use server";
//     e.preventDefault();
//     console.log(e);
//     console.log("kdjs");
//   }
//   // const [message, signupAction] = useActionState(handleSubmit, null);
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="uname" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// import React from "react";
// import { useFormStatus } from "react-dom";
// import { useActionState } from "react";
// import { useEffect } from "react";
// export default function Form() {
//   const { pending } = useFormStatus();
//   async function handleSubmit(formData) {
//     "use server";
//     await new Promise((res) => setTimeout(res, 1000));
//     console.log(pending);
//     console.log(formData.get("uname"));
//     // console.log("kdjs");
//   }
//   // const [message, signupAction] = useActionState(handleSubmit, null);
//   return (
//     <form action={handleSubmit}>
//       <input type="text" name="uname" />
//       <button type="submit">Submit</button>
//       <p>{pending ? "..." : "."}</p>
//     </form>
//   );
// }

import { ErrorBoundary } from "react-error-boundary";

export default function Form() {
  function submitForm() {
    throw new Error();
  }
  return (
    <ErrorBoundary fallback={<p>There was an error</p>}>
      s
      <form action={submitForm}>
        {/* <Submit /> */}
        <button>Submit</button>
      </form>
    </ErrorBoundary>
  );
}
