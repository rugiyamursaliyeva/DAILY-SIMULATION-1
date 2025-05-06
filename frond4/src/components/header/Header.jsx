import React from 'react'
import styles from '../header/Header.module.scss'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
    <section className={styles.header}>
      <div className={styles.mainText}>
        <div className={styles.mainLogin}>
          <p className={styles.phone}>+12312-3-1209</p>
          <p className={styles.email}>SUPPORT@COLORIB.COM</p>
        </div>
        <div className={styles.login}>
          <p>LOGIN</p>
        </div>
      </div>
    </section>

    <section className={styles.headers}>
      <div className={styles.second}>
        <div className={styles.image}>
          <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
        </div>
        <div className={styles.navs}>
          <Link to={'/'}>HOME</Link>
          <Link to={'/category'}>CATEGORY</Link>
          <Link to={'/men'}>MEN</Link>
          <Link to={'/women'}>WOMEN</Link>
          <Link to={'/latest'}>LATEST</Link>
          <Link to={'/pages'}>PAGES</Link>
        </div>

      </div>

    </section>
    </>
  )
}

export default Header