const fetchTranslations = async (
  lng: string
): Promise<Record<string, string>> => {
  const response = await fetch(
    `https://api.example.com/translations?lang=${lng}`,
    {
      method: "GET", 
      headers: {
        "Content-Type": "application/json", 
        Authorization: "Bearer your-token-here",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch translations: ${response.statusText}`);
  }

  const translations: Record<string, string> = await response.json();
  return translations;
};
