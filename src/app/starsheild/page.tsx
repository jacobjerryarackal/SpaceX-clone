import React from "react";
import styles from "../starsheild/starsheild.module.css";

function Starsheild() {
  return (
    <>
      <section className={styles.starshield}>
        <div className={styles.section_inner1}>
          <h1>STARSHIELD</h1>
          <h4>SUPPORTING NATIONAL SECURITY</h4>
        </div>
      </section>

      <section className={styles.section_b}>
        <div className={styles.section_inner3}>
          <h1>Starshield</h1>
          <p>
            Starlink already offers unparalleled end-to-end user data
            encryption. Starshield uses additional high-assurance cryptographic
            capability to host classified payloads and process data securely,
            meeting the most demanding government requirements.
          </p>
        </div>
      </section>

      <section className={styles.section_c}>
        <div className={styles.section_inner3}>
          <h1>MODULAR DESIGN</h1>
          <p>
            Designed to meet diverse mission requirements, Starshield satellites
            are capable of integrating a wide variety of payloads, offering
            unique versatility to users.
          </p>
        </div>
      </section>

      <section className={styles.section_d}>
        <div className={styles.section_inner2}>
          <h1>INTEROPERABILITY</h1>
          <p>
            Starlink's inter-satellite laser communications terminal, which is
            the only communications laser operating at scale in orbit today, can
            be integrated onto partner satellites to enable incorporation into
            the Starshield network.
          </p>
        </div>
      </section>

      <section className={styles.section_e}>
        <div className={styles.section_inner2}>
          <h1>RAPID DEVELOPMENT AND DEPLOYMENT</h1>
          <p>
            With the proven ability to iterate rapidly, SpaceX’s unique
            full-stack approach in developing end-to-end systems, from launch
            vehicles to user terminals, enables the deployment of capabilities
            at scale with unprecedented speed.
          </p>
        </div>
      </section>

      <section className={styles.section_f}>
        <div className={styles.section_inner2}>
          <h1>RESILIENT AND SCALABLE CAPABILITY</h1>
          <p>
            Starshield's proliferated low-Earth orbit architecture provides
            inherent resiliency and constant connectivity to on-orbit assets,
            while SpaceX's proven rapid launch capability provides expedient and
            economical access to space.
          </p>
        </div>
      </section>

      <section className={styles.section_g}>
        <div className={styles.section_inner3}>
          <h1>PROVEN PARTNERSHIPS</h1>
          <p>
            SpaceX's ongoing work with the Department of Defense and other
            partners demonstrates our ability to provide in-space and on-ground
            capability at scale.
          </p>
        </div>
      </section>
    </>
  );
}

export default Starsheild;
