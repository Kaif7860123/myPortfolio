import React, { useRef } from "react";
import styles from "./index.module.css";
import pic from "../../assets/image.png";
import { content, Icons } from "../../Data/sidebarContent";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
const Sidebar = ({scrollToSection,check}) => {
 console.log(check)
 const navigate=useNavigate()
const navigatePage=(link)=>{
navigate(link)
}
  return (
    <>
      <div className={check?styles.sidebar1:styles.sidebar}>
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
              <i>  <Link key={i} to={item.url}  target="_blank">{item.icon}</Link></i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
