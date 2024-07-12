import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SVGProps } from "react";
import { useParams } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import { Badge } from "../components/ui/badge";

export default function IndividualProduct() {
  const params = useParams<{ id: string }>();
  console.log({ params });

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 md:px-6 mx-auto py-6">
      <div className="grid gap-4 md:gap-8">
        <div className="grid gap-4">
          <img
            src="/placeholder.svg"
            alt="Product Image"
            width={600}
            height={600}
            className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
          />
        </div>
      </div>
      <div className="grid gap-4 md:gap-8">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold">Acme Prism T-Shirt</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">(12 reviews)</span>
          </div>
        </div>
        <div className="grid gap-2">
          <p className="text-muted-foreground">
            60% combed ringspun cotton/40% polyester jersey tee.
          </p>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="px-2 py-1">
              In Stock
            </Badge>
            <div className="flex items-center gap-1">
              <PackageIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                Only 10 left in stock
              </span>
            </div>
            <div className="flex items-center gap-1">
              <TagIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Clothing</span>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">$99.99</h2>
          <Button size="lg" className="w-full">
            Add to Cart
          </Button>
        </div>
        <Separator />
        <div className="grid gap-4 text-sm leading-loose">
          <p>
            Introducing the Acme Prism T-Shirt, a perfect blend of style and
            comfort for the modern individual. This tee is crafted with a
            meticulous composition of 60% combed ringspun cotton and 40%
            polyester jersey, ensuring a soft and breathable fabric that feels
            gentle against the skin.
          </p>
          <p>
            The design of the Acme Prism T-Shirt is as striking as it is
            comfortable. The shirt features a unique prism-inspired pattern that
            adds a modern and eye-catching touch to your ensemble.
          </p>
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
