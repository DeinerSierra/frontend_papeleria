import {useState, useEffect} from 'react'
<<<<<<< HEAD

=======
>>>>>>> 8c012e5 (reintegro de version antigua)
import axios from 'axios'


function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() =>{
<<<<<<< HEAD
        
        const getProducts = async () => {
            const res = await axios.get(`https://papeleria.up.railway.app/api/products?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            console.log(res);
            setProducts(res.data.products)
            setResult(res.data.result)
        }
        
=======
        const getProducts = async () => {
            const res = await axios.get(`/api/products?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            setProducts(res.data.products)
            setResult(res.data.result)
        }
>>>>>>> 8c012e5 (reintegro de version antigua)
        getProducts()
    },[callback, category, sort, search, page])
    
    return {
        products: [products, setProducts],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default ProductsAPI