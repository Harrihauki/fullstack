const CountryButton = ({name, setFilter}) => {
    return (
        <div>{name} <button onClick={setFilter} >show</button></div>
    )
}

export default CountryButton