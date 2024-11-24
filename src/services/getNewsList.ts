import axiosInstance from "@/api/axiosInstance";

export interface INews {
    id: number;
    fileId: number;
    title: string;
    filePath: string;
    description: string;
  }
  
 export async function getNewsList(): Promise<INews[]> {
    const { data } = await axiosInstance.get("/public/v1/company-news/list");
    return data;
  }