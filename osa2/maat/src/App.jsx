import { useState, useEffect } from 'react'
import Countries from "./components/Countries"
import countryService from "./services/countries"
import Filter from './components/Filter'

function App() {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    console.log("filter change: ", event.target.value);
    setFilter(event.target.value)
  }

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        console.log("use effect countries promise täynnä");
        
        setCountries(
          initialCountries.map(country => ({
              name: country.name.common,
              capital: country.capital,
              area: country.area,
              flag: country.flags.png,
              languages: country.languages,
              capitalLatLong: country.capitalInfo.latlng
            })
          )
        )
      })

      //console.log("maita yhteensä ", countries.length);
      //console.log("indeksissä 37 pitäisi olla cayman saaret: ", countries[37]);
  }, [])

  if (!countries) {
    return null
  }

  const countriesToShow = () => {
    const countryOject = countries[37]
    console.log({countryOject});

    return (
      countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    )
  }

  return (
    <div>
      <Filter filter={filter} handler={handleFilterChange} />
      <Countries countries={countriesToShow()} setFilter={setFilter} />
    </div>
  )
}

export default App
