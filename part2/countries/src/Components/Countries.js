import Country from "./Country"

const Countries = ({ countries }) => {
        return  (
            <ul>
                {countries.map((country, i) => <Country key={i} country={country} show={false}/>)}
            </ul>
        )
}
export default Countries
