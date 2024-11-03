import { useState } from 'react';
import './country.css'

const Country = ({terrain, handleVisitedCountries}) => {

    console.log(terrain)
    const {name, flags, capital, population, independent , continents
    } = terrain;
    
    const [visited , setVisited] = useState(false)

    const handleVisited =() => { setVisited(!visited)
        
    }

    // console.log(handleVisitedCountries)




    
    return (
        <div className='container'>
            <h4><b>Name</b>: {name.common} </h4>
            <div  className="details">
                <p><b>Capital</b>: {capital}</p>
                 <p><b>Population</b>: {population} </p>
                 <p><b>Independence</b>: {independent ? 'Yes' : 'No'}</p>
                 <p><b>Continents</b>
           : {continents
           }</p>
            </div>
            <img className='flags' src={flags.png} alt="" />
            <button onClick={ ()=> {handleVisited(); handleVisitedCountries(terrain);} }className='btn'>{!visited? '❗Visited' : 'Visited✔' }</button>
        </div>
    );
};

export default Country;