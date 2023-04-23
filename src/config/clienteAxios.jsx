import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {'Content-Type': 'application/json'}
})

export default clienteAxios;