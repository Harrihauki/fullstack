import Country from "./Country"
import CountryButton from "./CountryButton"

const Countries = ({countries, setFilter}) =>{

    if (countries instanceof Array) {
        if (countries.length > 10) {
            return (
                <div>
                    too many to show
                </div>
            )
        } else if (countries.length === 1) {
            const country = countries[0]
            
            return (
                <Country name={country.name}
                    capital={country.capital}
                    area={country.area}
                    flag={country.flag}
                    languages={country.languages}
                    latitude={country.capitalLatLong[0]}
                    longitude={country.capitalLatLong[1]} />
            )
        }
        
        return (
            <div>
                {countries.map(
                    country => <CountryButton name={country.name} setFilter={() => setFilter(country.name)}/>
                )}
            </div>
        )
    } else {
        return (
            <Country name={countries.name}
                capital={countries.capital}
                area={countries.area}
                flag={countries.flags}
                languages={countries.languages}
                latitude={country.capitalLatLong[0]}
                longitude={country.capitalLatLong[1]}/>
        )
    }
}

export default Countries