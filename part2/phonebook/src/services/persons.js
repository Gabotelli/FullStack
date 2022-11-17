import axios from 'axios'
const url = 'http://localhost:3001/persons'
const getAll = () => {
    const r = axios.get(url)
    return r.then(response => response.data)
}
const addNew = (newPerson) => {
    const r = axios.post(url,newPerson)
    return r.then(response => response.data)
}
export default {getAll, addNew}