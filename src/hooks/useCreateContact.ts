import { useMutation } from "@tanstack/react-query";
import { IContactForm, sendContactForm } from "@/services/contacts";

export default function useContactForm() {
  return useMutation({
    mutationFn: (variables: IContactForm) => sendContactForm(variables),
    onSuccess: () => {
      alert("Ваш запрос успешно отправлен!");
    },
    onError: (error: any) => {
      alert(`Произошла ошибка: ${error.message}`);
    },
  });
}
