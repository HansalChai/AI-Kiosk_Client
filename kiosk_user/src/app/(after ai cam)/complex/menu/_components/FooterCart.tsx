"use client"
import styles from './footerCart.module.css';
import useCartStore from '@/store/cartStore';

export default function FooterCart() {
  const items = useCartStore((state) => state.items);

  // 총 수량과 합계 금액 계산
  const totalQuantity = items.length;
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div className={styles.quantity}>
        수량 {totalQuantity}개
      </div>
      <div className={styles.total}>
        합계 {totalPrice.toLocaleString()}원
      </div>
    </>
  );
}
