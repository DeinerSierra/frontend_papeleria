<<<<<<< HEAD
import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from  'axios'
=======
import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import clienteAxios from '../../../config/clienteAxios'
>>>>>>> 8c012e5 (reintegro de version antigua)
import Filters from './Filters'
import LoadMore from './LoadMore'


function Products() {
    const state = useContext(GlobalState)
<<<<<<< HEAD
    const [products, setProducts] = useState([]);
=======
    const [products, setProducts] = state.productsAPI.products
>>>>>>> 8c012e5 (reintegro de version antigua)
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
<<<<<<< HEAD
    useEffect(() => {
        axios.get('https://papeleria.up.railway.app/api/products')
          .then(response => setProducts(response.data.products))
          .catch(error => console.error(error));
      }, []);

=======
>>>>>>> 8c012e5 (reintegro de version antigua)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
<<<<<<< HEAD
            const destroyImg = axios.post('https://papeleria.up.railway.app/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`https://papeleria.up.railway.app/api/products/${id}`, {
=======
            const destroyImg = clienteAxios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = clienteAxios.delete(`/api/products/${id}`, {
>>>>>>> 8c012e5 (reintegro de version antigua)
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }
<<<<<<< HEAD
    
    if(loading) return <div><Loading /></div>
    return (
        <>
            <Filters />
        
            {
                isAdmin && 
                <div className="delete-all">
                    <span>Seleccionar todos</span>
                    <input type="checkbox" checked={isCheck} onChange={checkAll} />
                    <button onClick={deleteAll}>Eliminar Todos</button>
                </div>
            }
        
            <div className="products">
                {Array.isArray(products) && products.map(product => {
                return <ProductItem key={product._id} product={product} isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })}
            </div>
        
            
            <LoadMore />
            
            {products && products.length === 0 && <Loading />}

=======

    if(loading) return <div><Loading /></div>
    return (
        <>
        <Filters />
        
        {
            isAdmin && 
            <div className="delete-all">
                <span>Seleccionar todos</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Eliminar Todos</button>
            </div>
        }

        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })
            } 
        </div>

        <LoadMore />
        {products.length === 0 && <Loading />}
>>>>>>> 8c012e5 (reintegro de version antigua)
        </>
    )
}

export default Products
