import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "./Loader";
import Error from "./Error";
import { TiWeatherPartlySunny } from "react-icons/ti";

export default function Weather({ location }) {
  const { isPending, error, data } = useQuery({
    queryKey: ["weatherData", location],
    queryFn: () =>
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=20f87299df2cf2929a2d76cf2cb60c5d`
      ).then((res) => res.json()),
    enabled: !!location,
  });
  function toCelsius(k) {
    return Math.round((k - 277) * 100) / 100;
  }
  if (isPending) return <Loader />;
  if (error) return <Error error={error} />;
  if ((data?.cod / 100) % 10 !== 2) return <Error error={data} />;
  return (
    <h1>
      <TiWeatherPartlySunny /> {toCelsius(data?.main?.temp)} &deg;C{" "}
    </h1>
  );
}
