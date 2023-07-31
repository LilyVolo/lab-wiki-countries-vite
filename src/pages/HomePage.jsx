import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function HomePage() {
    

const [countriesNames, setCountriesNames] = useState([])



async function fetchCountries() {
    try {
        const rawresponse = await fetch('https://ih-countries-api.herokuapp.com/countries')
        const data = await rawresponse.json()
        setCountriesNames(data)

    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    fetchCountries()
}, [])



    return (
    <div className="listOfCountries">
        
        <h1>Hey</h1>


        {countriesNames.map((el) => {
						return (
                            <Link
                            to={`/${el.alpha3Code}`}
                            key={el.alpha3Code}
							>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`} alt="" />
                            {el.name.common} 

                            </Link>
						)
					}
                    )}
        </div>
    
    )

}

export default HomePage;
