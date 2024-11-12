import { getCategoriesList, Category } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategoriesList,
  });
};
