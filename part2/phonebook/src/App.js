import { useState , useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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
    const p = persons.find(person => person.name === newName)
    if(p) {
      if(window.confirm(`${newName} is already added, do you want to change the number?`)) {
        personService
          .update(personObject, p.id)
          .then(() => {
            personService.getAll()
              .then(data => setPersons(data))
            setMessage(`Number of ${personObject.name} was changed successfully`)
            setTimeout(() => {
               setMessage(null)
            }, 5000)
          }
          )
          .catch(error => {
            setErrorMessage(`${personObject.name} was already deleted from the server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })

          }
      } else {
      personService
        .addNew(personObject)
        .then(data => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
        })
        setMessage(`${personObject.name} was added successfully`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
    }
  }

  const handleNewName = (event) => setNewName(event.target.value)

  const handleNewNumber = (event) => setNewNumber(event.target.value)

  const handleNewFilter = (event) => setNewFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} error={false}/>
      <Notification message={errorMessage} error={true} />
      <Filter filter={newFilter} onChange={handleNewFilter}/>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} setPersons={setPersons}/>
    </div>
  )
}

export default App
