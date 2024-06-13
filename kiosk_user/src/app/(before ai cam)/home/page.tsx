"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import dineInIcon from "@/../public/eatin.svg";
import takeOutIcon from "@/../public/togo.svg";
import WebcamCapture from "./webcamCapture";
import styled from "styled-components";

export default function Home() {
  const [uploadResponse, setUploadResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const webcamRef = useRef<{ captureImage: () => void } | null>(null);
  const router = useRouter();

  const handleCapture = (response: any) => {
    setUploadResponse(response);
    setIsLoading(false);

    if (response.age === "48-53" || response.age === "60-100") {
      router.push("/simple/menu/recommend");
    } else {
      router.push("/complex/menu/recommend");
    }
  };

  const handleClick = () => {
    setIsLoading(true);
    captureImageAndSend();
  };

  const captureImageAndSend = () => {
    if (webcamRef.current) {
      webcamRef.current.captureImage();
    }
  };

  return (
    <div className={styles.container}>
      <WebcamWrapper>
        <WebcamCapture onCapture={handleCapture} ref={webcamRef} />
      </WebcamWrapper>

      <div className={styles.option} id={styles.dineIn} onClick={handleClick}>
        <div className={styles.icon}>
          <Image
            src={dineInIcon}
            alt="매장에서 먹고가기"
            className={styles.homeicon}
            onClick={() => router.push("/complex/menus")}
          />
        </div>
        <div className={styles.text1}>매장에서</div>
        <div className={styles.text1}>먹고가기</div>
      </div>

      <div className={styles.option} id={styles.takeOut} onClick={handleClick}>
        <div className={styles.icon}>
          <Image 
            src={takeOutIcon}
            alt="포장하기"
            className={styles.homeicon}
            priority
          />
        </div>
        <div className={styles.text2}>포장하기</div>
      </div>
    </div>
  );
}

const WebcamWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;