// src/app/(after ai cam)/complex/menu/beverage/page.tsx
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { dummyComplexBeverage } from "@/data/complex/dummyComplexBeverage"; // 더미 데이터 가져오기

export default function Complex() {
  return (
    <div className={styles.grid}>
      {dummyComplexBeverage.map((item, index) => (
        <Link href={`/complex/item/${item.itemname}`} key={index}>
          {index === 0 || index === 5 ? (
            <div className={`${styles.card} ${styles.large}`}>
              <div className={styles.bigimagewrap}>
                <Image src={item.image} alt={item.name} width={300} height={300} className={styles.bigimage} />
              </div>
              <div className={styles.biginfo}>
                <div className={styles.biginfoname}>{item.name}</div>
                <div className={styles.biginfoprice}>{item.price.toLocaleString()}원</div>
              </div>
            </div>
          ) : (
            <div className={styles.card}>
              <div className={styles.imagewrap}>
                <Image src={item.image} alt={item.name} width={300} height={300} className={styles.image} />
              </div>
              <div className={styles.info}>
                <div className={styles.infoname}>{item.name}</div>
                <div className={styles.infoprice}>{item.price.toLocaleString()}원</div>
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
