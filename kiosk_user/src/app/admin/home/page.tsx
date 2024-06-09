"use client";

import styled from "styled-components";
import Link from "next/link";

export const adminHome = () => {
  return (
    <Container>
      <ImgBox />
      <InputBox>
        <InputText>아아디</InputText>
        <InputDesign>
          <Input type="text" />
        </InputDesign>
      </InputBox>
      <InputBox>
        <InputText>비밀번호</InputText>
        <InputDesign>
          <Input type="password" />
        </InputDesign>
      </InputBox>
      <Button>
        <Link href="/admin/main">로그인</Link>
      </Button>
    </Container>
  );
};

export default adminHome;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f6f7;
`;

const ImgBox = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(/LOGO_1.svg);
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 320px;
  height: 70px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  border: 1px solid #d7d8d9;
  font-size: 16px;
  color: #333;
`;

const InputText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
  font-family: "NanumSquareOTF_acB";
`;

const InputDesign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 48px;
  outline: none;
  font-size: 16px;
`;

const Button = styled.button`
  width: 320px;
  height: 40px;
  border-radius: 8px;
  background-color: #5aa381;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: #0e492d;
  }
`;