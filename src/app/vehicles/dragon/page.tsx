import React from "react";
import styles from "../dragon/dragon.module.css";
import Link from "next/link";

function Dragon() {
  return (
    <>
      <section className={styles.dragon}>
        <div className={styles.section_inner1}>
          <h1>Dragon</h1>
          <h4>SENDING HUMANS AND CARGO INTO SPACE</h4>
        </div>
      </section>

      <section className={styles.threed}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/dragon.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner2}>
          <h2>Dragon Overview</h2>
          <div>
            <div className={styles.info}>
              <h5>Height</h5>
              <h5>
                8.1 m /<span> 26.7 ft</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>DIAMETER</h5>
              <h5>
                4 m /<span> 13 ft</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>SPACECRAFT VOLUME</h5>
              <h5>
                9.3 m³<span> 328 ft³</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>TRUNK VOLUME</h5>
              <h5>
                37 m³<span> 1300 ft³</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
            <div className={styles.info}>
              <h5>LAUNCH PAYLOAD MASS</h5>
              <h5>
                6,000 kg /<span>13,228 lbsb</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>

            <div className={styles.info}>
              <h5>RETURN PAYLOAD MASS</h5>
              <h5>
                3,000 kg /<span>6,614 lbs</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
          </div>
        </div>
      </section>

      <section className={styles.section_b}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/dragon2.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner}>
          <h4>Video</h4>
          <h2>CREW DRAGON INTERIOR</h2>
          <Link href="#" className={styles.btn}>
            <div className={styles.hover}></div>
            <span>Learn More</span>
          </Link>
        </div>
      </section>

      <section className={styles.section_c}>
        <div className={styles.section_inner3}>
          <h1>TAKING HUMANS TO SPACE</h1>
          <p>
            In 2020, SpaceX returned America’s ability to fly NASA astronauts to
            and from the International Space Station on American vehicles for
            the first time since 2011. In addition to flying astronauts to space
            for NASA, SpaceX’s Dragon spacecraft can also carry commercial
            astronauts to Earth orbit, the ISS or beyond.
          </p>
          
        </div>
      </section>

      <section className={styles.threed1}>
        <div className={styles.section_inner2}>
          <h2>Engines Draco</h2>
          <p>
          The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.
          </p>
          <div>
            <div className={styles.info}>
              <h5>NUMBER OF ENGINES</h5>
              <h5>
                16
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
              <h5>THRUST IN VACUUM</h5>
              <h5>
              400 N /<span>90 lbf</span>
              </h5>
            </div>
            <hr className={styles.new1}></hr>
          </div>
        </div>
      </section>


      <section className={styles.section_d}>
        <video autoPlay muted loop className={styles.video1}>
          <source src="/dragon3.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner4}>
          <h1>DRAGON PARACHUTE SYSTEM</h1>
          <p>
          The Dragon spacecraft is equipped with two drogue parachutes to stabilize the spacecraft following reentry and four main parachutes to further decelerate the spacecraft prior to landing.
          </p>
        </div>
      </section>

      <section className={styles.section_e}>

      </section>
    </>
  );
}

export default Dragon;
