import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
const queryClient = new QueryClient();
export default function WeatherApp() {
  const [location, setLocation] = useState("London");

  function handleChangeLocation(formData) {
    setLocation(formData.get("location"));
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Form handleChangeLocation={handleChangeLocation} />
      <h1>{location}</h1>
      <Weather location={location} />
    </QueryClientProvider>
  );
}
