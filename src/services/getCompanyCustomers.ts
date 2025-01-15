import axiosInstance from "@/api/axiosInstance";

export interface INews {
  id: number;
  name: string;
  webSite: string;
  fileId: number | null;
  title: string;
  description: string;
  filePath: string | null;
  status: {
    name: string;
    code: string;
  };
}

export async function getCompanyCustomers(): Promise<INews[]> {
  const { data } = await axiosInstance.get("/public/v1/customers/list");
  return data.map((item: any) => ({
    id: item.id,
    name: item.name,
    webSite: item.webSite,
    fileId: item.fileId,
    title: item.title,
    description: item.description,
    filePath: item.filePath,
    status: item.status,
  }));
}
