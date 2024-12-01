import { useMutation } from "@tanstack/react-query";
import { IContactForm, sendContactForm } from "@/services/contacts";
import { toast } from "react-toastify";

export default function useContactForm() {
  return useMutation({
    mutationFn: (variables: IContactForm) => sendContactForm(variables),
    onSuccess: () => {
      toast.success("Ваш запрос успешно отправлен!");
    },
    onError: (error: any) => {
      toast.error(`Произошла ошибка: ${error.response.data.title}`);   
      console.log(error);
         
    },
  });
}
