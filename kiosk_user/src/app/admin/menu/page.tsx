"use client";

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getMenu, postMenu, deleteMenu, updateMenu } from "@/apis/owner";

interface Menu {
  id: number;
  name: string;
  price: number;
  image: string;
}

const AdminMenu = () => {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [newMenuName, setNewMenuName] = useState("");
  const [newMenuImage, setNewMenuImage] = useState<File | null>(null);
  const [newMenuPrice, setNewMenuPrice] = useState<number | "">("");
  const [showInputForm, setShowInputForm] = useState(false);
  const [editingMenu, setEditingMenu] = useState<{
    id: number;
    name: string;
    image: File | null;
    price: number | "";
  } | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryId = searchParams.get("category_id");
  const categoryName = searchParams.get("category_name");

  useEffect(() => {
    if (categoryId) {
      const fetchMenu = async () => {
        try {
          const response = await getMenu(Number(categoryId));
          setMenu(response);
        } catch (error) {
          console.error("메뉴 불러오기 실패 :", error);
        }
      };

      fetchMenu();
    }
  }, [categoryId]);

  const handleCreateMenu = async () => {
    if (categoryId && newMenuName && newMenuImage && newMenuPrice !== "") {
      try {
        await postMenu(
          Number(categoryId),
          newMenuName,
          newMenuImage,
          Number(newMenuPrice)
        );
        const response = await getMenu(Number(categoryId));
        setMenu(response);
        setNewMenuName("");
        setNewMenuImage(null);
        setNewMenuPrice("");
        setShowInputForm(false);
      } catch (error) {
        console.error("메뉴 생성 실패 :", error);
      }
    }
  };

  const handleDeleteMenu = async (menuId: number) => {
    if (categoryId) {
      try {
        await deleteMenu(Number(categoryId), menuId);
        const response = await getMenu(Number(categoryId));
        setMenu(response);
      } catch (error) {
        console.error("메뉴 삭제 실패 :", error);
      }
    }
  };

  const handleUpdateMenu = async () => {
    if (categoryId && editingMenu) {
      try {
        await updateMenu(
          Number(categoryId),
          editingMenu.id,
          editingMenu.name,
          editingMenu.image as File,
          Number(editingMenu.price)
        );
        const response = await getMenu(Number(categoryId));
        setMenu(response);
        setEditingMenu(null);
      } catch (error) {
        console.error("메뉴 수정 실패 :", error);
      }
    }
  };

  return (
    <Container>
      <Header onClick={() => router.push("/admin/category")}>
        ← {categoryName} 메뉴 관리
      </Header>{" "}
      <MenuList>
        <MenuListHeader>
          <MenuListHeaderRound>메뉴 목록</MenuListHeaderRound>
        </MenuListHeader>
        {menu && menu.length > 0 ? (
          menu.map((item) => (
            <MenuItem key={item.id}>
              <MenuImage src={item.image} alt={item.name} />
              <MenuDetails>
                {editingMenu && editingMenu.id === item.id ? (
                  <>
                    <Input
                      type="text"
                      value={editingMenu.name}
                      onChange={(e) =>
                        setEditingMenu({ ...editingMenu, name: e.target.value })
                      }
                      placeholder="메뉴 이름"
                    />
                    <Input
                      type="file"
                      onChange={(e) =>
                        setEditingMenu({
                          ...editingMenu,
                          image: e.target.files ? e.target.files[0] : null,
                        })
                      }
                    />
                    <Input
                      type="number"
                      value={editingMenu.price}
                      onChange={(e) =>
                        setEditingMenu({
                          ...editingMenu,
                          price: Number(e.target.value),
                        })
                      }
                      placeholder="가격"
                    />
                    <Button onClick={handleUpdateMenu}>전송</Button>
                  </>
                ) : (
                  <>
                    <MenuName>{item.name}</MenuName>
                    <MenuPrice>{item.price}원</MenuPrice>
                  </>
                )}
              </MenuDetails>
              <ButtonContainer>
                {editingMenu && editingMenu.id === item.id ? null : (
                  <UpdateButton
                    onClick={() =>
                      setEditingMenu({
                        id: item.id,
                        name: item.name,
                        image: null,
                        price: item.price,
                      })
                    }
                  />
                )}
                <DeleteButton onClick={() => handleDeleteMenu(item.id)} />
              </ButtonContainer>
            </MenuItem>
          ))
        ) : (
          <div>
            메뉴가 존재하지 않습니다! 메뉴 관리를 하고 싶으시다면 새로운 메뉴를
            아래에서 추가해주세요.
          </div>
        )}
      </MenuList>
      <Button onClick={() => setShowInputForm(!showInputForm)}>
        {showInputForm ? "취소하기" : "새 메뉴 추가하기"}
      </Button>
      {showInputForm && (
        <MenuInputDiv>
          <h2>새 메뉴 추가</h2>
          <Input
            type="text"
            value={newMenuName}
            onChange={(e) => setNewMenuName(e.target.value)}
            placeholder="메뉴 이름"
          />
          <Input
            type="file"
            onChange={(e) =>
              setNewMenuImage(e.target.files ? e.target.files[0] : null)
            }
          />
          <Input
            type="number"
            value={newMenuPrice}
            onChange={(e) => setNewMenuPrice(Number(e.target.value))}
            placeholder="가격"
          />
          <Button onClick={handleCreateMenu}>추가하기</Button>
        </MenuInputDiv>
      )}
    </Container>
  );
};

export default AdminMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 100vh;
  background-color: #f5f6f7;
  font-family: "NanumSquareOTF_acB";
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 85%;
`;

const MenuImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

const MenuDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const MenuName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const MenuPrice = styled.div`
  font-size: 16px;
  color: #666;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #d9d9d9;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: #010101;
    color: #ffffff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.div`
  margin-left: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: url(/TrashCanIcon.svg);
`;

const UpdateButton = styled.div`
  margin-left: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: url(/UpdateIcon.svg);
`;

const MenuInputDiv = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  width: 320px;
  height: 45px;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 320px;
  height: 560px;
  overflow-y: auto;
  background-color: #fff;
  padding: 10px;
`;

const MenuListHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #0e492d;
`;

const MenuListHeaderRound = styled.div`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5aa381;
  opacity: 0.8;
`;
