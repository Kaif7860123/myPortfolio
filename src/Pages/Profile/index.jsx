import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import profilePic from "../../assets/image.png";
import { Link } from "react-router-dom";
import cv from "../../assets/kaifResume.pdf";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Sidebar from "../sidebar";
function Profile({
  profileRef,
  featureref,
  skillref,
  contactref,
  resumeref,
  projectref,
}) {
  const [check, setcheck] = useState(false);
  const checked = () => {
    setcheck(!check);
    console.log(check);
  };
  const scrollToSection = (name) => {
    if (name == "Home") {
      profileRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name == "Features") {
      featureref.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name == "Projects") {
      projectref.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name == "Resume") {
      resumeref.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name == "Skills") {
      skillref.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name == "Contact") {
      contactref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const updateWidth = () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1192) {
      setcheck(false);
    }
  };
  window.addEventListener("resize", updateWidth);
  return (
    <>
      <div className={styles.profile} ref={profileRef}>
        {check ? (
          <i onClick={checked} className={styles.menu}>
            <ImCross />
          </i>
        ) : (
          <i className={styles.menu} onClick={checked}>
            <FiMenu />
          </i>
        )}

        {check ? (
          <Sidebar check={check} scrollToSection={scrollToSection} />
        ) : null}

        <div className={styles.profilePic}>
          <img src={profilePic} />
        </div>
        <div className={styles.content}>
          <p className={styles.name}>Mohammad Kaif</p>
          <p className={styles.passion}>
            I am a <span>Fullstack developer</span>{" "}
          </p>

          <button className={styles.contact}>
            <Link to={cv} target="_blank" color="black">
              Download CV
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
