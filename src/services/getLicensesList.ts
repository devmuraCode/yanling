import axiosInstance from "@/api/axiosInstance";

export interface IFile {
  id: number;
  filePath: string;
  main: boolean;
}

export interface ILicense {
  id: number;
  title: string;
  description: string;
  files: IFile[];
}

export async function getLicensesList(): Promise<ILicense[]> {
  const { data } = await axiosInstance.get("/public/v1/license-patent/list");
  return data;
}
