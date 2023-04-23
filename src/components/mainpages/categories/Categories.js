import React, {useState, useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
<<<<<<< HEAD
import axios from 'axios'
=======
import clienteAxios from '../../../config/clienteAxios'

>>>>>>> 8c012e5 (reintegro de version antigua)
function Categories() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createCategory = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
<<<<<<< HEAD
                const res = await axios.put(`https://papeleria.up.railway.app/api/category/${id}`, {name: category}, {
=======
                const res = await clienteAxios.put(`/api/category/${id}`, {name: category}, {
>>>>>>> 8c012e5 (reintegro de version antigua)
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }else{
<<<<<<< HEAD
                const res = await axios.post('https://papeleria.up.railway.app/api/category', {name: category}, {
=======
                const res = await clienteAxios.post('/api/category', {name: category}, {
>>>>>>> 8c012e5 (reintegro de version antigua)
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCategory('')
            setCallback(!callback)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editCategory = async (id, name) =>{
        setID(id)
        setCategory(name)
        setOnEdit(true)
    }

    const deleteCategory = async id =>{
        try {
<<<<<<< HEAD
            const res = await axios.delete(`https://papeleria.up.railway.app/api/category/${id}`, {
=======
            const res = await clienteAxios.delete(`/api/category/${id}`, {
>>>>>>> 8c012e5 (reintegro de version antigua)
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="categories">
            <form onSubmit={createCategory}>
                <label htmlFor="category">Category</label>
                <input type="text" name="category" value={category} required
                onChange={e => setCategory(e.target.value)} />

                <button type="submit">{onEdit? "Update" : "Create"}</button>
            </form>

            <div className="col">
                {
                    categories.map(category => (
                        <div className="row" key={category._id}>
                            <p>{category.name}</p>
                            <div>
                                <button onClick={() => editCategory(category._id, category.name)}>Edit</button>
                                <button onClick={() => deleteCategory(category._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
