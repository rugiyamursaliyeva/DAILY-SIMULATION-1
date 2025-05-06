import React from 'react'
import styles from '../section2/Section2.module.scss'

const Section2 = () => {
  return (
    <section className={styles.main}>
      <div className={styles.text}>
        <p>Shop for Different Categories</p>
        <span>Who are in extremely love with eco friendly system.</span>
      </div>

      <div className={styles.container}>
        <div className={styles.images}>
         <div className={styles.one}>
         <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="" />
         <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="" />
         </div>
         <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" />   
        </div>
        <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" />
      </div>

    </section>
  )
}

export default Section2