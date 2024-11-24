import axiosInstance from "@/api/axiosInstance";

export interface ILicenses {
  id: number;
  fileId: number;
  title: string;
  filePath: string;
  description: string;
}

export async function getLicensesList(): Promise<ILicenses[]> {
  const { data } = await axiosInstance.get("/public/v1/license-patent/list");
  return data;
}
