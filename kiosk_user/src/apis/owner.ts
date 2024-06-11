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

export const getMenu = async (category_id: number) => {
  try {
    const response = await apiClient.get(
      `/api/categories/${category_id}/menus/`
    );
    return response.data;
  } catch (error) {
    console.error("메뉴를 불러오는데 실패했습니다. 다시 시도해주세요.", error);
    throw error;
  }
};

export const postMenu = async (
  category_id: number,
  menu_name: string,
  image: File | null,
  price: number
) => {
  try {
    const formData = new FormData();
    formData.append("name", menu_name);
    if (image) {
      formData.append("image", image);
    }
    formData.append("price", price.toString());

    const response = await apiClient.post(
      `/api/categories/${category_id}/menus/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("메뉴 추가에 실패했습니다. 다시 시도해주세요.", error);
    throw error;
  }
};

export const deleteMenu = async (category_id: number, menu_id: number) => {
  try {
    const response = await apiClient.delete(
      `/api/categories/${category_id}/menus/${menu_id}/`
    );
    console.log("Menu deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to delete menu:", error);
    throw error;
  }
};

export const updateMenu = async (
  category_id: number,
  menu_id: number,
  menu_name: string,
  image: File | null,
  price: number
) => {
  try {
    const formData = new FormData();
    formData.append("name", menu_name);
    if (image) {
      formData.append("image", image);
    }
    formData.append("price", price.toString());

    const response = await apiClient.patch(
      `/api/categories/${category_id}/menus/${menu_id}/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update menu:", error);
    throw error;
  }
};
