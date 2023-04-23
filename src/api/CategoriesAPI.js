import {useState, useEffect} from 'react'
<<<<<<< HEAD

=======
>>>>>>> 8c012e5 (reintegro de version antigua)
import axios from 'axios'

function CategoriesAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getCategories = async () =>{
<<<<<<< HEAD
            const res = await axios.get('https://papeleria.up.railway.app/api/category')
=======
            const res = await axios.get('/api/category')
>>>>>>> 8c012e5 (reintegro de version antigua)
            setCategories(res.data)
        }

        getCategories()
    },[callback])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}

export default CategoriesAPI
