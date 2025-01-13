import React from 'react'
import styles from './index.module.css'
import { data } from '../../Data/featureData'
import Header from '../../component/header'
function Features() {
  return (
    <>
      <div className={styles.feature}>
               {/* <p className={styles.text}>Features</p>
            <p className={styles.name}>What I Do</p> */}
            <Header title="Features" task="What I Do"/>
        <div className={styles.box}>
            {
                data.map((item,i)=>{
                    return(
            <div className={styles.box1}>

                        <i key={i}>{item.icon}</i>
            <p className={styles.heading}  key={i}>{item.title}</p>
            <p className={styles.para}  key={i}>{item.content}</p>
            <p className={styles.arrow}  key={i}>{item.arrowIcon}</p>
            </div>

                    )
                })
            }
            
        </div>
      </div>
    </>
  )
}

export default Features
