// src/app/(after ai cam)/simple/menu/[category]/page.tsx
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { dummySimpleRecommend } from "@/data/simple/dummySimpleRecommend"; // 추천 메뉴 더미 데이터 가져오기
import { dummySimpleCafe } from "@/data/simple/dummySimpleCafe"; // 카페 메뉴 더미 데이터 가져오기
import { dummySimpleBeverage } from "@/data/simple/dummySimpleBeverage"; // 음료 메뉴 더미 데이터 가져오기
import { dummySimpleBread } from "@/data/simple/dummySimpleBread"; // 빵 메뉴 더미 데이터 가져오기

interface DummyItem {
  itemname: string;
  name: string;
  description: string;
  price: number;
  image: string;
  options: {
    label: string;
    values: string[];
    price: number[];
  }[];
}

const dataMap: { [key: string]: DummyItem[] } = {
  recommend: dummySimpleRecommend,
  cafe: dummySimpleCafe,
  beverage: dummySimpleBeverage,
  bread: dummySimpleBread
};

export default function Simple() {
  const { category } = useParams<{ category: string }>();
  const items = dataMap[category] || [];

  return (
    <main className={styles.main}>
      {items.map((item: DummyItem, index: number) => (
        <Link href={`/simple/item/${item.itemname}`} key={index} className={styles.menubox}>
          <div className={styles.menuImage}>
            <Image src={item.image} alt={item.name} className={styles.img} width={300} height={300} />
          </div>
          <div className={styles.menuName}>
            <br/>{item.name}
          </div>
        </Link>
      ))}
    </main>
  );
}
