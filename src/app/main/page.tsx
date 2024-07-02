
import Link from 'next/link'
import styles from "../main/main.module.css"

function Main() {
  return (
    <>
    <section className={styles.section_main}>
            <div className={styles.section_inner}>
                <h4>Upcoming Launch</h4>
                <h2>Starlink Mission</h2>
                <Link href="#" className={styles.btn}>
                    <div className={styles.hover}></div>
                    <span>Watch</span>
                </Link>
            </div>
      </section>
      <section className={styles.section_a}>
            <div className={styles.section_inner}>
                <h4>Recent Launch</h4>
                <h2>GOES-U Mission</h2>
                <Link href="#" className={styles.btn}>
                    <div className={styles.hover}></div>
                    <span>Learn More</span>
                </Link>
            </div>
      </section>
      <section className={styles.section_b}>
            <div className={styles.section_inner}>
                <h4>Recent Launch</h4>
                <h2>Starlink Mission</h2>
                <Link href="#" className={styles.btn}>
                    <div className={styles.hover}></div>
                    <span>Rewatch</span>
                </Link>
            </div>
      </section>
      <section className={styles.section_c}>
            <video autoPlay muted loop className={styles.video}>
              <source src="/section-c.mp4" type="video/mp4" />
            </video>
            <div className={styles.section_inner}>
                <h4>Recent Launch</h4>
                <h2>STARSHIP'S FOURTH
                FLIGHT TEST
                </h2>
                <Link href="#" className={styles.btn}>
                    <div className={styles.hover}></div>
                    <span>Learn More</span>
                </Link>
            </div>
      </section>
      <section className={styles.section_d}>
            <div className={styles.section_inner}>
                <h2>ADVANCING HUMAN
                SPACEFLIGHT</h2>
                <Link href="#" className={styles.btn}>
                    <div className={styles.hover}></div>
                    <span>Learn More</span>
                </Link>
            </div>
      </section>
      <section className={styles.section_e}>
            <div className={styles.section_inner}>
                <h2>TO MAKE LIFE
                MULTIPLANETARY</h2>
                <Link href="#" className={styles.btn}>
                    <div className={styles.hover}></div>
                    <span>Learn More</span>
                </Link>
            </div>
      </section>
    </>
  )
}

export default Main