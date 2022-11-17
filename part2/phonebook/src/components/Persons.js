import Person from './Person'

const Persons = ({ persons, newFilter, setPersons }) => {
    return (
        <div>
            {persons
                .filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
                    .map(filteredPerson => <Person key={filteredPerson.id} person={filteredPerson} setPersons={setPersons}/>)}
        </div>
    )
}

export default Persons