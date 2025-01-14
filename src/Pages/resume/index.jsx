import React, { useState } from "react";
import styles from "./index.module.css";
import Header from "../../component/header";
import Education from "../education";
import Professional from "../Professional";
// import Education from "../education";
function Resume() {
  const[edu,setedu]=useState("Education")
   const routes=(e)=>{
setedu(e)
console.log(edu);

   }
  return (
    <>
      <div className={styles.resume}>
        <Header title="7+ Years of Experience" task="My Resume" />
        <div className={styles.resumeDetails}>
          <ul>
            <li onClick={()=>routes("Education")}>Education</li>
            <li  onClick={()=>routes("Professional Skills")}>Professional Skills</li>
            <li  onClick={()=>routes("Experience")}>Experience</li>
            <li  onClick={()=>routes("Interview")}>Interview</li>
          </ul>
        </div>
        
       { edu=="Education"&&<Education/>}
       { edu=="Professional Skills"&&<Professional/>}
       { edu=="Experience"&&<Education/>}
       { edu=="Interview"&&<Education/>}
         
         
      </div>
    </>
  );
}

export default Resume;
