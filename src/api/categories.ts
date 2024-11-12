import axiosInstance from "@/services/axiosInstance";

export interface Category {
  id: number;
  parentId: number | null;
  name: string;
  description: string | null;
  children: Category[] | null;
}

export const getCategoriesList = async (): Promise<Category[]> => {
  const { data } = await axiosInstance.get<Category[]>("/public/v1/product-category/list");
  return data;
};
