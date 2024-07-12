import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="grid gap-1 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Featured Products
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Discover our top-selling and most popular products.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View Product</span>
              </Link>
              <img
                src="https://images.unsplash.com/photo-1592388748465-8c4dca8dd703?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ultralight Backpack"
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">Ultralight Backpack</h3>
                <p className="text-sm text-muted-foreground">
                  Comfortable, spacious, perfect for long hikes.
                </p>
                <Button size="sm" variant="outline" className="mt-4">
                  View Details
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View Product</span>
              </Link>
              <img
                src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRlbnR8ZW58MHx8MHx8fDA%3D"
                alt="All-Weather Tent"
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">All-Weather Tent</h3>
                <p className="text-sm text-muted-foreground">
                  Durable, waterproof, ideal for any camping condition.
                </p>
                <Button size="sm" variant="outline" className="mt-4">
                  View Details
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View Product</span>
              </Link>
              <img
                src="https://images.unsplash.com/photo-1525858907241-d230b66fb9fa?q=80&w=1549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Portable Charger"
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">Portable Charger</h3>
                <p className="text-sm text-muted-foreground">
                  Charges devices, eco-friendly, perfect for off-grid
                  adventures.
                </p>
                <Button size="sm" variant="outline" className="mt-4">
                  View Details
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View Product</span>
              </Link>
              <img
                src="https://images.unsplash.com/photo-1523976246010-56d9a0d2ee66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Travel Tool Kit"
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">Travel Tool Kit</h3>
                <p className="text-sm text-muted-foreground">
                  Versatile, compact, essential for any outdoor activity.
                </p>
                <Button size="sm" variant="outline" className="mt-4">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
