import React from 'react'
import styles from '../section1/Section1.module.scss'

const Section1 = () => {
  return (
    <section className={styles.main}>
        <div className={styles.second}>
            <div className={styles.image}>
                <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
            </div>
            <div className={styles.mainText}>
                <p>Flat <span className={styles.off}>75%Off</span></p>
                <h1 className={styles.text}>It’s Happening this Season!</h1>
                <button>PURCHASE NOW</button>
            </div>
        </div>
        
    </section>
  )
}

export default Section1