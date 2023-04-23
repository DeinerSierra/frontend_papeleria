import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
<<<<<<< HEAD

import axios from 'axios'
=======
import clienteAxios from '../../../config/clienteAxios'
>>>>>>> 8c012e5 (reintegro de version antigua)
import { PayPalButton } from "react-paypal-button-v2";

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
<<<<<<< HEAD
        await axios.patch('https://papeleria.up.railway.app/user/addcart', {cart}, {
=======
        await clienteAxios.patch('/user/addcart', {cart}, {
>>>>>>> 8c012e5 (reintegro de version antigua)
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Deseas eliminar este producto?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

<<<<<<< HEAD
        await axios.post('https://papeleria.up.railway.app/api/payment', {cart, paymentID, address}, {
=======
        await clienteAxios.post('/api/payment', {cart, paymentID, address}, {
>>>>>>> 8c012e5 (reintegro de version antigua)
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
<<<<<<< HEAD
        alert("Tu compra ha tenido exito.")
=======
        alert("You have successfully placed an order.")
>>>>>>> 8c012e5 (reintegro de version antigua)
    }
    


    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> 

    return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>$ {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <h3>Total: $ {total}</h3>
                <div>
                    <PayPalButton
                        amount={total}
                        currency="USD"
                        onSuccess={tranSuccess}
                        onError={(error) => console.log(error)}
                        options={{
                        clientId: "AYvqgnAzw0WHPxGaXt7CAtI4GXKou8Jcnv3eEwUDzCF7wcmWEYvHCVgv02c_hguRqpdahNf4gdsp6t9L",
                        currency: "USD",
                        }}
                    />

                </div>
                
                
                
            </div>
        </div>
    )
}

export default Cart

//how to add a papypal button?

