import React, { useEffect } from 'react'
import styles from '../section3/Section3.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'
import axios from 'axios'

const Section3 = () => {
  
  const dispatch =  useDispatch()

  const data = useSelector(state => state.product.product)
  const loading = useSelector(state => state.product.loading)
  const error = useSelector(state => state.product.error)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const addToBasket = async (data) => {
    const res = await axios.post("http://localhost:5000/basket", data)
    const result = res.data
    console.log(result);
    alert(`${result.name} sebete elave olundu`)
  }

  const addToWishlist = async (data) => {
    const res = await axios.post("http://localhost:5000/wish", data)
    const result = res.data
    console.log(result);
    alert(`${result.name} istek listine elave olundu`)
    if(result.id==ite._id){
      alert("Mehsul Onsuzda basketde var")
      return
    }
    
  }

  if (loading) return <span>Loading...</span>
  if (error) return <span>Probelm Deteced While Loading Process</span>


  return (
    <section className={styles.main}>
        <div className={styles.container}>
            <div className={styles.text}>
                <p>New realeased Products for Men</p>
                <span>Who are in extremely love with eco friendly system.</span>
            </div>
        </div>

        <div className={styles.data}>
          {data && data.map(item => {
            return (
              <div className={styles.card}>
                  <img src={item.image} alt="" /> 
                  <div className={styles.cardText}>
                    <p>{item.name}</p>
                    <span>{item.price}</span>
                    <div className={styles.btn}>
                    <button onClick={() => addToBasket(item)}>Basket</button>
                    <button onClick={() => addToWishlist(item)}>Wishlist</button>
                    </div>
                  </div>
                  
              </div>
            )
          }).slice(0,4)}

        </div>
    </section>
  )
}

export default Section3