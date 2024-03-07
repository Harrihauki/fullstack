const Person = ({name, number, deleteFunction}) => {
    
    console.log("person (yks.) päästään");
    
    return (
        <li>
            {name} {number} <button onClick={deleteFunction}>Delete</button>
        </li>
    )
}

export default Person