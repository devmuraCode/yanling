import axiosInstance from "@/api/axiosInstance";

export interface IProductDetails {
  id: number;
  name: string;
  description: string;
  price: number;
  files: Array<{
    id: number;
    filePath: string;
    main: boolean;
  }>;
}

export async function getProductDetails(productId: number): Promise<IProductDetails> {
  const { data } = await axiosInstance.get<IProductDetails>(`/public/v1/product/${productId}/details`);
  return data;
}
