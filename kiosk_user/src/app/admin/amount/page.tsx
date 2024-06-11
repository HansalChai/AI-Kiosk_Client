"use client";

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getOrderAmount } from "@/apis/owner";
import { setToken } from "@/apis/apiClient";

const AdminAmount = () => {
  interface OrderAmount {
    menu_id: number;
    menu_name: string;
    teenager: number | null;
    adult: number | null;
    elder: number | null;
    aged: number | null;
  }

  const router = useRouter();
  const [ageRange, setAgeRange] = useState("");
  const [orderAmount, setOrderAmount] = useState<OrderAmount[]>([]);
  const [isSelect, setIsSelect] = useState(false);
  const [sortedOrderAmount, setSortedOrderAmount] = useState<OrderAmount[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const handleGetOrderAmount = async (age_range: string) => {
    try {
      const response = await getOrderAmount(age_range);
      console.log("주문량 조회 성공 : ", response);
      setOrderAmount(response);
      setAgeRange(age_range);
      setIsSelect(true);

      const sortedData = [...response].sort(
        (a, b) => (b[age_range] || 0) - (a[age_range] || 0)
      );
      setSortedOrderAmount(sortedData);
    } catch (error) {
      console.error("주문량 조회 실패 : ", error);
    }
  };

  const handleSelectAge = (age_range: string) => {
    if (ageRange === age_range) {
      setAgeRange("");
      setIsSelect(false);
      setOrderAmount([]);
      setSortedOrderAmount([]);
    } else {
      handleGetOrderAmount(age_range);
    }
  };

  return (
    <Container>
      <Header onClick={() => router.push("/admin/main/")}>
        <h1>← 추천 메뉴 조회 및 관리</h1>
      </Header>
      <OrderAmountList>
        <AgeSelectDiv>
          <AgeSelectDiv2>연령 정보</AgeSelectDiv2>
          <AgeSelectBlock
            isSelected={ageRange === "teenager"}
            onClick={() => handleSelectAge("teenager")}
          >
            <AgeIcon />
          </AgeSelectBlock>
          <AgeSelectBlock
            isSelected={ageRange === "adult"}
            onClick={() => handleSelectAge("adult")}
          >
            <AdultIcon />
          </AgeSelectBlock>
          <AgeSelectBlock
            isSelected={ageRange === "elder"}
            onClick={() => handleSelectAge("elder")}
          >
            <ElderIcon />
          </AgeSelectBlock>
          <AgeSelectBlock
            isSelected={ageRange === "aged"}
            onClick={() => handleSelectAge("aged")}
          >
            <AgedIcon />
          </AgeSelectBlock>
        </AgeSelectDiv>
        {isSelect && (
          <TableDiv>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>노출 순위</TableHeaderCell>
                <TableHeaderCell>메뉴</TableHeaderCell>
                <TableHeaderCell>판매량</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedOrderAmount.map((item, index) => (
                <TableRow key={item.menu_id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.menu_name}</TableCell>
                  <TableCell>{item[ageRange]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableDiv>
        )}
      </OrderAmountList>
    </Container>
  );
};

export default AdminAmount;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 100vh;
  background-color: #f5f6f7;
  font-family: "NanumSquareOTF_acB";
`;

const OrderAmountList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 330px;
  height: 600px;
  overflow-y: auto;
  background-color: #fff;
  margin-top: 20px;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  width: 320px;
  height: 45px;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
`;

const AgeSelectDiv = styled.div`
  display: flex;
  width: 90%;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #b9b9b9;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const AgeSelectDiv2 = styled.div`
  display: flex;
  width: 25%;
  height: 50px;
  border-radius: 5px 0 0 5px;
  align-items: center;
  justify-content: center;
  background-color: #b9b9b9;
  opacity: 0.5;
`;

const AgeSelectBlock = styled.div<{ isSelected: boolean }>`
  width: 15%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 5px 5px;
  border: 1px solid #0e492d;
  margin-right: 5px;
  background-color: ${(props) => (props.isSelected ? "#0e492d" : "#ffffff")};
  opacity: 0.5;
`;

const AgeIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url(/TeenagerIcon.svg);
`;

const ElderIcon = styled.div`
  width: 30px;
  height: 30px;
  background: url(/ElderIcon.svg);
`;

const AdultIcon = styled.div`
  width: 16px;
  height: 24px;
  background: url(/AdultIcon.svg);
`;

const AgedIcon = styled.div`
  width: 15px;
  height: 25px;
  background: url(/AgedIcon.svg);
`;

const TableDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const TableHeader = styled.div`
  display: flex;
  border-bottom: 2px solid #ccc;
`;

const TableBody = styled.div``;

const TableRow = styled.div`
  display: flex;
  width: 100%;
  
`;

const TableHeaderCell = styled.div`
  flex: 1;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  background-color: #f2f2f2;
`;

const TableCell = styled.div`
  flex: 1;
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;
