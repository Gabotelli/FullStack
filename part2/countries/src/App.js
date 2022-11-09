import axios from 'axios'
import { useState, useEffect} from 'react'
import Filter from './Components/Filter'
import Display from './Components/Display'

const App = () => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  const handleCountry = (event) => setCountry(event.target.value)
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  },[])

  return (
    <div>  
      <Filter value={country} onChange={handleCountry} />
      <Display countries={countries} country={country}/>
    </div>
  )
}

export default App;
