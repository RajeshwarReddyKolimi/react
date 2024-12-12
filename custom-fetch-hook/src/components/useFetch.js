import React, { useState } from "react";

export default function useFetch() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setError();
      } else {
        if (response.status === 404) setError("Resource not found");
        else if (response.statusText) setError(response.statusText);
        else setError("Unknown error occured");
        setData();
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  return { fetchData, data, error, isLoading };
}
