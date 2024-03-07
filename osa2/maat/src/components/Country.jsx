import Weather from './Weather'

const Country = (props) => {
    console.log("päästiin maahan ", props);

    return (
        <div>
            <h1>
                {props.name}
            </h1>
            <div>capital {props.capital}</div>
            <div>area {props.area}</div>
            <br/>
            <div>
                <b>
                    languages
                </b>
                <ul>
                {Object.values(props.languages)
                    .map(language => <li key={language}>{language}</li>
                )}
                </ul>
            </div>
            <div>
                <img
                    src={props.flag}
                />
            </div>
            <div>
                <Weather capital={props.capital} latitude={props.latitude} longitude={props.longitude} />
            </div>
        </div>
    )
}

export default Country