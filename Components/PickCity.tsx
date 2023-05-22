'use client';
import { Country, State } from "country-state-city"
import Select from "react-select";
import {useState} from 'react'
import { type } from "os";
import { useRouter } from "next/navigation";
import {GlobeIcon} from '@heroicons/react/solid'

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

  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();


  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  }

  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option)
  }


  return (
    <div className="space-y-4">
      <div className="space-y-2">
      <div className="flex items-center space-x-2 text-white/80">
        <GlobeIcon className="h-5 w-5 text-white"/>
        <label htmlFor="country">Country</label>
      </div>

      <Select 
      className="text-black"
      value={selectedCountry}
      onChange={handleSelectedCountry}
      options={options}
      />
      </div>

      {selectedCountry && (
          
       <div className="space-y-2">
      <div className="flex items-center space-x-2 text-white/80">
        <GlobeIcon className="h-5 w-5 text-white"/>
        <label htmlFor="country">City</label>
      </div>

      <Select 
      className="text-black"
      value={selectedCity}
      onChange={handleSelectedCity}
      options={options}
      />
      </div>
      )}

    </div>
  )
}

export default pickCity