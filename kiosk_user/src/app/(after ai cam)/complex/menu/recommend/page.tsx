/* src/app/(after ai cam)/complex/menu/recommend/page.tsx */

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import coffee1 from "@/../public/sample/coffee1.svg"
import coffee2 from "@/../public/sample/coffee2.svg"
import coffee3 from "@/../public/sample/coffee3.svg"
import coffee4 from "@/../public/sample/coffee4.svg"
import coffee5 from "@/../public/sample/coffee5.svg"


export default function Complex() {
  return (
    <div className={styles.grid}>
      
      <Link href="/complex/item/americano">
        <div className={`${styles.card} ${styles.large}`}>
          {/* <Image src={coffee1} alt="coffee1" className={styles.bigimage}/> */}
          <div className={`${styles.bigimagewrap} ${styles.bigimagewrap1}`}></div>
          <div className={styles.biginfo}>
            <div className={styles.biginfoname}>아이스 블렌디드 (ICE) 아메리카노</div>
            <div className={styles.biginfoprice}>3500원</div>
          </div>
        </div>
      </Link>

      <div className={styles.card}>
        <div className={styles.imagewrap}></div>
        <div className={styles.info}>
          <div className={styles.infoname}>(ICE) 딸기스무디</div>
          <div className={styles.infoprice}>3500원</div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imagewrap}></div>
        <div className={styles.info}>
          <div className={styles.infoname}>(ICE) 카라멜 마끼아또</div>
          <div className={styles.infoprice}>4300원</div>
        </div>
      </div>
      
      <div className={styles.card}>
        <div className={styles.imagewrap}></div>
        <div className={styles.info}>
          <div className={styles.infoname}>(ICE) 레모네이드</div>
          <div className={styles.infoprice}>4000원</div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imagewrap}></div>
        <div className={styles.info}>
          <div className={styles.infoname}>(ICE) 카페라떼</div>
          <div className={styles.infoprice}>3800원</div>
        </div>
      </div>



      <div className={`${styles.card} ${styles.large}`}>
        {/* <Image src={coffee1} alt="coffee1" className={styles.bigimage}/> */}
        <div className={styles.bigimagewrap}></div>
        <div className={styles.biginfo}>
          <div className={styles.biginfoname}>아이스 블렌디드 (ICE) 아메리카노</div>
          <div className={styles.biginfoprice}>3500원</div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imagewrap}></div>
        <div className={styles.info}>
          <div className={styles.infoname}>(ICE) 딸기스무디</div>
          <div className={styles.infoprice}>3500원</div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imagewrap}></div>
        <div className={styles.info}>
          <div className={styles.infoname}>(ICE) 카라멜 마끼아또</div>
          <div className={styles.infoprice}>4300원</div>
        </div>
      </div>
      
      <div className={styles.card}>
        <div className={styles.imagewrap}></div>
        <div className={styles.info}>
          <div className={styles.infoname}>(ICE) 레모네이드</div>
          <div className={styles.infoprice}>4000원</div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imagewrap}></div>
        <div className={styles.info}>
          <div className={styles.infoname}>(ICE) 카페라떼</div>
          <div className={styles.infoprice}>3800원</div>
        </div>
      </div>

    </div>
  );
}
