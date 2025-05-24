import React, { useRef } from "react";
import styles from "./index.module.css";
import pic from "../../assets/kaifImg.jpg";
import { content, Icons } from "../../Data/sidebarContent";
import { FiMenu } from "react-icons/fi";
const Sidebar = ({scrollToSection}) => {
 

  return (
    <>
      <div className={styles.sidebar}>
        <i className={styles.menu}><FiMenu/></i>
        <div className={styles.profile}>
          <img src={pic} />
        </div>
        <div className={styles.sidebarContent}>
          {content.map((item, i) => {
            return (
              <p className={styles.content}  key={i}  onClick={()=>scrollToSection(item.text)}>
                <span>{item.icon}</span>
                {item.text}
              </p>
            );
          })}
        </div>
        <div className={styles.bottomContent}>
          <p>Find With Me</p>
          {Icons.map((item, i) => {
            return (
              <div className={styles.icons}>
                <i key={i}>{item.icon}</i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
