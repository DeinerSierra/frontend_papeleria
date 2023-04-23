import axios from 'axios'
<<<<<<< HEAD
const url = process.env.BACKEND_URL
console.log(url)
const clienteAxios = axios.create({
    baseURL: url,
=======

const clienteAxios = axios.create({
    baseURL: process.env.BACKEND_URL,
>>>>>>> 8c012e5 (reintegro de version antigua)
    headers: {'Content-Type': 'application/json'}
})

export default clienteAxios;