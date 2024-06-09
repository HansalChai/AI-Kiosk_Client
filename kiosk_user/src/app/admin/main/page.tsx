"use client";

import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout, getAdminInfo } from "@/apis/auth";
import { setToken } from "@/apis/apiClient";
import { useEffect, useState } from "react";

const AdminMain = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      setToken("");
      alert("로그아웃 되었습니다.");
      router.push("/admin/home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getAdmin = async () => {
    try {
      const response = await getAdminInfo();
      setName(response.name);
    } catch (error) {
      console.error("Failed to get admin info:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
    getAdmin();
  }, []);

  return (
    <Container>
      <NameDiv>
        <OwnerNameDiv>
          <OwnerNameRound>
            <OwenrText>관리자</OwenrText>
          </OwnerNameRound>
        </OwnerNameDiv>
        <OwnerDiv>
          <Name>{name}님 환영합니다.</Name>
        </OwnerDiv>
      </NameDiv>
      <ButtonContainer>
        <ButtonBox>
          <Button style={{ background: "#E2B281" }}>
            <Link href="/admin/menu">메뉴 정보 설정</Link>
          </Button>
          <Button style={{ background: "#E2B281" }}>
            <Link href="/admin/order">화면 정보 설정</Link>
          </Button>
        </ButtonBox>
        <ButtonBox>
          <Button style={{ background: "#0E492D" }}>
            <Link href="/admin/statistics">메뉴 설정</Link>
          </Button>
          <Button style={{ background: "#0E492D" }}>
            <Link href="/admin/logout">추천 메뉴 설정 및 조회</Link>
          </Button>
        </ButtonBox>
        <ButtonBox>
          <Button style={{ background: "#5AA381" }}>
            <Link href="/admin/owner">메뉴 조회</Link>
          </Button>
          <Button style={{ background: "#5AA381" }}>
            <Link href="/admin/owner">멤버십 관리</Link>
          </Button>
        </ButtonBox>
      </ButtonContainer>
      <button
        style={{
          background: "#D9D9D9",
          color: "#F5F6F7",
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "10px",
          width: "320px",
          height: "50px",
        }}
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </Container>
  );
};

export default AdminMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f6f7;
  font-family: "NanumSquareOTF_acB";
`;

const NameDiv = styled.div`
  width: 320px;
  height: 70px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: extra-bold;
`;

const OwnerDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
`;

const OwnerNameDiv = styled.div`
  width: 100%;
  height: 15px;
  padding-top: 10px;
  display: flex;
  justify-content: left;
  align-items: left;
  margin-left: 10px;
`;

const OwnerNameRound = styled.div`
  width: 40px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #0e492d;
  opacity: 0.8;
`;

const OwenrText = styled.p`
  font-size: 8px;
  color: #ffffff;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 490px;
  margin-top: 40px;
  color: #333;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 160px;
  margin-top: 5px;
`;

const Button = styled.button`
  width: 135px;
  height: 135px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
  border: none;
`;
