import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import goback from "@/../public/goback.svg";
import homeIcon from "@/../public/home-icon.png"
import logo from "@/../public/logo.png"
import star from "@/../public/star.png"

export default function Simple() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/simple/menu/recommend">
          <Image src={goback} alt="뒤로가기" className={styles.goback}/> 
        </Link>
        <div className={styles.header}>
        <div className={styles.menuName}>아메리카노</div>
        <div className={styles.menuExplanation}>(쓴 커피)</div>
      </div>
      <div className={styles.option}>
        <div className={styles.optionChoice}>
          <input className={styles.optionChoiceButton} type="radio" name="option-choice" id="option-choice1-1" />
          <label className={styles.optionChoice}>차가운 거</label>
        </div>
        <div className={styles.optionChoice}>
          <input className={styles.optionChoiceButton} type="radio" name="option-choice" id="option-choice1-2"/>
          <label className={styles.optionChoice}>뜨거운 거</label>
        </div>
      </div>
      <div className={styles.option}>
        <div className={styles.optionChoice}>
          <input className={styles.optionChoiceButton} type="radio" name="option-choice2" id="option-choice2-1"/>
          <label className={styles.optionChoice}>보통</label>
        </div>
        <div className={styles.optionChoice}>
          <input className={styles.optionChoiceButton} type="radio" name="option-choice2" id="option-choice2-2"/>
          <label className={styles.optionChoice}>큰 거 (+500원)</label>
        </div>
      </div>
      <div className={styles.option}>
        <div className={styles.optionChoice}>
          <input className={styles.optionChoiceButton} type="radio" name="option-choice3" id="option-choice3-1"/>
          <label className={styles.optionChoice}>연하게</label>
        </div>
        <div className={styles.optionChoice}>
          <input className={styles.optionChoiceButton} type="radio" name="option-choice3" id="option-choice3-2"/>
          <label className={styles.optionChoice}>그대로</label>
        </div>
      </div>
      <Link href="/simple/cart" className={styles.footer} >메뉴 담기</Link>
    </div>
    </main>
  );
}
