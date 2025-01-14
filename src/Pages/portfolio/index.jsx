import React from 'react'
import styles from "./index.module.css"
import Sidebar from '../sidebar'
import Profile from '../Profile'
import Features from '../features'
import Project from '../project'
import Resume from '../resume'
import Education from '../education'
import Skills from '../Skills'
import Footer from '../Footer'
import Contact from '../contact'
const Portfolio = () => {
  return (
    <>
     <div className={styles.container}>
       <Sidebar/>
<div className={styles.section}>
 <Profile/>
 <Features/>
 <Project/>
 <Resume/>
 <Skills/>
 <Contact/>
 <Footer/>
</div>
        </div> 
    </>
  )
}

export default Portfolio
