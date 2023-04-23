import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
<<<<<<< HEAD
                    const res = await axios.get('https://papeleria.up.railway.app/user/infor', {
                        headers: {Authorization: token}
                    })
                    console.log('Desde get user')
                    console.log(res)
=======
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })
>>>>>>> 8c012e5 (reintegro de version antigua)

                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                    setCart(res.data.cart)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])

    

    const addCart = async (product) => {
<<<<<<< HEAD
        if(!isLogged) return alert("Por favor inicia sesion para continuar con la compra")
=======
        if(!isLogged) return alert("Please login to continue buying")
>>>>>>> 8c012e5 (reintegro de version antigua)

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])

<<<<<<< HEAD
            await axios.patch('https://papeleria.up.railway.app/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
=======
            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
>>>>>>> 8c012e5 (reintegro de version antigua)
                headers: {Authorization: token}
            })

        }else{
<<<<<<< HEAD
            alert("Este producto ya ha sido agregado al carrito")
=======
            alert("Este producto ya se encuentra en el carrito.")
>>>>>>> 8c012e5 (reintegro de version antigua)
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory]
    }
}

<<<<<<< HEAD
export default UserAPI
 
=======
export default UserAPI
>>>>>>> 8c012e5 (reintegro de version antigua)
