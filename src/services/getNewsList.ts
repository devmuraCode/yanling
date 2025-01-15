import axiosInstance from "@/api/axiosInstance";
import { ReactNode } from "react";

export interface INews {
  date: ReactNode;
  id: number;
  fileId: number;
  title: string;
  filePath: string;
  description: string;
  createdDate: string;
}
  
 export async function getNewsList(): Promise<INews[]> {
    const { data } = await axiosInstance.get("/public/v1/company-news/list");
    return data;
  }