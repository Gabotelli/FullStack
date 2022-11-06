import Person from './Person'

const Persons = ({ persons, newFilter }) => {
    return (
        <div>
            {persons
                .filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
                    .map((filteredPerson,i) => <Person key={i} person={filteredPerson}/>)}
        </div>
    )
}

export default Persons