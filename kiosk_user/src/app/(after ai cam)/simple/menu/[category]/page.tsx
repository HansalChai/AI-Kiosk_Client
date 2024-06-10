import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


import homeIcon from "@/../public/home-icon.png"
import logo from "@/../public/logo.png"
import star from "@/../public/star.png"

export default function Simple() {
  return (
    <main className={styles.main}>

      <Link href="/simple/item/americano" className={styles.menubox}>
        <div className={styles.menuImage}></div>
        <div className={styles.menuName}>
            아메리카노<br/>
            (쓴 커피)
        </div>
      </Link>
      
      <div className={styles.menubox}></div>
      <div className={styles.menubox}></div>
      <div className={styles.menubox}></div>
      <div className={styles.menubox}></div>
      <div className={styles.menubox}></div>
      <div className={styles.menubox}></div>
      <div className={styles.menubox}></div>
    </main>
  );
}
