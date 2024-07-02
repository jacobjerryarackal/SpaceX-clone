import React from "react";
import styles from "../starship/starship.module.css";
import Link from "next/link";

function Starship() {
  return (
    <>
      <section className={styles.starship}>
        <div className={styles.section_inner1}>
          <h1>Starship</h1>
          <h4>SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND</h4>
        </div>
      </section>

      <section className={styles.threed}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/starship3.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner2}>
          <h2>Starship Overview</h2>
          <p>
            SpaceX’s Starship spacecraft and Super Heavy rocket – collectively
            referred to as Starship – represent a fully reusable transportation
            system designed to carry both crew and cargo to Earth orbit, the
            Moon, Mars and beyond. Starship is the world’s most powerful launch
            vehicle ever developed, capable of carrying up to 150 metric tonnes
            fully reusable and 250 metric tonnes expendable.
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

      <section className={styles.section_b}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/starship.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner}>
          <h2>Starship Overview</h2>
          <Link href="#" className={styles.btn}>
            <div className={styles.hover}></div>
            <span>Learn More</span>
          </Link>
        </div>
      </section>

      <section className={styles.section_c}>
        <div className={styles.section_inner}>
          <h2>Starship Capabilities</h2>
          <p>
            As the most powerful launch system ever developed, Starship will be
            able to carry up to 100 people on long-duration, interplanetary
            flights. Starship will also help enable satellite delivery, the
            development of a Moon base, and point-to-point transport here on
            Earth.
          </p>
        </div>
      </section>

      <section className={styles.section_d}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/starship2.mp4" type="video/mp4" />
        </video>
        <div className={styles.section_inner}>
          <h2>ON-ORBIT REFILLING</h2>
          <p>
            Starship leverages tanker vehicles (essentially the Starship
            spacecraft minus the windows) to refill the Starship spacecraft in
            low-Earth orbit prior to departing for Mars. Refilling on-orbit
            enables the transport of up to 100 tons all the way to Mars. And if
            the tanker ship has high reuse capability, the primary cost is just
            that of the oxygen and methane, which is extremely low.
          </p>
        </div>
      </section>

      <section className={styles.section_e}>
        <div className={styles.section_inner}>
          <h2>TO MAKE LIFE MULTIPLANETARY</h2>
          <Link href="#" className={styles.btn}>
            <div className={styles.hover}></div>
            <span>Learn More</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Starship;
