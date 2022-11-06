import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,}
  ]) 
  const [newName, setNewName] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }
    if(!persons.find(person => person.name === newName)) {
      setPersons(persons.concat(personObject))
      setNewName('')
    }else {
      alert(`${newName} is already added to phonebook`)
    }
  }
  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }
  const Person = ({ name }) => {
    return <p>{name}</p>
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewPerson}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person,i) => <Person key={i} name={person.name}/>)}
      </div>
    </div>
  )
}

export default App
