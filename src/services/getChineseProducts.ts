import axiosInstance from "@/api/axiosInstance";

export interface CompanyProduct {
  id: number;
  fileId: number | null;
  title: string;
  description: string | null;
  filePath: string;
}

export const getChineseProducts = async (): Promise<CompanyProduct[]> => {
  const { data } = await axiosInstance.get("/public/v1/product/top-products");
  return data;
};
