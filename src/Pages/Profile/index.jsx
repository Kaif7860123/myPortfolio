import React from 'react'
import styles from './index.module.css'
import profilePic from '../../assets/banner.png'
function Profile() {
  return (
    <>
     <div className={styles.profile}>
        <img src={profilePic}/>
        <div className={styles.content}>
            <p className={styles.name}>Mohammad Kaif</p>
            <p className={styles.passion}>I am a <span>web developer</span> </p>
            
            <button className={styles.contact}>Contact me</button>
           
        </div>
        </div> 
    </>
  )
}

export default Profile
