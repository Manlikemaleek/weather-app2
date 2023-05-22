import React from 'react'
type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

function weatherHome({params: {city, lat, long}}: Props) {
  return (
    <div>welcome to WeatherMe {city} {lat} {long}</div>
  )
}

export default weatherHome