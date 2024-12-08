"use client";
import { useEffect, useState, FC } from "react";
import { getProductDetails, IProductDetails } from "@/services/getProductDetails";
import { useParams } from "next/navigation";
import { DetailsCard } from "../sections/DetailsCard";
import { getProductFieldDetails } from "@/services/getProductFiledDetails";
import Loading from "@/app/loading";

const ProductDetail: FC = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<IProductDetails | null>(null);
  const [productFieldDetails, setProductFieldDetails] = useState<any | null>(null);
  console.log(id);

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          const [details, fieldDetails] = await Promise.all([
            getProductDetails(Number(id)),
            getProductFieldDetails(Number(id)),
          ]);

          setProductDetails(details);
          setProductFieldDetails(fieldDetails);
        } catch (error) {
          console.error("Ошибка загрузки деталей продукта:", error);
        }
      };

      fetchProductDetails();
    }
  }, [id]);
  console.log(productFieldDetails);

  if (!productDetails) {
    return <div><Loading/></div>;
  }

  return (
    <div>
      <DetailsCard
        {...productDetails}
        productFieldCategories={productFieldDetails} 
      />
    </div>
  );
};

export default ProductDetail;
