import { useState , useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(data => {
      setPersons(data)})
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if(!persons.find(person => person.name === newName)) {
      personService
        .addNew(personObject)
        .then(data => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
        })
      
    }else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNewName = (event) => setNewName(event.target.value)

  const handleNewNumber = (event) => setNewNumber(event.target.value)

  const handleNewFilter = (event) => setNewFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} onChange={handleNewFilter}/>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} setPersons={setPersons}/>
    </div>
  )
}

export default App
