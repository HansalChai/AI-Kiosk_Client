/* src/app/(after ai cam)/complex/menu/layout.tsx */

import { ReactNode } from "react";
import styles from "./layout.module.css";
import Image from "next/image";
import goback from "@/../public/goback.svg";
import Link from "next/link";


export default async function ComplexMenuLayout({children} : {children : ReactNode}){

  return(
    <div className={styles.container}>

      <div className={styles.header}>
        <Link href="/home">
          <Image src={goback} alt="뒤로가기" className={styles.goback}/> 
        </Link>
        <div className={styles.nav}>
          <Link href="/complex/menu/recommend" className={styles.lk}>추천</Link>
          <Link href="/complex/menu/cafe" className={styles.lk}>카페</Link>
          <Link href="/complex/menu/beverage" className={styles.lk}>음료</Link>
          <Link href="/complex/menu/tea" className={styles.lk}>차</Link>
          <Link href="/complex/menu/bread" className={styles.lk}>브레드</Link>
          <Link href="/complex/menu/cake" className={styles.lk}>케이크</Link>
        </div>
      </div>
      
      <div className={styles.maincontent}>
        {children}
      </div>
      
      <div className={styles.footer}>
        <div className={styles.quantity}>
          <div>수량</div>
          <div>6개</div>
        </div>
        <div className={styles.total}>
          <div>합계</div>
          <div>45,000원</div>
        </div>
        <div className={styles.paybutton}>결제</div>
      </div>
    
    </div>
  )
}