import Image from "next/image";
import styles from "./page.module.css";
import LOGO_1 from "../../public/LOGO_1.svg";
import Link from "next/link";
import './globals.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={LOGO_1} alt="logo" width={300} height={300}/>
      <Link href="/home" className={styles.startbutton}>
          Please click here to start our service!
      </Link>
    </main>
  );
}
