import React from "react";
import styles from "../falcon-heavy/falcon-heavy.module.css";
import Link from "next/link";

function FalonHeavy() {
  return (
    <>
      <section className={styles.falconheavy}>
        <div className={styles.section_inner1}>
          <h1>Falcon Heavy</h1>
          <h4>OVER 5 MILLION LBS OF THRUST</h4>
        </div>
      </section>

      <section className={styles.threed}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/heavy.mp4" type="video/mp4" />
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
          <source src="/heavy2.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner}>
          <h4>Video</h4>
          <h2>FALCON HEAVY FIRST FLIGHT</h2>
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
              <h5>PROPELLANT</h5>
              <h5>
                LOX /<span> RP-1</span>
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
              <h5>THRUST</h5>
              <h5>
                845 kN /<span>190,000 lbf</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
          </div>
        </div>
      </section>

      <section className={styles.section_d}>
        <video autoPlay muted loop className={styles.video1}>
          <source src="/heavy3.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner3}>
          <h1>UNMATCHED PERFORMANCE</h1>
          <p>
            With more than 5 million pounds of thrust at liftoff, Falcon Heavy
            is one of the most capable rockets flying. By comparison, the
            liftoff thrust of the Falcon Heavy equals approximately eighteen 747
            aircraft at full power. Falcon Heavy can lift the equivalent of a
            fully loaded 737 jetliner—complete with passengers, luggage and
            fuel—to orbit.
          </p>
        </div>
      </section>

      <section className={styles.section_c}></section>
    </>
  );
}

export default FalonHeavy;
