const Filter = ({filter, handler}) => {
    //console.log("filteriin: ", value, onChange);
    
    return (
        <div>
            filter shown with <input
            value={filter}
            onChange={handler}/>
        </div>
    )
}

export default Filter