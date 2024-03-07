import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons.jsx'
import Filter from './components/Filter.jsx'
import NewPersonForm from './components/NewPersonForm.jsx'
import personService from './services/persons.js'
import Notification  from './components/Notification.jsx'

const App = () => {
  const [persons, setPersons] = useState([])
    /*{ name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }*/
  

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [isNotificationError, setNotificationError] = useState(false)

  useEffect(() => {
    console.log("use effect käynnistyy");
    personService
      .getAll()
      .then(initialNumbers => {
          console.log("promise täynnä, lisätään henkilöt responsesta", {initialNumbers});
          setPersons(initialNumbers)
        })
  }, [])



  const handleNameChange = (event) => {
    console.log("nimi ", event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log("numero ", event.target.value);
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log("filter change: ", event.target.value);
    setFilter(event.target.value)
  }

  const addNameIfNotInBook = (event) => {
    event.preventDefault()
    
    console.log("päästiin add if not in bookiin");
    
    //onsole.log("person object: ", personObject.name);

    //console.log(persons.map(person => person.name));

    if (persons.map(person => person.name).includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook. Do you wish to replace the old number?`)) {
        update(event)
      } else {
        updateNotification("Adding number canceled.", true)
        emptyNewPersonFields()
      }
    } else {
      console.log("ei pitäisi olla listalla: ", newName);
      addName(event)
    }
  }

  const update = (event) => {
    const person = persons.find(n => n.name === newName)
    const changedPerson = {...person, number: newNumber}

    personService
      .update(changedPerson)
      .then(updatedPerson => {
        setPersons(
          persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
        emptyNewPersonFields()
        console.log("mitä vihhua nyt, updatedPerson: ", `${updatedPerson.name}`);
        updateNotification(`${updatedPerson.name} updated`, false)
      })

      .catch(error => {
        addName(event)
      })
  }

  const updateNotification = (message, isItError) => {

    console.log("update notification message:", message);

    setNotification(message)
    setNotificationError(isItError)
    setTimeout(() => {setNotification(null)}, 5000)
  }

  const deletePerson = (props) => {

    console.log("poistetaan ", props.id);

    if (window.confirm(`Delete ${props.name}?`)) {
      personService
        .deletePerson(props.id)
        .then(deletedId => {
          setPersons(persons.filter(n => n.id !== deletedId))
          updateNotification(`${props.name} deleted`, false)
      })

      .catch(error => {
        updateNotification(`Information of ${props.name} has already been removed form the server`, true)
      })
    }
  }

  const addName = (event) => {
    
    console.log("lisätään nimi", {newName}, "numero ", newNumber);
    const personObject ={
      name: newName, number: newNumber
    }

    personService
      .addPerson(personObject)
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        emptyNewPersonFields()
        updateNotification(`Added ${addedPerson.name}`, false)
      })
  }

  const emptyNewPersonFields = () => {
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} error={isNotificationError} />
      <Filter filter={filter} handler={handleFilterChange} />
      <h2>Add new number</h2>
      <NewPersonForm addName={addNameIfNotInBook} name={newName} nameHandler={handleNameChange}
        number={newNumber} numberHandler={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deleteFunction={deletePerson}/>
    </div>
  )

}

export default App