"use client";

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  getOptions,
  postOptions,
  deleteOptions,
  updateOptions,
} from "@/apis/owner";

interface Choice {
  id: number;
  choice_name: string;
  extra_cost: number;
}

interface Option {
  id: number;
  option_name: string;
  choices: Choice[];
}

const AdminOptions = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [newOptionName, setNewOptionName] = useState("");
  const [newChoices, setNewChoices] = useState<
    { choice_name: string; extra_cost: number }[]
  >([]);
  const [showInputForm, setShowInputForm] = useState(false);
  const [editingOption, setEditingOption] = useState<{
    id: number;
    option_name: string;
    choices: Choice[];
  } | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryId = searchParams.get("category_id");

  useEffect(() => {
    if (categoryId) {
      const fetchOptions = async () => {
        try {
          const response = await getOptions(Number(categoryId));
          console.log(response);
          setOptions(response.options); // Extract options array from the response
        } catch (error) {
          console.error("옵션 불러오기 실패 :", error);
        }
      };

      fetchOptions();
    }
  }, [categoryId]);

  const handleCreateOption = async () => {
    if (categoryId && newOptionName && newChoices.length > 0) {
      try {
        await postOptions(Number(categoryId), newOptionName, newChoices);
        const response = await getOptions(Number(categoryId));
        setOptions(response.options); // Extract options array from the response
        setNewOptionName("");
        setNewChoices([]);
        setShowInputForm(false);
      } catch (error) {
        console.error("옵션 생성 실패 :", error);
      }
    }
  };

  const handleDeleteOption = async (optionId: number) => {
    if (categoryId) {
      try {
        await deleteOptions(Number(categoryId), optionId);
        const response = await getOptions(Number(categoryId));
        setOptions(response.options); // Extract options array from the response
      } catch (error) {
        console.error("옵션 삭제 실패 :", error);
      }
    }
  };

  const handleUpdateOption = async () => {
    if (categoryId && editingOption) {
      try {
        await updateOptions(
          Number(categoryId),
          editingOption.id,
          editingOption.option_name,
          editingOption.choices
        );
        const response = await getOptions(Number(categoryId));
        setOptions(response.options); // Extract options array from the response
        setEditingOption(null);
      } catch (error) {
        console.error("옵션 수정 실패 :", error);
      }
    }
  };

  const addNewChoice = () => {
    setNewChoices([...newChoices, { choice_name: "", extra_cost: 0 }]);
  };

  const updateNewChoice = (index: number, field: keyof Choice, value: any) => {
    const updatedChoices = [...newChoices];
    updatedChoices[index] = { ...updatedChoices[index], [field]: value };
    setNewChoices(updatedChoices);
  };

  return (
    <Container>
      <Header onClick={() => router.push("/admin/category")}>
        ← 옵션 관리
      </Header>
      <OptionList>
        {options.length > 0 ? (
          options.map((option) => (
            <OptionItem key={option.id}>
              {editingOption && editingOption.id === option.id ? (
                <>
                  <Input
                    type="text"
                    value={editingOption.option_name}
                    onChange={(e) =>
                      setEditingOption({
                        ...editingOption,
                        option_name: e.target.value,
                      })
                    }
                    placeholder="옵션 이름"
                  />
                  {editingOption.choices.map((choice, index) => (
                    <ChoiceInputDiv key={choice.id}>
                      <Input
                        type="text"
                        value={choice.choice_name}
                        onChange={(e) => {
                          const updatedChoices = [...editingOption.choices];
                          updatedChoices[index].choice_name = e.target.value;
                          setEditingOption({
                            ...editingOption,
                            choices: updatedChoices,
                          });
                        }}
                        placeholder="선택 항목 이름"
                      />
                      <Input
                        type="number"
                        value={choice.extra_cost}
                        onChange={(e) => {
                          const updatedChoices = [...editingOption.choices];
                          updatedChoices[index].extra_cost = Number(
                            e.target.value
                          );
                          setEditingOption({
                            ...editingOption,
                            choices: updatedChoices,
                          });
                        }}
                        placeholder="추가 비용"
                      />
                    </ChoiceInputDiv>
                  ))}
                  <Button onClick={handleUpdateOption}>전송</Button>
                </>
              ) : (
                <>
                  <OptionName>{option.option_name}</OptionName>
                  <ChoiceList>
                    {option.choices.map((choice) => (
                      <ChoiceItem key={choice.id}>
                        {choice.choice_name} ({choice.extra_cost}원)
                      </ChoiceItem>
                    ))}
                  </ChoiceList>
                </>
              )}
              <ButtonContainer>
                {editingOption && editingOption.id === option.id ? null : (
                  <UpdateButton
                    onClick={() =>
                      setEditingOption({
                        id: option.id,
                        option_name: option.option_name,
                        choices: option.choices,
                      })
                    }
                  />
                )}
                <DeleteButton onClick={() => handleDeleteOption(option.id)} />
              </ButtonContainer>
            </OptionItem>
          ))
        ) : (
          <div>
            옵션이 존재하지 않습니다! 옵션을 추가하고 싶으시다면 새로운 옵션을
            아래에서 추가해주세요.
          </div>
        )}
      </OptionList>
      <Button onClick={() => setShowInputForm(!showInputForm)}>
        {showInputForm ? "취소하기" : "새 옵션 추가하기"}
      </Button>
      {showInputForm && (
        <OptionInputDiv>
          <h2>새 옵션 추가</h2>
          <Input
            type="text"
            value={newOptionName}
            onChange={(e) => setNewOptionName(e.target.value)}
            placeholder="옵션 이름"
          />
          {newChoices.map((choice, index) => (
            <ChoiceInputDiv key={index}>
              <Input
                type="text"
                value={choice.choice_name}
                onChange={(e) =>
                  updateNewChoice(index, "choice_name", e.target.value)
                }
                placeholder="선택 항목 이름"
              />
              <Input
                type="number"
                value={choice.extra_cost}
                onChange={(e) =>
                  updateNewChoice(index, "extra_cost", Number(e.target.value))
                }
                placeholder="추가 비용"
              />
            </ChoiceInputDiv>
          ))}
          <Button onClick={addNewChoice}>선택 항목 추가</Button>
          <Button onClick={handleCreateOption}>추가하기</Button>
        </OptionInputDiv>
      )}
    </Container>
  );
};

export default AdminOptions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 100vh;
  background-color: #f5f6f7;
  font-family: "NanumSquareOTF_acB";
`;

const OptionList = styled.div`
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

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 85%;
`;

const OptionName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ChoiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px 0 0 10px;
`;

const ChoiceItem = styled.li`
  font-size: 16px;
  color: #666;
  margin-top: 5px;
`;

const ChoiceInputDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
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

const OptionInputDiv = styled.div`
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
  cursor: pointer;
`;
