"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import receipt from "@/../public/receipt.svg"

export default function Complex() {

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        router.push('/simple/menu/recommend'); // 이동하고자 하는 페이지 경로
      }, 2000); // 2초 후에 이동
      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    }
  }, [router]);

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
