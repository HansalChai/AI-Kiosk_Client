"use client";

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { getCategory, getMenu } from "@/apis/owner";

const ComplexMenus = () => {
  const [categories, setCategories] = useState([]);
  const [menus, setMenus] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [orderCount, setOrderCount] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategory();
        const categoryArray = response.categories;
        setCategories(categoryArray || []);
        if (categoryArray && categoryArray.length > 0) {
          setSelectedCategoryId(categoryArray[0].id);
        }
      } catch (error) {
        console.error(
          "카테고리를 불러오는데 실패했습니다. 다시 시도해주세요.",
          error
        );
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      const fetchMenus = async () => {
        try {
          const response = await getMenu(selectedCategoryId);
          setMenus(response || []);
        } catch (error) {
          console.error(
            "메뉴를 불러오는데 실패했습니다. 다시 시도해주세요.",
            error
          );
          setMenus([]);
        }
      };

      fetchMenus();
    }
  }, [selectedCategoryId]);

  const handleMenuClick = (price) => {
    setOrderCount(orderCount + 1);
    setOrderTotal(orderTotal + price);
  };

  return (
    <Container>
      <div
        style={{
          width: "1000px",
          height: "1700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "10px",
        }}
      >
        <Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            {" "}
            <BackButton onClick={() => window.history.back()} />
          </div>
          <Tabs>
            {Array.isArray(categories) &&
              categories.map((category) => (
                <Tab
                  key={category.id}
                  isActive={category.id === selectedCategoryId}
                  onClick={() => setSelectedCategoryId(category.id)}
                >
                  {category.category_name}
                </Tab>
              ))}
          </Tabs>
        </Header>
        <MenuList>
          {Array.isArray(menus) &&
            menus.map((menu, index) => (
              <MenuItem
                key={menu.id}
                isSpecial={index % 5 === 0 || index == 0}
                onClick={() => handleMenuClick(menu.price)}
              >
                <MenuImage
                  src={menu.image}
                  alt={menu.name}
                  isSpecial={index % 5 === 0 || index === 0}
                />
                <MenuDetails>
                  <MenuName isSpecial={index % 5 === 0 || index === 0}>
                    {menu.name}
                  </MenuName>
                  <MenuPrice>{menu.price}원</MenuPrice>
                </MenuDetails>
              </MenuItem>
            ))}
        </MenuList>
        <Footer>
          <OrderSummary>
            <OrderCount>
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "10px",
                  paddingTop: "10px",
                }}
              >
                수량
              </div>
              <div
                style={{
                  fontSize: "50px",
                }}
              >
                {orderCount}
              </div>
            </OrderCount>
            <OrderTotal>
              {" "}
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "10px",
                  paddingTop: "10px",
                }}
              >
                총액
              </div>
              <div
                style={{
                  fontSize: "50px",
                }}
              >
                {orderTotal}원
              </div>
            </OrderTotal>
          </OrderSummary>
          <OrderButton>결제</OrderButton>
        </Footer>
      </div>
    </Container>
  );
};

export default ComplexMenus;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #dee5e2;
  font-family: "NanumSquareOTF_acB";
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #fff;
  width: 100%;
  border-radius: 10px 10px 0 0;
  padding: 10px;
`;

const BackButton = styled.div`
  background: url(/goback.svg);
  border: none;
  font-size: 50px;
  cursor: pointer;
  padding: 10px;
  margin-left: 10px;
  width: 35px;
  height: 35px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 45px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "#0E492D" : "#888")};
  cursor: pointer;
`;

const MenuList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  overflow-y: auto;
  background-color: #dee5e2;
  padding: 20px;
`;

const MenuItem = styled.div`
  flex: ${(props) => (props.isSpecial ? "0 0 60%" : "0 0 27%")};
  background-color: #fff;
  margin: 10px;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.isSpecial ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "null"};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.isSpecial ? "60%" : "50%")};
  height: 500px;
  padding: 10px;
  cursor: pointer; /* Added cursor pointer for better UX */
`;

const MenuImage = styled.img`
  width: 90%;
  height: 370px;
  margin-top: 10px;
  object-fit: cover;
  border-radius: 10px;
`;

const MenuDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const MenuName = styled.div`
  font-size: ${(props) => (props.isSpecial ? "32px" : "26px")};
  font-weight: bold;
  margin-top: 10px;
`;

const MenuPrice = styled.div`
  font-size: 24px;
  color: #ffffff;
  background-color: #e2b281;
  padding: 10px 30px;
  border-radius: 20px;
  margin-top: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #928f8d;
  border-radius: 0 0 10px 10px;
  width: 100%;
  height: 150px;
`;

const OrderSummary = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  color: #fff;
`;

const OrderCount = styled.div`
  margin-right: 20px;
  width: 30%;
  text-align: center;
`;

const OrderTotal = styled.div`
  margin-right: 20px;
  width: 30%;
  text-align: center;
`;

const OrderButton = styled.button`
  background-color: #0e492d;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 0 0 10px 0;
  font-size: 50px;
  text-align: center;
  cursor: pointer;
  height: 100%;
  width: 35%;
`;
