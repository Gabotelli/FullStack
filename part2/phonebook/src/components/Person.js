import personServices from '../services/persons'
const Person = ({ person, setPersons }) => {
    const handleDelete = () => {
        if(window.confirm(`Are you sure you want to delete ${person.name}?`)) {
            personServices.erase(person.id)  
            personServices.getAll().then(data => setPersons(data))
        }
    }
    return (
    <div>
        {person.name} {person.number}<button onClick={handleDelete}>delete</button>
    </div>
    )
}

export default Person