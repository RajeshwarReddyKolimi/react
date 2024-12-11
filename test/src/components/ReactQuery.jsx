import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading";
  if (error) return "An error";
  console.log(JSON.stringify(data));
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.id}</p>
      <strong>👀 {data.userId}</strong> <strong>✨ {data.completed}</strong>{" "}
    </div>
  );
}
