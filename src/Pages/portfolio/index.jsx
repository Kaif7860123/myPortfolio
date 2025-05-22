import React, { useState } from 'react'
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
  const data=useSelector((state)=>state.counter.value)
  console.log(data)
  const dispatch=useDispatch()
  return (
    <>
    {/* <button onClick={()=>dispatch(increment())}>increment me</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    <h1>count is {data}</h1> */}
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
