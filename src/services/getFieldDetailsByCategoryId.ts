import axiosInstance from "@/api/axiosInstance";

export interface ProductShortInfo {
  id: number;
  name: string;
  price: number;
  files: ProductFile[];
}

export interface ProductFile {
  id: number;
  filePath: string;
  main: boolean;
}

export const getShortInfoByCategoryId = async (
  categoryId: number
): Promise<ProductShortInfo[]> => {
  try {
    const { data } = await axiosInstance.get<ProductShortInfo[]>(
      `/public/v1/product/short-info-list`,
      {
        params: {
          categoryId,
        },
      }
    );
    const transformedData = data.map((product) => ({
      ...product,
      files: product.files.map((file) => ({
        ...file,
        filePath: file.filePath,
      })),
    }));

    return transformedData;
  } catch (error) {
    console.error(
      "Ошибка при получении краткой информации о продуктах:",
      error
    );
    throw error;
  }
};
