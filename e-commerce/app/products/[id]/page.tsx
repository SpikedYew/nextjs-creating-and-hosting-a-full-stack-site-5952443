import { products } from "@/app/product-data";
import NotFoundPage from "@/app/not-found";
import Image from "next/image";
export default function ProductsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <NotFoundPage />;
  }
  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row">
      {/* <Image
        src={"/" + product.imageUrl}
        width={300}
        height={300}
        alt={product.name}
      /> */}
      {/* We are not using Next.js image size because it requires us to know how big the image is */}
      <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
        <img
          src={"/" + product.imageUrl}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-gray-600 mb-6">${product.price}</p>
        <h3 className="text-2xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
