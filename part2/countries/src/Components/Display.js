import Country from './Country'
const Display = ({ countries, country }) => {
    const FilteredCountries = 
        countries
            .filter(c => c.name.official.toLowerCase().indexOf(country.toLowerCase()) >= 0)
    if(FilteredCountries.length===1)
        return (<Country key={1} country={FilteredCountries[0]} one={true} />)
    if(FilteredCountries.length>10)
        return <p>Too many countries, be more specific</p>
    return (
        countries
            .filter(c => c.name.official.toLowerCase().indexOf(country.toLowerCase()) >= 0)
            .map((c, i) => <Country key={i} country={c} one={false}/>)
    )
}

export default Display