import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { incrementQuantity } from "../../redux/features/cart/cartSlice";
import { getFeaturedProducts } from "../../redux/features/product/productSelector";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function FeaturedProducts() {
  const products = useAppSelector(getFeaturedProducts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            High-end gear for your next adventure
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, id) => (
            <div
              className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
              key={id}
            >
              <div
                onClick={() => {
                  navigate(`/product/${product._id}`);
                }}
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">View</span>
              </div>
              <img
                src={product.imgId}
                alt={product.name}
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background relative z-20">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.subtitle}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-semibold">
                    ${product.price}
                  </span>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents the event from bubbling up to the parent div
                      dispatch(incrementQuantity(product));
                      toast(`${product.name} added to cart`);
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            View More
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
