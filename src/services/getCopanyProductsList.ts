import axiosInstance from "@/api/axiosInstance";

export interface CompanyProduct {
  id: number;
  fileId: number | null;
  title: string;
  description: string | null;
  filePath: string;
  price: number;
}

export const getCopanyProductsList = async (): Promise<CompanyProduct[]> => {
  const { data } = await axiosInstance.get("/public/v1/company-product/list");
  return data;
};
