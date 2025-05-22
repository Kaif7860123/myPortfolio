import React from 'react'
import styles from './index.module.css'
import profilePic from '../../assets/kaifImg.jpg'
import  {Link}  from 'react-router-dom'
import cv from "../../assets/kaifResume.pdf"
function Profile() {
  return (
    <>
     <div className={styles.profile}>
      <div className={styles.profilePic}>
      <img src={profilePic}/>

      </div>
        <div className={styles.content}>
            <p className={styles.name}>Mohammad Kaif</p>
            <p className={styles.passion}>I am a <span>web developer</span> </p>
            
            <button className={styles.contact}><Link to={cv} target='_blank' color='black'>Download CV</Link></button>
           
        </div>
        </div> 
    </>
  )
}

export default Profile
