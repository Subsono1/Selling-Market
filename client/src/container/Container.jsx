import { Route, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Sell from '../screens/Sell'
import { getAllOrders } from '../services/orders'
import { getAllProducts, putProduct, deleteProduct, postProduct } from '../services/products'
import Products from '../screens/Products'
import ProductEdit from '../screens/ProductEdit'
import ProductDetail from '../screens/ProductDetail'
import Orders from '../screens/Orders'


function Container(props) {
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])

  const history = useHistory()

  const {currentUser} = props

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
    history.push('/products')
  }

  const createSubmit = async (formInfo) => {
    const createProduct = await postProduct(formInfo)
    setProducts(prevState => [...prevState, createProduct])
    history.push('/products')

  }

  const handleDelete = async (id) => {
    await deleteProduct(id)
    setProducts(prevState => prevState.filter(product => product.id !== id))
    history.push('/products')

    
  }



  return (
    
    <Switch>
      <Route exact path='/sell'>
      <Sell 
          createSubmit={createSubmit} />
      </Route>
      
      <Route exact path='/products'>
        <Products
          products={products}
          />

      </Route>
      <Route exact path='/products/:id/edit'>
        <ProductEdit
          products={products}
          updateSubmit={updateSubmit}
        />

      </Route>
      <Route exact path='/products/:id'>
        <ProductDetail
          products={products}
          handleDelete={handleDelete}
          currentUser={currentUser}/>
        
      </Route>
      
      <Route exact path='/orders'>
        <Orders
          orders={orders}
          products={products}/>

      </Route>


      </Switch>
      
    
  )
}

export default Container
