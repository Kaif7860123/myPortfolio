import React from "react";
import styles from "./index.module.css";
import { eduData } from "../../Data/educationData";
import CommonData from "../../component/resume";
function Education() {
  return (
    <>
      <div className={styles.educationCont}>
        <div className={styles.educationSection}>
          <div className={styles.educationTime}>
            {/* <p className={styles.year}>2019-2025</p>
            <p className={styles.eduQuality}>Education Quality</p> */}
            <CommonData year="2019-2025" quality="Education Quality"/>
          </div>
          <div className={styles.educationDetail}>
            {eduData
              .filter((item) => item.id <= 3)
              .map((item, i) => {
                return (
                  <>
                    <div className={styles.border}>
                      <div className={styles.marginBttom}>
                        <div className={styles.detailBox}>
                          <div className={styles.circleCont}>
                            <div className={styles.circle}>
                              <div className={styles.borderRight}></div>
                            </div>
                          </div>
                          <p className={styles.tech}>{item.techName}</p>
                          <div className={styles.universityCont}>
                            <p className={styles.university}>
                              {item.universityName}
                            </p>
                            <p className={styles.marks}>{item.marks}</p>
                          </div>
                          <p className={styles.eduAbout}>{item.eduAbout}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        {/* <div className={styles.experienceSection}>
          <div className={styles.educationTime}>
            <p className={styles.year}>2019-2025</p>
            <p className={styles.eduQuality}>Job Experience</p>
          </div>
        </div> */}

        {/* job experience */}

        <div className={styles.educationSection}>
          <div className={styles.educationTime}>
          <CommonData year="2024-2025" quality="Job Exprience"/>
           
          </div>
          <div className={styles.educationDetail}>
            {eduData
              .filter((item) => item.id > 3)
              .map((item, i) => {
                return (
                  <>
                    <div className={styles.border}>
                      {/* <div className={styles.circleCont}>
                        <div className={styles.circle}>
                          <div className={styles.borderRight}></div>
                        </div>
                      </div> */}
                      <div className={styles.marginBttom}>
                        <div className={styles.detailBox}>
                        <div className={styles.circleCont}>
                        <div className={styles.circle}>
                          <div className={styles.borderRight}></div>
                        </div>
                      </div>
                          <p className={styles.tech}>{item.techName}</p>
                          <div className={styles.universityCont}>
                            <p className={styles.university}>
                              {item.universityName}
                            </p>
                            <p className={styles.marks}>{item.marks}</p>
                          </div>
                          <p className={styles.eduAbout}>{item.eduAbout}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
