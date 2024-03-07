import Person from './Person'

const Persons = ({persons, filter, deleteFunction}) => {

    console.log("personsiin päästään");

    const personsToShow = persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()) === true)

    console.log({persons});

    return (
        <ul>
            {personsToShow.map(
                person => <Person key={person.id} name={person.name} number={person.number} deleteFunction={() => deleteFunction(person)} />
            )}
        </ul>
    )
}

export default Persons