import React from 'react'
import  styles  from '../footer/footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <section className={styles.section_footer}>
            <div className={styles.section_inner}>
                <h5>All Space X vechiles are launched at Kennady Space Center</h5>
                <div className= {styles.vertical}></div>
                <h6>For information about our launch services, contact <span className={styles.email}>sales@spacex.com</span></h6>
                <Link href="#" className={styles.btn}>
                    <div className={styles.hover}></div>
                    <span>Download User's Guide</span>
                </Link>
                <div>
                  <ul className={styles.itemslist}>
                    <li className={styles.items}>SPACEX © 2024</li>
                    <li className={styles.items}>PRIVACY POLICY</li>
                    <li className={styles.items}>SUPPLIERS</li>
                  </ul>
                </div>
            </div>
      </section>
  )
}

export default Footer