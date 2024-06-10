import { ReactNode } from "react";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

import homeIcon from "@/../public/home-icon.png"
import logo from "@/../public/logo.png"
import star from "@/../public/star.png"


export default async function SimpleLayout({children} : {children : ReactNode}){
  return(
    <div className={styles.main}>
      <div className={styles.container}>
          <div className={styles.header}>
              <div className={styles.homeButton}>
                  <Image src={homeIcon} alt="home"/>
                  <div className={styles.homeButtonText}>처음으로</div>
              </div>
              <div className={styles.logo}>
                  <Image src={logo} alt="logo"/>
              </div>
          </div>
          <div className={styles.navigation}>
              <div className={styles.navButton}>
                <Image src={star} alt="star"/>
                <div>추천</div>
              </div>
              <div className={styles.navButton}>커피</div>
              <div className={styles.navButton}>음료</div>
              <div className={styles.navButton}>빵</div>
          </div>
          
          <div className={styles.mainContent}>
            {children}
          </div>

          <div className={styles.footer}>
              <div className={styles.summary}>담은 음식</div>
              <div className={styles.summaryCount}>2</div>
              <div className={styles.summary}>총 금액</div>
              <div className={styles.summaryPrice}>10,700원</div>              
              <Link href="/simple/cart" className={styles.orderButton}>주문</Link>
          </div>
      </div>
    </div>
  )
}