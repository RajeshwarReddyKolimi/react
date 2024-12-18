import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
import Error from "./Error";
const queryClient = new QueryClient();
export default function WeatherApp() {
  const [location, setLocation] = useState("London");
  const [inputError, setInputError] = useState(null);
  function handleChangeLocation(formData) {
    const locationInput = formData.get("location");
    if (locationInput?.trim()) {
      setLocation(formData.get("location"));
      setInputError(null);
    } else setInputError("Please enter a valid location");
  }
  console.log(location);
  return (
    <QueryClientProvider client={queryClient}>
      <Form handleChangeLocation={handleChangeLocation} />
      {!inputError ? (
        <>
          <h1>{location}</h1>
          <Weather location={location} />
        </>
      ) : (
        <Error error={inputError} />
      )}
    </QueryClientProvider>
  );
}
