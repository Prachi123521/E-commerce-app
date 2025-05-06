
import { Metadata } from "next";
import Product from "../page";
import { FC } from "react";





type Props = {
  params: {
    productId: string;
  };
};

// Optional: dynamic title
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Product ${params.productId}`,
  };
}

{/*export default function ProductPage:FC<PageProps>=({ params })=> {
  const { productId } = params;

  return <Product productId={productId} />;
}*/}

const ProductPage: FC<Props> = ({ params }) => {
  const { productId } = params;
  return <Product productId={productId} />;
};

export default ProductPage;








