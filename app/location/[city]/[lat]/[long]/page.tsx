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
  const { data } = await client.query({
    query: fetchWeather,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;

  return (
    <div>
      {/* <info /> */}
      <div>
        <div className="pb-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Overview Today</h2>
            <p className="text-sm text-gray-500">
              Updated last at : {""}
              {new Date(results.current_weather.time).toLocaleString()} ({results.timezone})
            </p>
          </div>
          <div>
            {/* <callout /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default weatherHome;
