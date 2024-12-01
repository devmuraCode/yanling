import axiosInstance from "@/api/axiosInstance";

export interface IAddress {
    landmark: string;
    street: string;
    house: string;
    apartment: string;
    longitude: string;
    latitude: string; 
  }
  
  export interface ICompany {
    id: number;
    name: string;
    description: string;
    address: IAddress;
    phones: string[];
    emails: string[];
    socialAddresses: string[];
  }
  
  export async function getCompanyAdress(): Promise<ICompany[]> {
    const { data } = await axiosInstance.get("/public/v1/company");
    return data;
  }
  