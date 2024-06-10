"use client";

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {
  getCategory,
  postCategory,
  deleteCategory,
  updateCategory,
} from "@/apis/owner";
import { setToken } from "@/apis/apiClient";

const AdminCategory = () => {
  interface Category {
    id: number;
    category_name: string;
  }

  const [category, setCategory] = useState<Category[]>([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [editingCategory, setEditingCategory] = useState<{
    id: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
    const fetchCategories = async () => {
      try {
        const response = await getCategory();
        setCategory(response.categories);
        console.log("Category:", response.categories);
      } catch (error) {
        console.error("카테고리 불러오기 실패 :", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCreateCategory = async () => {
    try {
      await postCategory(newCategoryName);
      const response = await getCategory();
      setCategory(response.categories);
      setNewCategoryName("");
      setShowInput(false);
    } catch (error) {
      console.error("카테고리 생성 실패 : ", error);
    }
  };

  const handleDeleteCategory = async (categoryId: number) => {
    try {
      await deleteCategory(categoryId);
      const response = await getCategory();
      setCategory(response.categories);
    } catch (error) {
      console.error("카테고리 삭제 실패 :", error);
    }
  };

  const handleUpdateCategory = async () => {
    if (editingCategory) {
      try {
        await updateCategory(editingCategory.id, editingCategory.name);
        const response = await getCategory();
        setCategory(response.categories);
        setEditingCategory(null);
      } catch (error) {
        console.error("카테고리 수정 실패 : ", error);
      }
    }
  };

  return (
    <Container>
      <Header>
        <h1>← 카테고리 관리</h1>
      </Header>
      <CategoryList>
        <CategoryListHeader>
          <CategoryListHeaderRound>카테고리 관리</CategoryListHeaderRound>
        </CategoryListHeader>
        {category.length > 0 ? (
          category.map((cat, index) => (
            <CategoryItem key={cat.id} isFirst={index === 0}>
              {editingCategory && editingCategory.id === cat.id ? (
                <CategoryUpdateInput
                  type="text"
                  value={editingCategory.name}
                  onChange={(e) =>
                    setEditingCategory({
                      ...editingCategory,
                      name: e.target.value,
                    })
                  }
                />
              ) : (
                cat.category_name
              )}
              <ButtonContainer>
                {editingCategory && editingCategory.id === cat.id ? (
                  <SubmitButton onClick={handleUpdateCategory}>
                    전송
                  </SubmitButton>
                ) : (
                  <UpdateButton
                    onClick={() =>
                      setEditingCategory({
                        id: cat.id,
                        name: cat.category_name,
                      })
                    }
                  />
                )}
                <DeleteButton onClick={() => handleDeleteCategory(cat.id)} />
                <MenuButton>메뉴 관리</MenuButton>
              </ButtonContainer>
            </CategoryItem>
          ))
        ) : (
          <div>
            카테고리가 존재하지 않습니다! 카테고리 관리를 하고 싶으시다면 새로운
            카테고리를 아래에서 추가해주세요.
          </div>
        )}
      </CategoryList>
      {showInput ? (
        <div>
          <Input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="추가할 카테고리 이름"
          />
          <Button onClick={handleCreateCategory}>추가하기</Button>
        </div>
      ) : (
        <Button onClick={() => setShowInput(true)}>새 카테고리 추가하기</Button>
      )}
    </Container>
  );
};

export default AdminCategory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
  height: 100vh;
  background-color: #f5f6f7;
  font-family: "NanumSquareOTF_acB";
`;

const CategoryItem = styled.div<{ isFirst: boolean }>`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
  height: 50px;
  padding: 5px;
  margin-top: ${({ isFirst }) => (isFirst ? "10px" : "0px")};
  border-top: ${({ isFirst }) => (isFirst ? "2px solid #ccc" : "none")};
  border-bottom: 2px solid #ccc;
  font-size: 16px;
`;

const Input = styled.input`
  margin: 10px 10px 0 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CategoryUpdateInput = styled.input`
  padding: 10px;
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

const SubmitButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #d9d9d9;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    background-color: #010101;
    color: #ffffff;
  }
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 320px;
  height: 560px;
  overflow-y: auto;
  background-color: #fff;
  margin-top: 50px;
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

const MenuButton = styled.button`
  width: 60px;
  height: 30px;
  margin-left: 10px;
  background-color: #d9d9d9;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    background-color: #010101;
    color: #ffffff;
  }
`;

const CategoryListHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const CategoryListHeaderRound = styled.div`
  width: 40px;
  height: 50px;
  backgroung-color: #5aa381;
  border-radius: 5px;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
