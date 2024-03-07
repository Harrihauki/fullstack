const baseURL = 'https://openweathermap.org/img/wn'
const WeatherIcon = ({id}) => {
    return (
        <div>
            <img src={`${baseURL}/${id}@2x.png`} />
        </div>
    )
}

export default WeatherIcon