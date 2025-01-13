import React from "react";
import styles from "./index.module.css";
import pic from "../../assets/logo.png";
import { content, Icons } from "../../Data/sidebarContent";
const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.profile}>
          <img src={pic} />
        </div>
        <div className={styles.sidebarContent}>
          {content.map((item, i) => {
            return (
              <p className={styles.content} key={i}>
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
