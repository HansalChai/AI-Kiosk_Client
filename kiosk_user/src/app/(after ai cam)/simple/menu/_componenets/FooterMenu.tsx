// src/app/(after ai cam)/simple/menu/_components/FooterMenu.tsx
"use client"
import styles from './footerMenu.module.css';
import Link from 'next/link';
import useCartStore from '@/store/cartStore';

export default function FooterMenu() {
    const items = useCartStore((state) => state.items);
    const totalCount = items.length;
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className={styles.footer}>
            <div className={styles.summary}>담은 음식</div>
            <div className={styles.summaryCount}>{totalCount}</div>
            <div className={styles.summary}>총 금액</div>
            <div className={styles.summaryPrice}>{totalPrice.toLocaleString()}원</div>              
            <Link href="/simple/cart" className={styles.orderButton}>주문</Link>
        </div>
    )
}
