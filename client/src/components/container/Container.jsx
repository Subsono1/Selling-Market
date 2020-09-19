import { Switch } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getAllOrders } from '../../services/orders'
import { getAllProducts, putProduct } from '../../services/products'


function Container(props) {
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])

  const history = useHistory()

  useEffect(() => {
    const fetchProducts = async () => {
      const productsArray = await getAllProducts()
      setProducts(productsArray)
    }

  
    const fetchOrders = async () => {
      const ordersArray = await getAllOrders()
      setOrders(ordersArray)
    }
    
    fetchProducts()
    fetchOrders()
  }, [])

  const updateSubmit = async (id, formInfo) => {
    const updatedProduct = await putProduct(id, formInfo)
    setProducts(prevState => prevState.map(product => product.id === Number(id) ? updatedProduct : product))
    // history.push('/products')
  }

  const createSubmit = async (formInfo) => {
    const createProduct = await postProduct(formInfo)
    setProducts(prevState => [...prevState, createProduct])

  }

  const handleDelete = async (id) => {
    await deleteProduct(id)
    setProducts(prevState => prevState.filter(product => product.id !== id))

    
  }



  return (
    <div>
      <Switch>

        
      </Switch>
      
    </div>
  )
}

export default Container
