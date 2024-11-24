import { useQuery } from "@tanstack/react-query";
import { getCategoriesList, Category } from "@/services/getCategoriesList";

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategoriesList,
  });
};
