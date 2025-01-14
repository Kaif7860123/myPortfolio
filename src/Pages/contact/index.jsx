import React from "react";
import styles from "./index.module.css";
import Header from "../../component/header";
import contact from "../../assets/contact1.png";
import { FaArrowRight } from "react-icons/fa";
import { Icons } from "../../Data/sidebarContent";
function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <Header title="Contact" task="Contact With Me" />
        <div className={styles.projectBox}>
          <div className={styles.project1}>
            <div className={styles.imgDiv}>
              <img src={contact} />
            </div>
            <p className={styles.name}>Mohammad Kaif</p>
            <p className={styles.trade}>fullstack developer</p>
            <p className={styles.connect}>
              I am available for web development work. Connect with me via and
              call in to my account.
            </p>
            <p className={styles.phone}>
              Phone: <span>9721836262</span>
            </p>
            <p className={styles.phone}>
              Email:<span>kaif47320@gmail.com</span>{" "}
            </p>
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

          <div className={styles.detailCont}>
            <div className={styles.inputs}>
                <div>
                <p>Name</p>
                <input type="text"/>
                </div>
                <div>
                <p>Email</p>
                <input type="text"/>
                </div>
            </div>
            <p>Email</p>
            <input type="text"/>
            <p>Subject</p>
            <input type="text"/>
            <p>Mesage</p>
            <textarea type="text"/>
            <p className={styles.message}><span>Send Message <FaArrowRight/></span></p>
          </div>
        </div>

        {/* detail data */}
      </div>
    </>
  );
}

export default Contact;
