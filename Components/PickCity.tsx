'use client';
import { Country, State } from "country-state-city"
import Select from "react-select";
import {useState} from 'react'
import { type } from "os";

type option = {
  value:{
    longitude: string;
  latitude: string;
  isoCode: string;
  };
  label: string;
} |null;

type cityOption = {
  value:{
    longitude: string;
  latitude: string;
  name: string;
  countryCode: string;
  stateCode: string;
  };
  label: string;
} |null;

const options = Country.getAllCountries().map(country =>({
  value:{
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}))

function pickCity() {

  const [selectedCountry, setSelectedCountry] = useState<option>(null)
  const [selectedCity, setSelectedCity] = useState<cityOption>(null)
  return (
    <div>
      <Select 
      options={options}
      />
    </div>
  )
}

export default pickCity