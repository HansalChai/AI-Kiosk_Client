// src/app/(after ai cam)/complex/item/[itemname]/page.tsx
//[itemname] ex) americano, latte, abcjuice
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import useCartStore from "@/store/cartStore";

export default function Complex() {
  const [selectedOptions, setSelectedOptions] = useState({ size: "", shot: "", ice: "" });
  const [additionalPrice, setAdditionalPrice] = useState({ size: 0, shot: 0, ice: 0 });
  const addItem = useCartStore((state) => state.addItem);

  // 기본값 설정 함수 추가
  const setDefaultOptions = () => {
    if (!selectedOptions.size) {
      setSelectedOptions((prev) => ({ ...prev, size: "M" }));
      setAdditionalPrice((prev) => ({ ...prev, size: 500 }));
    }
    if (!selectedOptions.shot) {
      setSelectedOptions((prev) => ({ ...prev, shot: "2샷" }));
      setAdditionalPrice((prev) => ({ ...prev, shot: 0 }));
    }
    if (!selectedOptions.ice) {
      setSelectedOptions((prev) => ({ ...prev, ice: "많이" }));
      setAdditionalPrice((prev) => ({ ...prev, ice: 0 }));
    }
  };

  useEffect(() => {
    setDefaultOptions(); // 컴포넌트가 렌더링될 때 기본값 설정
  }, []);

  const handleOptionChange = (optionType: string, value: string, price: number) => {
    setSelectedOptions({ ...selectedOptions, [optionType]: value });
    setAdditionalPrice({ ...additionalPrice, [optionType]: price });
  };

  const handleAddToCart = () => {
    const totalAdditionalPrice = Object.values(additionalPrice).reduce((acc, curr) => acc + curr, 0);
    addItem({
      name: "(ICE) 아이스 블렌디드 아메리카노",
      options: Object.entries(selectedOptions).map(([key, value]) => `${key}: ${value}`),
      price: 3500 + totalAdditionalPrice,
    });
  };

  return (
    <div className={styles.container}>
      <Link href='/complex/menu/recommend'>
        <div className={styles.closeButton}>×</div>
      </Link>
      <div className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.title}>(ICE) 아이스 블렌디드 아메리카노</div>
        <div className={styles.description}>
          진한 에스프레소에 시원한 정수물과 얼음을 더하여 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피
        </div>
        <div className={styles.options}>
          <div className={`${styles.option} ${styles.selected}`}>ICED</div>
          <div className={styles.option}>HOT</div>
        </div>

        <div className={styles.radioGroup}>
          <div className={styles.radioLabel}>사이즈</div>
          <div className={styles.radioButtons}>
            <label className={styles.radioButton}>
              <input
                type="radio"
                name="size"
                value="M"
                onChange={() => handleOptionChange("size", "M", 0)}
              /> M
            </label>
            <label className={styles.radioButton}>
              <input
                type="radio"
                name="size"
                value="L"
                onChange={() => handleOptionChange("size", "L", 500)}
              /> L
            </label>
          </div>
          <div className={styles.extraCharge}>{selectedOptions.size === "L" ? "+500" : "0"}</div>
        </div>

        <div className={styles.radioGroup}>
          <div className={styles.radioLabel}>에스프레소 샷</div>
          <div className={styles.radioButtons}>
            <label className={styles.radioButton}>
              <input
                type="radio"
                name="shot"
                value="1샷"
                onChange={() => handleOptionChange("shot", "1샷", -200)}
              /> 1샷
            </label>
            <label className={styles.radioButton}>
              <input
                type="radio"
                name="shot"
                value="2샷"
                onChange={() => handleOptionChange("shot", "2샷", 0)}
              /> 2샷
            </label>
          </div>
            <div className={styles.extraCharge}>{selectedOptions.shot === "1샷" ? "-200" : "0"}</div>
        </div>

        <div className={styles.radioGroup}>
          <div className={styles.radioLabel}>얼음 양</div>
          <div className={styles.radioButtons}>
            <label className={styles.radioButton}>
              <input
                type="radio"
                name="ice"
                value="보통"
                onChange={() => handleOptionChange("ice", "보통", 0)}
              /> 보통
            </label>
            <label className={styles.radioButton}>
              <input
                type="radio"
                name="ice"
                value="많이"
                onChange={() => handleOptionChange("ice", "많이", 0)}
              /> 많이
            </label>
          </div>
            <div className={styles.extraCharge}>0</div>
        </div>

        <Link href="/complex/cart">
          <div className={styles.orderButton} onClick={handleAddToCart}>추가하기</div>
        </Link>
      </div>
    </div>
  );
}
