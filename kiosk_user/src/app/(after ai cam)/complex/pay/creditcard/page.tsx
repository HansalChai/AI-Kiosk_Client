"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import cardinsert from "@/../public/cardinsert.svg"

export default function Complex() {

  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push('/complex/pay/complete'); // 이동하고자 하는 페이지 경로
  //   }, 3000); // 3초 후에 이동
  //   return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
  // }, [router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        router.push('/complex/pay/complete'); // 이동하고자 하는 페이지 경로
      }, 2000); // 2초 후에 이동
      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.header}><span>신용카드</span>를 <br/>투입구에 꽂아 주세요</div>
      <div className={styles.section}>
        <div className={styles.errorment}>결제 오류시 마그네틱을 아래로 향하게 긁어주세요</div>
        <Image src={cardinsert} alt="cardlogo" className={styles.cardsvg}></Image>
        <div className={styles.total}>
            <div>총 결제금액</div>
            <div><span>16,900</span> 원</div>
        </div>
        <Link href="/complex/pay" className={styles.cancel}>결제 취소</Link>
      </div>
    </div>
  );
}
