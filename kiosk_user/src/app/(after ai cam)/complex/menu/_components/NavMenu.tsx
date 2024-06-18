"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import styles from "./navMenu.module.css"
import Link from "next/link"

export default function NavMenu() {

    const segment = useSelectedLayoutSegment();
    // console.log(segment);

    return(
        <div className={styles.nav}>
          
          <Link href="/complex/menu/recommend" className={styles.lk}>
            { segment === 'recommend' ?
                <div style={{color: 'green'}}>추천</div>
                :
                <div>추천</div>
            }
          </Link>
          
          <Link href="/complex/menu/cafe" className={styles.lk}>
            { segment === 'cafe' ?
                <div style={{color: 'green'}}>카페</div>
                :
                <div>카페</div>
            }
          </Link>

          <Link href="/complex/menu/beverage" className={styles.lk}>
            { segment === 'beverage' ?
                <div style={{color: 'green'}}>음료</div>
                :
                <div>음료</div>
            }
          </Link>

          <Link href="/complex/menu/tea" className={styles.lk}>
            { segment === 'tea' ?
                <div style={{color: 'green'}}>차</div>
                :
                <div>차</div>
            }
          </Link>

          <Link href="/complex/menu/bread" className={styles.lk}>
            { segment === 'bread' ?
                <div style={{color: 'green'}}>브레드</div>
                :
                <div>브레드</div>
            }
          </Link>

          <Link href="/complex/menu/cake" className={styles.lk}>
             { segment === 'cake' ?
                <div style={{color: 'green'}}>케이크</div>
                :
                <div>케이크</div>
            }
          </Link>
          
        </div>
    )
}