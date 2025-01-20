import axiosInstance from "@/api/axiosInstance";

// Интерфейс для статуса продукта
export interface ProductStatus {
  name: string;
  code: string;
}

// Основной интерфейс для продукта компании
export interface CompanyProduct {
  id: number;
  fileId: number | null;
  title: string;
  description: string | null;
  filePath: string;
  status: ProductStatus; // Добавлено для свойства status
  topProduct: boolean; // Добавлено для свойства topProduct
}

export const getCompanyTopProducts = async (): Promise<CompanyProduct[]> => {
  const { data } = await axiosInstance.get(
    "/public/v1/company-product/top-products"
  );
  return data;
};
