import React from 'react'
import styles from '../footer/Footer.module.scss'
import {FaHeart} from "react-icons/fa";

const Footer = () => {
  return (
    <section className={styles.footer}>
        <div className={styles.foot}>
            <p>Copyright ©2025 All rights reserved | This template is made with <FaHeart color={'#f41068'}/>  by Colorlib</p>

        </div>

    </section>
  )
}

export default Footer