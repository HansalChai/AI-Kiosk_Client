// src/app/(after ai cam)/complex/pay/complete/page.tsx
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Image from "next/image";
import styles from "./page.module.css";

import receipt from "@/../public/receipt.svg"
import useCartStore from '@/store/cartStore';

export default function Complex() {
  const router = useRouter();
  const clearItems = useCartStore((state) => state.clearItems)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        clearItems(); // 장바구니 비우기
        router.push('/home'); // 이동하고자 하는 페이지 경로
      }, 4000); // 4초 후에 이동
      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    }
  }, [router, clearItems]); // 의존성

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
