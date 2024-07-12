import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function BestSellingProducts() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            High-end gear for your next adventure
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <Link to="#" className="absolute inset-0 z-10">
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://images.unsplash.com/photo-1698521621094-6eeeb06b3cb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product 1"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Camping Mug</h3>
              <p className="text-sm text-muted-foreground">
                Durable, lightweight stainless steel camping mug with ergonomic
                handle.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-semibold">$9.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <Link to="#" className="absolute inset-0 z-10">
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://images.unsplash.com/photo-1679224636670-3c77124fcdf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlYXRoZXIlMjBnbG92ZXN8ZW58MHx8MHx8fDA%3D"
              alt="Product 2"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Leather gloves</h3>
              <p className="text-sm text-muted-foreground">
                High-quality leather gloves offering superior comfort,
                durability, and style.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-semibold">$11.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <Link to="#" className="absolute inset-0 z-10">
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://plus.unsplash.com/premium_photo-1669047983409-5879cfb7831a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product 3"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Camping tents</h3>
              <p className="text-sm text-muted-foreground">
                Durable, comfortable camping tents designed for all seasons and
                easy setup.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-semibold">$24.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <Link to="#" className="absolute inset-0 z-10">
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://images.unsplash.com/photo-1622260614153-03223fb72052?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product 4"
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Travel backpack</h3>
              <p className="text-sm text-muted-foreground">
                Durable, spacious travel backpack with multiple compartments for
                organization.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-semibold">$19.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
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

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
