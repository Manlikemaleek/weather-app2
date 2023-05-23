import React from "react";
import { getClient } from "@/apollo-client";
import fetchWeather from "@/graphql/queries/fetchWeather";


type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function weatherHome({ params: { city, lat, long } }: Props) {
  const client = getClient();
  const {data} = await client.query({
    query: fetchWeather,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT"

    }
  })
  return (
    <div>
      welcome to WeatherMe {city} {lat} {long}
    </div>
  );
}

export default weatherHome;
