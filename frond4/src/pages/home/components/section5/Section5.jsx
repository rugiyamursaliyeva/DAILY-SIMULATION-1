import React, { useEffect } from 'react'
import styles from '../section5/Section5.module.scss'
import { CiShoppingTag } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'

const Section5 = () => {
    const dispatch =  useDispatch() 
    const data = useSelector(state => state.product.product)
    const loading = useSelector(state => state.product.loading)
    const error = useSelector(state => state.product.error)

    useEffect(() => {
      dispatch(getProductsThunk())
    }, [])

    if (loading) return <span>Loading...</span>
    if (error) return <span>Probelm Deteced While Loading Process</span>

  return (
    <section className={styles.main}>
        <div className={styles.text}>
            <p>Related Searched Products</p>
            <span>Who are in extremely love with eco friendly system.</span>
        </div>
        

        <div className={styles.second}>
         <div className={styles.data}>
                {data && data.map(item => {
                  return (
                    <div className={styles.card}>
                        <img src={item.image} alt="" /> 
                        <div className={styles.cardText}>
                          <p>{item.name}</p>
                          <span><CiShoppingTag />{item.price}</span>
                        </div>     
                    </div>
                  )
            }).slice(8)}
        </div>
        </div>


        
    </section>

    
  )
}

export default Section5