import Countries from './Countries'
import Country from './Country'

const Display = ({ countries, country }) => {
    const filteredCountries = 
        countries
            .filter(c => c.name.official.toLowerCase().indexOf(country.toLowerCase()) >= 0)
    if(filteredCountries.length===1)
        return (<Country key={filteredCountries[0].name.common} country={filteredCountries[0]} show={true} />)
    if(filteredCountries.length>10)
        return <p>Too many countries, be more specific</p>
    return (
        <Countries countries={filteredCountries} />)
}

export default Display