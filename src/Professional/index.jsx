import React from 'react'
import styles from './index.module.css'
import CommonData from '../component/resume'
import { designData } from '../Data/professionalData'
function Professional() {
  return (
    <>
    <div className={styles.professional}>
<div className={styles.frameworkSkill}>
<CommonData year="Features" quality="Framework Skill"/>
{
    designData.filter((item,i)=>item.id<5).map((item,i)=>{
        return(
            <div className={styles.frameworks}>
            <p className={styles.frameworkName}>{item.frameworkName}</p>
            <p className={styles.frameworkPercent}>
              <p className={styles.percentColor} style={{width:item.width}}>{item.percentage}</p>
            </p>
              </div>
        )
    })
}
   
     
</div>
<div className={styles.frameworkSkill}>
<CommonData year="Features" quality="Development Skill"/>
{
    designData.filter((item,i)=>item.id>4).map((item,i)=>{
        return(
            <div className={styles.frameworks}>
            <p className={styles.frameworkName}>{item.frameworkName}</p>
            <p className={styles.frameworkPercent}>
              <p className={styles.percentColor} style={{width:item.width}}>{item.percentage}</p>
            </p>
              </div>
        )
    })
}
</div>
    </div>
    </>
  )
}

export default Professional
