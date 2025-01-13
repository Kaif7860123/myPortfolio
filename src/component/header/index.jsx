import React from 'react'
import styles from './index.module.css'
function Header(props) {
  return (
    <>
      <div>
             <p className={styles.text}>{props.title}</p>
                    <p className={styles.name}>{props.task}</p>
      </div>
    </>
  )
}

export default Header
