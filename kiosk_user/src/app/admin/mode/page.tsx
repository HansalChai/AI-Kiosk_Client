"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const ModeChangePage = () => {
  const [isAgeModeOn, setIsAgeModeOn] = useState(false);
  const [age, setAge] = useState(48);

  const router = useRouter();

  const handleToggle = () => {
    setIsAgeModeOn(!isAgeModeOn);
  };

  const handleAgeChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <ContentDiv>
        <HeaderDiv onClick={router.back}>← 화면 모드 설정</HeaderDiv>
        <ToggleBox>
          <ToggleLabel>연령 맞춤형 화면 변환 모드</ToggleLabel>
          <ToggleSwitch isOn={isAgeModeOn} onClick={handleToggle}>
            <ToggleThumb isOn={isAgeModeOn} />
          </ToggleSwitch>
        </ToggleBox>
        {isAgeModeOn && (
          <AgeSettingContainer>
            <AgeSettingHeader>기준 나이 설정</AgeSettingHeader>
            <ProgressContainer>
              <ProgressBar value={age} max="100" />
              <AgeValue>{age}세</AgeValue>
            </ProgressContainer>
            <AgeInput
              type="range"
              min="0"
              max="100"
              value={age}
              onChange={handleAgeChange}
            />
          </AgeSettingContainer>
        )}
      </ContentDiv>
    </Container>
  );
};

export default ModeChangePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f6f7;
  font-family: "NanumSquareOTF_acB";
`;

const ContentDiv = styled.div`
  width: 90%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: left;
  align-items: left;
  margin: 20px;
  padding-left: 20px;
  font-size: 22px;
`;

const ToggleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 62px;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const ToggleLabel = styled.label`
  font-size: 16px;
  padding-right: 20px;
  font-weight: bold;
`;

const ToggleSwitch = styled.div<{ isOn: boolean }>`
  width: 70px;
  height: 35px;
  border-radius: 25px;
  background-color: ${({ isOn }) => (isOn ? "#4caf50" : "#ccc")};
  display: flex;
  align-items: center;
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
  padding: 3px;
  cursor: pointer;
`;

const ToggleThumb = styled.div<{ isOn: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.3s;
  transform: ${({ isOn }) => (isOn ? "translateX(1px)" : "translateX(0)")};
`;

const AgeSettingHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: left;
  align-items: left;
  margin: 20px;
  padding-left: 20px;
  font-size: 16px;
`;

const AgeSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 20px;
  background-color: #ffffff;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  padding: 20px;
  width: %;
`;

const ProgressBar = styled.div<{ value: number; max: number }>`
  width: 20px;
  height: 400px;
  background: linear-gradient(
    to top,
    #4caf50 ${({ value, max }) => (value / max) * 100}%,
    #ffffff ${({ value, max }) => (value / max) * 100}%
  );
  border-radius: 10px;
  border: 1px solid #ccc;
  transformx: rotate(90deg);
  margin-right: 10px;
`;

const AgeValue = styled.span`
  font-size: 16px;
  position: absolute;
  left: 70%;
`;

const AgeInput = styled.input`
  width: 100px;
`;
