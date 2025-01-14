import React from 'react'
import styles from "./index.module.css"
function CommonData(props) {
  return (
    <>
    <div>
         <p className={styles.year}>{props.year}</p>
         <p className={styles.eduQuality}>{props.quality}</p>
      </div>
    </>
  )
}

export default CommonData
