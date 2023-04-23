import React, {useState} from 'react'
import {Link} from 'react-router-dom'
<<<<<<< HEAD
import axios from 'axios'
=======
import clienteAxios from '../../../config/clienteAxios'
>>>>>>> 8c012e5 (reintegro de version antigua)

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
<<<<<<< HEAD
            await axios.post('https://papeleria.up.railway.app/user/register', {...user})
=======
            await clienteAxios.post('/user/register', {...user})
>>>>>>> 8c012e5 (reintegro de version antigua)

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
<<<<<<< HEAD
                <h2>Registrar</h2>
=======
                <h2>Register</h2>
>>>>>>> 8c012e5 (reintegro de version antigua)
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Registrar</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register