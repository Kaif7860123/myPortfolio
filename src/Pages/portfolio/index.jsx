import React, { useRef, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices'
const Portfolio = () => {
 const profileref = useRef()
 const featureref = useRef()
 const projectref = useRef()
 const resumeref = useRef()
 const skillref = useRef()
 const contactref = useRef()
const scrollToSection=(name)=>{
  if(name=="Home"){
    profileref.current?.scrollIntoView({behavior:"smooth"})
  }else if(name=="Features"){
    featureref.current?.scrollIntoView({behavior:"smooth"})

  }else if(name=="Projects"){
    projectref.current?.scrollIntoView({behavior:"smooth"})

  }else if(name=="Resume"){
    resumeref.current?.scrollIntoView({behavior:"smooth"})

  }else if(name=="Skills"){
    skillref.current?.scrollIntoView({behavior:"smooth"})

  }else if(name=="Contact"){
    contactref.current?.scrollIntoView({behavior:"smooth"})

  }
}
  return (
    <>
     
     <div className={styles.container}>
       <Sidebar scrollToSection={scrollToSection}/>
<div className={styles.section}>
 <Profile profileRef={profileref} featureref={featureref} skillref={skillref} projectref={projectref} resumeref={resumeref} contactref={contactref}/>
 <Features featureref={featureref}/>
 <Project projectref={projectref}/>
 <Resume resumeref={resumeref}/>
 <Skills skillref={skillref}/>
 <Contact contactref={contactref}/>
 <Footer/>
</div>
        </div> 
    </>
  )
}

export default Portfolio
