import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
<<<<<<< HEAD

import axios from 'axios'
=======
import clienteAxios from '../../../config/clienteAxios'
>>>>>>> 8c012e5 (reintegro de version antigua)

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
<<<<<<< HEAD
                    const res = await axios.get('https://papeleria.up.railway.app/api/payment', {
=======
                    const res = await clienteAxios.get('/api/payment', {
>>>>>>> 8c012e5 (reintegro de version antigua)
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
<<<<<<< HEAD
                    const res = await axios.get('https://papeleria.up.railway.app/user/history', {
=======
                    const res = await clienteAxios.get('/user/history', {
>>>>>>> 8c012e5 (reintegro de version antigua)
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <h2>Historial</h2>

            <h4>Tienes {history.length} pedidos</h4>

            <table>
                <thead>
                    <tr>
                        <th>Pago ID</th>
                        <th>Fecha de Compra</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items.paymentID}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
<<<<<<< HEAD
                                <td><Link to={`https://papeleria.up.railway.app/history/${items._id}`}>View</Link></td>
=======
                                <td><Link to={`/history/${items._id}`}>View</Link></td>
>>>>>>> 8c012e5 (reintegro de version antigua)
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory
