/* src/app/(after ai cam)/complex/menu/layout.tsx */

import { ReactNode } from "react";
import styles from "./layout.module.css";
import Image from "next/image";
import goback from "@/../public/goback.svg";
import Link from "next/link";
import NavMenu from "./_components/NavMenu";
import FooterCart from "./_components/FooterCart";


export default async function ComplexMenuLayout({children} : {children : ReactNode}){

  return(
    <div className={styles.container}>

      <div className={styles.header}>
        <Link href="/home" className={styles.homeLink}>
          <Image src={goback} alt="뒤로가기" className={styles.goback}/> 
        </Link>
        <NavMenu/>
      </div>
      
      <div className={styles.maincontent}>
        {children}
      </div>
      
      <div className={styles.footer}>
        <FooterCart/>
        <Link href='/complex/cart' className={styles.paybutton}>
          주문
        </Link>
      </div>
    </div>
  )
}