import React from 'react'
import styles from "./index.module.css"
import Sidebar from '../sidebar'
import Profile from '../Profile'
import Features from '../features'
import Project from '../project'
const Portfolio = () => {
  return (
    <>
     <div className={styles.container}>
       <Sidebar/>
<div className={styles.section}>
 <Profile/>
 <Features/>
 <Project/>
</div>
        </div> 
    </>
  )
}

export default Portfolio
