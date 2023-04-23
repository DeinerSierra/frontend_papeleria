import React, {useState} from 'react'
import {Link} from 'react-router-dom'
<<<<<<< HEAD
import axios from 'axios';
=======
import clienteAxios from '../../../config/clienteAxios'
>>>>>>> 8c012e5 (reintegro de version antigua)

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
<<<<<<< HEAD
            const response = await axios.post('https://papeleria.up.railway.app/user/login', {...user})
            const accessToken = response.data.accessToken; // Aquí se captura el token de acceso desde la respuesta
            console.log(accessToken);
            localStorage.setItem('accessToken', accessToken); // Aquí se almacena el token de acceso en el almacenamiento local del navegador
            localStorage.setItem('refreshtoken', response.refreshtoken);
=======
            await clienteAxios.post('/user/login', {...user})
>>>>>>> 8c012e5 (reintegro de version antigua)

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
<<<<<<< HEAD
    
    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <input type="email" name="email" required placeholder="Email"
                value={user.email} onChange={onChangeInput} />
=======

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />
>>>>>>> 8c012e5 (reintegro de version antigua)

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

<<<<<<< HEAD

=======
>>>>>>> 8c012e5 (reintegro de version antigua)
export default Login
