import axiosInstance from "@/api/axiosInstance";
export interface IValue {
  id: number;
  value: string;
}
export interface IField {
  id: number;
  name: string;
}
export interface IFieldDetails {
  field: IField;
  value: IValue;
}
export interface IProductFieldCategory {
  id: number;
  name: string;
  fields: IFieldDetails[];
  main: boolean;
}
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
  categories: IProductFieldCategory[];
}
export async function getProductFieldDetails(
  productId: number
): Promise<IProductDetails> {
  const { data } = await axiosInstance.get<IProductDetails>(
    `/public/v1/product/${productId}/field-details`
  );
  return data;
}
