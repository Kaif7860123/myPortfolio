import React from 'react'
import styles from "./index.module.css"
import Header from '../../component/header'
 
import { skillData } from '../../Data/skillData'
function Skills({skillref}) {
  return (
    <>
      <div className={styles.skills} ref={skillref}>
      <Header title="web development skills" task="My Skills" />
      <div className={styles.projectBox}>
                {
                skillData.map((item,i)=>{                            
                    return(                                                                                                         
                      <div className={styles.project1}>
                      <div className={styles.imgDiv}>    
                        <img src={item.pic} key={i}/>                                                      
                      </div>
                      <p className={styles.projectType}>{item.text}</p>

                      
                    </div>
                    )
                  })
                }
              </div>
      </div>
    </>
  )
}

export default Skills
