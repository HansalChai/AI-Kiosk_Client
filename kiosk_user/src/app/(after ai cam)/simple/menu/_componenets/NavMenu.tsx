"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import styles from "./navMenu.module.css"
import Link from "next/link"
import Image from "next/image"

import star from "@/../public/star.png"

export default function NavMenu() {

    const segment = useSelectedLayoutSegment();
    console.log(segment);

    return(
        <div className={styles.navigation}>
            
          <Link href="/simple/menu/recommend" className={styles.navButton}>
            { segment === 'recommend' ?
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M45.2449 19.6353C46.7416 15.0288 53.2587 15.0288 54.7555 19.6353L60.1033 36.0943C60.7727 38.1544 62.6925 39.5492 64.8586 39.5492H82.1646C87.0082 39.5492 89.0221 45.7473 85.1035 48.5943L71.1027 58.7665C69.3502 60.0397 68.6169 62.2966 69.2863 64.3567L74.6342 80.8157C76.1309 85.4222 70.8585 89.2529 66.9399 86.4058L52.9391 76.2336C51.1867 74.9604 48.8137 74.9604 47.0612 76.2336L33.0604 86.4058C29.1418 89.2529 23.8694 85.4222 25.3662 80.8157L30.714 64.3567C31.3834 62.2966 30.6501 60.0397 28.8977 58.7665L14.8968 48.5943C10.9783 45.7473 12.9921 39.5492 17.8358 39.5492H35.1418C37.3079 39.5492 39.2277 38.1544 39.897 36.0943L45.2449 19.6353Z" fill="#4F7E68"/>
                    </svg>
                    <div style={{color: '#4F7E68'}}>추천</div>
                </>
                :
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M45.2449 19.6353C46.7416 15.0288 53.2587 15.0288 54.7555 19.6353L60.1033 36.0943C60.7727 38.1544 62.6925 39.5492 64.8586 39.5492H82.1646C87.0082 39.5492 89.0221 45.7473 85.1035 48.5943L71.1027 58.7665C69.3502 60.0397 68.6169 62.2966 69.2863 64.3567L74.6342 80.8157C76.1309 85.4222 70.8585 89.2529 66.9399 86.4058L52.9391 76.2336C51.1867 74.9604 48.8137 74.9604 47.0612 76.2336L33.0604 86.4058C29.1418 89.2529 23.8694 85.4222 25.3662 80.8157L30.714 64.3567C31.3834 62.2966 30.6501 60.0397 28.8977 58.7665L14.8968 48.5943C10.9783 45.7473 12.9921 39.5492 17.8358 39.5492H35.1418C37.3079 39.5492 39.2277 38.1544 39.897 36.0943L45.2449 19.6353Z" fill="#504C45"/>
                    </svg>
                    <div>추천</div>
                </>
            }
          </Link>
          
          <Link href="/simple/menu/cafe" className={styles.navButton}>
            { segment === 'cafe' ?
                <div style={{color: '#4F7E68'}}>커피</div>
                :
                <div>커피</div>
            }
          </Link>

          <Link href="/simple/menu/beverage" className={styles.navButton}>
            { segment === 'beverage' ?
                <div style={{color: '#4F7E68'}}>음료</div>
                :
                <div>음료</div>
            }
          </Link>

          <Link href="/simple/menu/bread" className={styles.navButton}>
            { segment === 'bread' ?
                <div style={{color: '#4F7E68'}}>빵</div>
                :
                <div>빵</div>
            }
          </Link>

          </div>
    )
}