import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Complex() {
  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <span>주문리스트</span>를 <br/>확인해 주세요
      </div>

      <div className={styles.main}>
        <div className={styles.item}>
          <button className={styles.closeButton}>×</button>
          <div className={styles.itemDetails}>
            <div>(ICE) 아메리카노</div>  
            <div className={styles.itemDetails2}>사이즈 L +500</div>
            <div className={styles.itemDetails2}>에스프레소 샷 1샷 -200</div>
            <div className={styles.itemDetails2}>얼음양 보통</div>
          </div>
          <div className={styles.itemControls}>
            <button>-</button>
            <span>3</span>
            <button>+</button>
          </div>
          <div className={styles.price}>9,900</div>
        </div>
        
        <div className={styles.item}>
          <button className={styles.closeButton}>×</button>
          <div className={styles.itemDetails}>
            <div>생크림 과일 조각 케이크</div>
          </div>
          <div className={styles.itemControls}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className={styles.price}>4,700</div>
        </div>

        <div className={styles.item}>
          <button className={styles.closeButton}>×</button>
          <div className={styles.itemDetails}>
            <div>카라멜 마끼아또</div>
          </div>
          <div className={styles.itemControls}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className={styles.price}>3,800</div>
        </div>

        <div className={styles.orderSummary}>
          <div>총 수량: 5</div>
          <div>주문금액: 18,400</div>
        </div>

        <div className={styles.orderActions}>
          <Link href="/simple/menu/recommend">추가 주문 하기</Link>
          <Link href="/simple/pay" className={styles.primary}>결제 하기</Link>
        </div>
      </div>
    </div>
  );
}
