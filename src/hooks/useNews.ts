"use client";
import { INews, getNewsList } from "@/api/news";
import { useQuery } from "@tanstack/react-query";

export default function useProducts() {
  return useQuery<INews[]>({
    queryKey: ["news"],
    queryFn: getNewsList,
  });
}
