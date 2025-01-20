import axiosInstance from "@/api/axiosInstance";

interface ProductFile {
  id: number;
  filePath: string;
  main: boolean;
}
interface CompanyProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  files: ProductFile[];
}

export const getShortInfoList = async (): Promise<CompanyProduct[]> => {
  const { data } = await axiosInstance.get(
    "/public/v1/product/short-info-list"
  );
  return data;
};
