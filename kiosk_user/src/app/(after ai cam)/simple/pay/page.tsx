// src/app/(after ai cam)/simple/pay/pages.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import useCartStore from "@/store/cartStore";

import card from "@/../public/Credit Card.svg";
import kakaopay from "@/../public/kakaopay.svg";

export default function Complex() {
  const items = useCartStore((state: any) => state.items);

  const totalPrice = items.reduce((total: number, item: any) => total + item.price, 0);
  const discount = 0;
  const finalPrice = totalPrice - discount;

  return (
    <div className={styles.container}>
      <div className={styles.header}>결제하기</div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>결제수단</div>
        <div className={styles.paymentMethods}>
          <div className={styles.method}>
            <Image src={card} alt="cardlogo" className={styles.cardsvg}></Image>
            <div>신용카드</div>
          </div>
          <div className={styles.kakaopay}>
            <Image src={kakaopay} alt="kakaopaylogo" className={styles.cardsvg}></Image>
            <div>카카오페이</div>
          </div>
        </div>
        <div className={styles.sectionTitle}>적립 및 할인</div>
        <div className={styles.discountOptions}>
          <div className={styles.discount}>회원<br />적립</div>
          <div className={styles.discount}>적립금<br />사용</div>
          <div className={`${styles.discount} ${styles.brown}`}>제휴<br />할인</div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.total}>
          <div>총 주문금액</div>
          <div>{totalPrice.toLocaleString()}원</div>
        </div>
        <div className={styles.total}>
          <div>할인금액</div>
          <div>{discount.toLocaleString()}원</div>
        </div>
        <div className={styles.total}>
          <div>최종결제금액</div>
          <div>{finalPrice.toLocaleString()}원</div>
        </div>
      </div>

      <div className={styles.finalAmount}>
        <Link href="/simple/cart" className={styles.cancel}>취소</Link>
        <Link href="/simple/pay/creditcard" className={styles.amount}>{finalPrice.toLocaleString()}원 결제하기</Link>
      </div>
    </div>
  );
}
