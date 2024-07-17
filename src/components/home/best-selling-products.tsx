import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { getTopSellingProducts } from "../../redux/features/product/productSelector";
import { useAppSelector } from "../../redux/hooks";

export default function BestSellingProducts() {
  const products = useAppSelector(getTopSellingProducts);
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="grid gap-1 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Top Selling Products
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Discover our most demanding and popular products.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, id) => (
              <div
                className="relative overflow-hidden rounded-lg shadow-lg group"
                key={id}
              >
                <Link
                  to={`product/${product._id}`}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src={product.imgId}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-60"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.subtitle}
                  </p>
                  <Button size="sm" variant="outline" className="mt-4">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
