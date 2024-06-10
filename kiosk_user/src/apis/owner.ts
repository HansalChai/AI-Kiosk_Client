import apiClient, { setToken } from "./apiClient";

export const getCategory = async () => {
  try {
    const response = await apiClient.get("/api/categories/");
    console.log("Category array:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to get category:", error);
    throw error;
  }
};

export const postCategory = async (category_name: string) => {
  try {
    const response = await apiClient.post("/api/categories/", {
      category_name,
    });
    console.log("Category created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to create category:", error);
    throw error;
  }
};

export const deleteCategory = async (category_id: number) => {
  try {
    const response = await apiClient.post(
      `/api/categories/${category_id}/delete/`
    );
    alert("카테고리가 삭제되었습니다 !");
    return response.data;
  } catch (error) {
    alert("카테고리 삭제에 실패했습니다. 다시 시도해주세요.");
    console.error("카테고리 삭제 실패: ", error);
    throw error;
  }
};

export const updateCategory = async (
  category_id: number,
  category_name: string
) => {
  try {
    const response = await apiClient.patch(`/api/categories/${category_id}/`, {
      category_name,
    });
    alert("카테고리가 수정되었습니다 !");
    return response.data;
  } catch (error) {
    alert("카테고리 수정에 실패했습니다. 다시 시도해주세요.");
    console.error("카테고리 수정 실패: ", error);
    throw error;
  }
};
