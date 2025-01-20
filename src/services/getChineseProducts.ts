import axiosInstance from "@/api/axiosInstance";

// Определяем интерфейс для файлов
export interface ProductFile {
  id: number;
  filePath: string;
  main: boolean;
}

// Основной интерфейс продукта
export interface CompanyProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  files: ProductFile[];
}

export const getChineseProducts = async (): Promise<CompanyProduct[]> => {
  const { data } = await axiosInstance.get("/public/v1/product/top-products");
  return data;
};
