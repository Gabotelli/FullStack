import Languages from './Languages'
import Currencies from './Currencies'
import Weather from './Weather'
import { useState } from 'react'

const Country = ({country, show}) => {
    const [showDetails, setShowDetails] = useState(show)
    const lang=country.languages
    const handleShow = (event) => {
        event.preventDefault()
        console.log('hola')
        setShowDetails(!show)
    }

    if(!showDetails)
        return (
            <form onSubmit={handleShow}>
                {country.name.official}<button type="submit">show</button>
            </form>
        )
    return (
    <div>
        <h2>{ country.name.official }</h2>
            <p>Capital: { country.capital }</p>
            <p>Area: { country.area }</p>
            <Currencies currencies={ country.currencies } />
            <h3>Languages:</h3>
                <Languages lang={ lang } />
            <img src={country.flags.png} alt={country.name.common} width='20%' height='20%'/>
            <Weather country={country} />
    </div>)
}

export default Country