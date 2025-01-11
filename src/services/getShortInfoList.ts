import axiosInstance from "@/api/axiosInstance";

export interface CompanyProduct {
  id: number;
  fileId: number | null;
  title: string;
  description: string | null;
  filePath: string;
}

export const getShortInfoList = async (): Promise<CompanyProduct[]> => {
  const { data } = await axiosInstance.get(
    "/public/v1/product/short-info-list"
  );
  return data;
};
