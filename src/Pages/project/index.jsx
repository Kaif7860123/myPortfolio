import React from "react";
import styles from "./index.module.css";
import Header from "../../component/header";
import { projectData } from "../../Data/projectData";


import project1 from '../../assets/portfolio1.jpg';

function Project() {
  return (
    <>   
      <div className={styles.project}>
        <Header
          title="Visit my project and keep your feedback"
          task="My Project"
        />
        <div className={styles.projectBox}>
          {
          projectData.map((item,i)=>{                     
              return(                                                                                                         
                <div className={styles.project1}>
                <div className={styles.imgDiv}>    
                  <img src={project1}/>                                                      
                </div>
                <div className={styles.midContent}>
                  <p className={styles.projectType}>{item.text}</p>
                  <p className={styles.likes}>
                    <i>
                      {item.HeartIcon}
                    </i>
                    {item.count}
                  </p>                        
                </div>
                <div className={styles.bottomContent}>
                  <p className={styles.text}>
                   {item.content}
                    <i>
                    {item.arrowIcon}                           
                    </i>
                  </p>
                </div>
              </div>
              )
            })
          }
          {/* <div className={styles.project1}>
            <div className={styles.imgDiv}>
              <img src={project1} />
            </div>
            <div className={styles.midContent}>
              <p className={styles.projectType}>Development</p>
              <p className={styles.likes}>
                <i>
                  <IoMdHeartEmpty />
                </i>
                600
              </p>
            </div>
            <div className={styles.bottomContent}>
              <p className={styles.text}>
                The Service provide for design
                <i>
                  <FiArrowUpRight />
                </i>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Project;
