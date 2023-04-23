import React, {createContext, useState, useEffect} from 'react'
import ProductsAPI from './api/ProductsAPI'
import UserAPI from './api/UserAPI'
import CategoriesAPI from './api/CategoriesAPI'
<<<<<<< HEAD
=======

>>>>>>> 8c012e5 (reintegro de version antigua)
import axios from 'axios'

export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
<<<<<<< HEAD
    useEffect(() =>{
        const refreshtoken = localStorage.getItem('refreshtoken')
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${refreshtoken}`
                    }
                }
                const res = await axios.get('https://papeleria.up.railway.app/user/refresh_token')
                console.log(res)
        
                setToken(res.data.accesstoken)
    
=======


    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')

                setToken(res.data.accesstoken)

>>>>>>> 8c012e5 (reintegro de version antigua)
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])


<<<<<<< HEAD
    
=======

>>>>>>> 8c012e5 (reintegro de version antigua)
    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        userAPI: UserAPI(token),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}