import axiosInstance from "@/api/axiosInstance";

export interface Address {
  landmark: string;
  street: string;
  house: string;
  apartment: string;
  longitude: string;
  latitude: string;
}

export interface Characteristic {
  id: number;
  titleUz: string;
  titleEn: string;
  titleRu: string;
  subTitleUz: string;
  subTitleEn: string;
  subTitleRu: string;
}

export interface ContactType {
  id: number;
  name: string;
  code: string | null;
}

export interface Phone {
  id: number;
  name: string;
  type: ContactType;
  primary: boolean;
}

export interface Email {
  id: number;
  name: string;
  type: ContactType;
  primary: boolean;
}

export interface SocialAddress {
  id: number;
  name: string;
  type: ContactType;
  primary: boolean;
}

export interface CompanyInfo {
  id: number;
  name: string;
  description: string;
  address: Address;
  characteristicDTOS: Characteristic[];
  phones: Phone[];
  emails: Email[];
  socialAddresses: SocialAddress[];
}

export const getCompanyInfo = async (): Promise<CompanyInfo> => {
  const { data } = await axiosInstance.get("/public/v1/company");
  return data;
};
