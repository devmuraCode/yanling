import axiosInstance from "@/api/axiosInstance";

export interface IService {
  id: number;
  fileId: number;
  title: string;
  description: string;
  filePath: string;
  topService: boolean;
}

export async function getService(): Promise<IService[]> {
  const { data } = await axiosInstance.get("/public/v1/company-service/list");
  return data;
}
