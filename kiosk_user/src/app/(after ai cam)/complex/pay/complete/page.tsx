import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import card from "@/../public/Credit Card.svg"
import kakaopay from "@/../public/kakaopay.svg"

export default function Complex() {
  return (
    <div className={styles.container}>
      신용카드결제페이지
    </div>
  );
}
