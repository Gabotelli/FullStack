import Languages from './Languages'
const Country = ({ country, one }) => {
    if(!one)
        return  <p>{ country.name.official }</p>
    return (
        <div>
            <h2>{ country.name.official }</h2>
                <p>Capital: { country.capital }</p>
                <p>Area: { country.area }</p>
                <h3>Languages:</h3>
                    <Languages lang={ country.languages } />
        </div>
        
    )
}
export default Country
