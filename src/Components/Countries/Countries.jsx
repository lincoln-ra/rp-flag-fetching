import { useState } from "react";

import { useEffect } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    
    const [countries, setCountries] = useState([])

    const [visitedCountry , setVisitedCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country => {
        // console.log('lets handle the visted countries')
        // console.log(country)

        const newVisitedCountries = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountries);
        
      
    }

    return (
        <div>

      
            <h2>Total Country: {countries.length} </h2>
            <h3>Visited Countries</h3>
            <h5>Total Visited: {visitedCountry.length}</h5>
            <div>
                {
                    visitedCountry.map(country => <h5 key={country.cca3}>
                        {country.name.common}</h5> )
                }
            </div>
            <div className="cardContainer">
            {
                countries.map(country=> <Country  
                    key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    terrain={country}></Country>)
                // creating a <country/> component each item in countries.
            }
            </div>
           
        </div>
    );
};

export default Countries;