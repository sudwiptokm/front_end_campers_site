import { Link } from "react-router-dom";

export default function ProductCategories() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1 w-full">
            <h1 className="text-4xl font-bold tracking-tight text-center">
              Explore Our Product Categories
            </h1>
            <p className="text-muted-foreground text-center">
              Find the perfect products for your needs.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link to="#" className="absolute inset-0 z-10">
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://images.unsplash.com/photo-1502943615053-d8bd8c74eb1b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Camping Gear"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">
                Camping Gear
              </h3>
              <p className="text-sm leading-snug">
                Tents, sleeping bags, and essential outdoor equipment.
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link to="#" className="absolute inset-0 z-10">
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://images.unsplash.com/photo-1506303185793-7b5fe8035d04?q=80&w=1554&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel Essentials"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">
                Travel Essentials
              </h3>
              <p className="text-sm leading-snug">
                Luggage, backpacks, and travel accessories for any journey.
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link to="#" className="absolute inset-0 z-10">
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://images.unsplash.com/photo-1571166287099-1aebd20bb737?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Adventure Apparel"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">
                Adventure Apparel
              </h3>
              <p className="text-sm leading-snug">
                Durable clothing and footwear for outdoor activities.
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link to="#" className="absolute inset-0 z-10">
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://plus.unsplash.com/premium_photo-1661311950994-d263ea9681a1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Navigation Tools"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">
                Navigation Tools
              </h3>
              <p className="text-sm leading-snug">
                Maps, compasses, and GPS devices for explorers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
