
import { Metadata } from "next";
import Product from "../page";
import { FC } from "react";





type PageProps = {
  params: {
    productId: string;
  };
};

// Optional: dynamic title
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Product ${params.productId}`,
  };
}

{/*export default function ProductPage:FC<PageProps>=({ params })=> {
  const { productId } = params;

  return <Product productId={productId} />;
}*/}

const ProductPage: FC<PageProps> = ({ params }) => {
  const { productId } = params;
  return <Product productId={productId} />;
};

export default ProductPage;








