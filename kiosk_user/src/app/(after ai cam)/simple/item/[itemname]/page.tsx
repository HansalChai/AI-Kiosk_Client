// src/app/(after ai cam)/simple/item/[itemname]/page.tsx

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import useCartStore from "@/store/cartStore";
import { dummyItems } from "@/data/dummyItems";
import goback from "@/../public/goback.svg";

interface SelectedOptions {
  [key: string]: string;
}

interface AdditionalPrice {
  [key: string]: number;
}

export default function Simple() {
  const { itemname } = useParams<{ itemname: string }>();
  const item = dummyItems.find((item) => item.itemname === itemname);

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [additionalPrice, setAdditionalPrice] = useState<AdditionalPrice>({});
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (item) {
      const defaultOptions: SelectedOptions = {};
      const defaultPrices: AdditionalPrice = {};
      item.options.forEach((option) => {
        defaultOptions[option.label] = option.values[0];
        defaultPrices[option.label] = option.price[0];
      });
      setSelectedOptions(defaultOptions);
      setAdditionalPrice(defaultPrices);
    }
  }, [item]);

  const handleOptionChange = (optionType: string, value: string, price: number) => {
    setSelectedOptions({ ...selectedOptions, [optionType]: value });
    setAdditionalPrice({ ...additionalPrice, [optionType]: price });
  };

  const handleAddToCart = () => {
    if (!item) return;
    const totalAdditionalPrice = Object.values(additionalPrice).reduce((acc, curr) => acc + curr, 0);
    addItem({
      name: item.name,
      options: Object.entries(selectedOptions).map(([key, value]) => `${key}: ${value}`),
      price: item.price + totalAdditionalPrice,
    });
  };

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/simple/menu/recommend" className={styles.gobackLink}>
          <Image src={goback} alt="뒤로가기" className={styles.goback}/> 
        </Link>
        <div className={styles.header}>
          <div className={styles.menuName}>{item.name}</div>
        </div>
        {item.options.map((option, index) => (
          <div className={styles.option} key={index}>
            {option.values.map((value, idx) => (
              <div className={styles.optionChoice} key={idx}>
                <input
                  className={styles.optionChoiceButton}
                  type="radio"
                  name={option.label}
                  value={value}
                  checked={selectedOptions[option.label] === value}
                  onChange={() => handleOptionChange(option.label, value, option.price[idx])}
                />
                <label className={styles.optionChoice}>{value} {option.price[idx] > 0 ? `(+${option.price[idx]}원)` : ''}</label>
              </div>
            ))}
          </div>
        ))}
        <div className={styles.footer}>
          <Link href="/simple/cart" onClick={handleAddToCart}>메뉴 담기</Link>
        </div>
      </div>
    </main>
  );
}
