

{/*export default async function ProductDetails({
    params,
}:{
    params:Promise<{productId:string}>;

}) {
    const ProductId = (await params).productId;
    return(
    <h1>Hello {ProductId}</h1>
    )
}
*/}


// app/men/[productId]/page.tsx
import { Metadata } from "next";
import Product from "../page";

// app/men/page.tsx




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

export default function ProductPage({ params }: Props) {
  const { productId } = params;

  return <Product productId={productId} />;
}



{/*export default function ProductPage({ params }: { params: { productId: string } }) {
  return <Product productId={params.productId} />;
}*/}






