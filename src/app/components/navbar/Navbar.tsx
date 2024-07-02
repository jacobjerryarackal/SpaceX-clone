"use client"

import styles from "../navbar/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { useSession, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className={styles.itemslist}>
          <Link href="/vehicles/falcon9"><li className={styles.items}>Falcon 9</li></Link>
          <Link href="/vehicles/falcon-heavy"><li className={styles.items}>Falcon Heavy</li></Link>
          <Link href="/vehicles/dragon"><li className={styles.items}>Dragon</li></Link>
          <Link href="/vehicles/starship"><li className={styles.items}>Starship</li></Link>
          <li className={styles.items}>Human Spaceflight</li>
          <Link href="/starsheild"><li className={styles.items}>Starsheild</li></Link>
          <li className={styles.items}>Starlink</li>
        </ul>
      </div>
      <div>   
        <ul className={styles.itemslist}>
          <li className={styles.items}>Shop</li>
          {session ? (
            <li className={styles.items} onClick={() => signOut()}>Logout</li>
          ) : (
            <Link href="/register"><li className={styles.items}>Register</li></Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
