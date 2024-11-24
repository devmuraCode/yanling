import axiosInstance from "@/api/axiosInstance";

export interface IContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function sendContactForm(
    variables: IContactForm,
  ): Promise<unknown> {
    const response = await axiosInstance.post("/public/v1/appeal", variables);
    return response.data;
  }