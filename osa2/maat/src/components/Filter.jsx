const Filter = ({filter, handler}) => {
    //console.log("filteriin: ", value, onChange);
    
    return (
        <div>
            find countries <input
            value={filter}
            onChange={handler}/>
        </div>
    )
}

export default Filter