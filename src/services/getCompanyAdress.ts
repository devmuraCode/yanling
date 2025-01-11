import axiosInstance from "@/api/axiosInstance";

export interface IPhone {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
    code: string | null;
  };
  primary: boolean;
}

export interface IEmail {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
    code: string | null;
  };
  primary: boolean;
}

export interface ISocialAddress {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
    code: string | null;
  };
  primary: boolean;
}

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
  phones: IPhone[];
  emails: IEmail[];
  socialAddresses: ISocialAddress[];
}

  
  export async function getCompanyAdress(): Promise<ICompany[]> {
    const { data } = await axiosInstance.get("/public/v1/company");
    return data;
  }
  