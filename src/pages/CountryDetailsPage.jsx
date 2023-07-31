import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"


function CountryDetails() {
    <h1>Country Details</h1>

    const [country, setCountry] = useState(null)

	const params = useParams()

	async function fetchOne() {
		try {
			const rawResponse = await fetch(
				`https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
			)
			const data = await rawResponse.json()
			console.log(data)
			setCountry(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchOne()
	}, [params.countryId])

	if (!country) {
		return (
            <h1> Loading</h1>
        )
	}
    console.log(country, 'chek')
	return (
		<div style={{ margin: "auto" }}>
		{/* name, capital, area, and borders.*/}
         <p> {country.name.common}</p>   
         <p> {country.capital[0]}</p>   
         <p> {country.area}</p>   
         <div className="linkBox">

            {country.borders.map(el => {
                return (

                <Link
                    to={`/${el}`}
                    key={el} >
                {el} 
                </Link>

                )
            }
            )}
         </div>

           
		</div>
	)
}

export default CountryDetails;
