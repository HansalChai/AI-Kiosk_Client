import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Complex() {
  return (
    <div className={styles.container}>
      <Link href='/complex/menu/recommend'>
        <div className={styles.closeButton}>×</div>
      </Link>
      <div className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.title}>(ICE) 아이스 블렌디드 아메리카노</div>
        <div className={styles.description}>
           진한 에스프레소에 시원한 정수물과 얼음을 더하여 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피        </div>
        <div className={styles.options}>
          <div className={`${styles.option} ${styles.selected}`}>ICED</div>
          <div className={styles.option}>HOT</div>
        </div>
        <div className={styles.radioGroup}>
          <div className={styles.radioLabel}>사이즈</div>
          <div className={styles.radioButtons}>
            <label className={styles.radioButton}>
              <input type="radio" name="size" value="yes" /> M
            </label>
            <label className={styles.radioButton}>
              <input type="radio" name="size" value="no" /> L
            </label>
            <span>+500</span>
          </div>
        </div>
        <div className={styles.radioGroup}>
          <div className={styles.radioLabel}>에스프레소 샷</div>
          <div className={styles.radioButtons}>
            <label className={styles.radioButton}>
              <input type="radio" name="shot" value="1" /> 1샷
            </label>
            <label className={styles.radioButton}>
              <input type="radio" name="shot" value="2" /> 2샷
            </label>
            <span>-200</span>
          </div>
        </div>
        <div className={styles.radioGroup}>
          <div className={styles.radioLabel}>얼음 양</div>
          <div className={styles.radioButtons}>
            <label className={styles.radioButton}>
              <input type="radio" name="ice" value="normal" /> 보통
            </label>
            <label className={styles.radioButton}>
              <input type="radio" name="ice" value="extra" /> 많이
            </label>
            <span>+0</span>
          </div>
        </div>
        <Link href="/complex/cart">
          <div className={styles.orderButton}>추가하기</div>
        </Link>
      </div>
    </div>
  );
}
