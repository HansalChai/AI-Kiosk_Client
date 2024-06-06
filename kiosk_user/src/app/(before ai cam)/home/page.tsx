import Image from "next/image";
import styles from "@/app/page.module.css";
import dineInIcon from "@/../public/eatin.svg";
import takeOutIcon from "@/../public/togo.svg";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Link href="/simple" className={styles.option} id={styles.dineIn}>
        <div className={styles.icon}>
          <Image src={dineInIcon} alt="매장에서 먹고가기" className={styles.homeicon}/>
        </div>
        <div className={styles.text1}>매장에서</div>
        <div className={styles.text1}>먹고가기</div>
      </Link>
      
      <Link href="/complex" className={styles.option} id={styles.takeOut}>
        <div className={styles.icon}>
          <Image src={takeOutIcon} alt="포장하기" className={styles.homeicon}/>
        </div>
        <div className={styles.text2}>포장하기</div>
      </Link>
    
    </div>
  );
}
