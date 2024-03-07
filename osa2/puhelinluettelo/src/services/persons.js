import axios from "axios";
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const addPerson = (newPersonObject) => {
    console.log("person servicen addiin päästään ", newPersonObject);
    const request = axios.post(baseURL, newPersonObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    console.log("person servicen deleteen päästään ", {id});
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => id)
}

const update = (newObject) => {
    console.log("person service update", newObject);
    const request = axios.put(`${baseURL}/${newObject.id}`, newObject)
    return request.then(response => response.data)
}

export default {getAll, addPerson, deletePerson, update}