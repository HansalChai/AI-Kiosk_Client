import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import receipt from "@/../public/receipt.svg"

export default function Complex() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>주문이 완료되었습니다</div>
      <div className={styles.order}>주문번호</div>
      <div className={styles.orderNum}>618</div>
      <div className={styles.recieptment}>신용카드를 뽑은 후 출력된 영수증을 받아 가세요</div>
      <Image src={receipt} alt="receipt img" className={styles.cardsvg}></Image>
    </div>
  );
}
