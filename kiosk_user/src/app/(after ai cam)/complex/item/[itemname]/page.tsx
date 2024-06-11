// src/app/(after ai cam)/complex/item/[itemname]/page.tsx
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import useCartStore from "@/store/cartStore";
import { dummyItems } from "@/data/dummyItems"; // 더미 데이터 가져오기

interface SelectedOptions {
  [key: string]: string;
}

interface AdditionalPrice {
  [key: string]: number;
}

export default function Complex() {
  const { itemname } = useParams<{ itemname: string }>(); // URL에서 itemname 가져오기
  const item = dummyItems.find((item) => item.itemname === itemname); // 해당 아이템 찾기

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
    if (!item) return; // 아이템이 없는 경우 함수 종료
    const totalAdditionalPrice = Object.values(additionalPrice).reduce((acc, curr) => acc + curr, 0);
    addItem({
      name: item.name,
      options: Object.entries(selectedOptions).map(([key, value]) => `${key}: ${value}`),
      price: item.price + totalAdditionalPrice,
    });
  };

  if (!item) {
    return <div>Item not found</div>; // 아이템이 없을 경우 메시지 표시
  }

  return (
    <div className={styles.container}>
      <Link href='/complex/menu/recommend'>
        <div className={styles.closeButton}>×</div>
      </Link>
      <div className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.description}>{item.description}</div>
        {item.options.map((option, index) => (
          <div className={styles.radioGroup} key={index}>
            <div className={styles.radioLabel}>{option.label}</div>
            <div className={styles.radioButtons}>
              {option.values.map((value, idx) => (
                <label className={styles.radioButton} key={idx}>
                  <input
                    type="radio"
                    name={option.label}
                    value={value}
                    checked={selectedOptions[option.label] === value}
                    onChange={() => handleOptionChange(option.label, value, option.price[idx])}
                  /> {value}
                </label>
              ))}
            </div>
            <div className={styles.extraCharge}>
              {selectedOptions[option.label] === option.values[1] ? `+${option.price[1]}` : `${option.price[0]}`}
            </div>
          </div>
        ))}
        <Link href="/complex/cart">
          <div className={styles.orderButton} onClick={handleAddToCart}>추가하기</div>
        </Link>
      </div>
    </div>
  );
}
