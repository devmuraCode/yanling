"use client";
import { FC } from "react";
import { useParams } from "next/navigation";
import Loading from "@/app/Loading";

const ProductDetail: FC = () => {
  const { id } = useParams();
  console.log(id);

  if (!id) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return <div></div>;
};

export default ProductDetail;
