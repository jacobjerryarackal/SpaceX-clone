import React from "react";
import styles from "../falcon9/falcon9.module.css";
import Link from "next/link";

function Falcon9() {
  return (
    <>
      <section className={styles.falcon9}>
        <div className={styles.section_inner1}>
          <h1>Falcon 9</h1>
          <h4>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</h4>
        </div>
      </section>

      <section className={styles.threed}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/falcon9b.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner2}>
          <h2>Falcon 9 Overview</h2>
          <div>
            <div className={styles.info}>
              <h5>Height</h5>
              <h5>
                121 m /<span> 397 ft</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>DIAMETER</h5>
              <h5>
                9 m /<span> 29.5 f</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>MASS</h5>
              <h5>
                549,054 kg<span> 1,207,920 lb</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>PAYLOAD TO LEO</h5>
              <h5>
                22,800 kg<span> 50,265 lb</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>PAYLOAD TO GTO</h5>
              <h5>
                8,300 kg /<span>18,300 lb</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>

            <div className={styles.info}>
              <h5>PAYLOAD TO MARS</h5>
              <h5>
                4,020 kg /<span>8,860 lb</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
          </div>
        </div>
      </section>

      <section className={styles.section_b}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/falcon9.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner}>
          <h4>Video</h4>
          <h2>FALCON 9 IN FLIGHT</h2>
          <Link href="#" className={styles.btn}>
            <div className={styles.hover}></div>
            <span>Learn More</span>
          </Link>
        </div>
      </section>

      <section className={styles.threed1}>
        <div className={styles.section_inner2}>
          <h2>Engines Merlin</h2>
          <p>
            Merlin is a family of rocket engines developed by SpaceX for use on
            its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin
            engines use a rocket grade kerosene (RP-1) and liquid oxygen as
            rocket propellants in a gas-generator power cycle. The Merlin engine
            was originally designed for recovery and reuse.
          </p>
          <div>
            <div className={styles.info}>
              <h5>Height</h5>
              <h5>
                121 m /<span> 397 ft</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>DIAMETER</h5>
              <h5>
                9 m /<span> 29.5 f</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>PAYLOAD CAPACITY</h5>
              <h5>
                100 – 150 t<span>(fully reusable)</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
          </div>
        </div>
      </section>

      <section className={styles.section_c}>
        <div className={styles.section_inner}>
          <h2>Falcon F9 Launch</h2>
          <Link href="#" className={styles.btn}>
            <div className={styles.hover}></div>
            <span>Learn More</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Falcon9;
