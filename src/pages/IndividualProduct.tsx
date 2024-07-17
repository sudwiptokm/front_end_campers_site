import { SVGProps } from "react";
import { Link, useParams } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ArrowLeft } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { toast } from "../components/ui/use-toast";
import Zoom from "../components/ui/zoom";
import { selectAvailableToAddInCart } from "../redux/features/cart/cartSelector";
import { incrementQuantity } from "../redux/features/cart/cartSlice";
import { getIndividualProduct } from "../redux/features/product/productSelector";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function IndividualProduct() {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const productData = useAppSelector((state) =>
    getIndividualProduct(state, params.id!)
  );

  const hasStock = useAppSelector((state) =>
    selectAvailableToAddInCart(state)(params.id!)
  );

  console.log({ hasStock });

  if (!productData) {
    return (
      <div className="flex-1 w-full h-full items-center justify-center flex flex-col space-y-6">
        <h1>Product not found</h1>
        <Link to="/products" className="mt-4">
          <Button>
            {" "}
            <span>
              <ArrowLeft />
            </span>{" "}
            Go back to products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 md:px-6 mx-auto py-6">
      <div className="grid gap-4 md:gap-8">
        <div className="grid gap-4">
          <Zoom src={productData?.imgId!} />
        </div>
      </div>
      <div className="grid gap-4 md:gap-8">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold">{productData?.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {/* Star icons */}
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  className={`w-5 h-5 ${
                    index < Math.round(productData?.rating!)
                      ? "fill-primary"
                      : "fill-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {productData?.rating} (12 reviews)
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <p className="text-muted-foreground">{productData?.subtitle}</p>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="px-2 py-1">
              {productData?.stock! > 0 ? "In" : "Out of"} Stock
            </Badge>
            <div className="flex items-center gap-1">
              <PackageIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                Only {productData?.stock} left in stock
              </span>
            </div>
            <div className="flex items-center gap-1">
              <TagIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                {productData?.category}
              </span>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">${productData?.price}</h2>
          <Button
            size="lg"
            className="w-full"
            onClick={() => {
              dispatch(incrementQuantity(productData!));
              toast({
                title: "Success",
                description: `${productData!.name} added to cart`,
              });
            }}
            disabled={!hasStock}
          >
            Add to Cart
          </Button>
        </div>
        <Separator />
        <div className="grid gap-4 text-sm leading-loose">
          <p>{productData?.description}</p>
        </div>
      </div>
    </div>
  );
}

function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}
