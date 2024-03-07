import axios from "axios";
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
    console.log("get all servicessä käynnistyy");
    const request = axios.get(`${baseURL}/all`)
    return request.then(response => response.data)
}

export default {getAll}