import React from 'react'
import styles from './index.module.css'
import logo from '../../assets/image.png'
function Footer() {
  return (
    <>
     <div className={styles.footer}>
        <div className={styles.imgDiv}>
            <img src={logo}/>
        </div>
        <p className={styles.name}>Kaif</p>
        <p className={styles.copyRight}>© 2025. All rights reserved by <span>Mohammad Kaif</span> </p>
     </div>
    </>
  )
}

export default Footer
