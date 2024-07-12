"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SVGProps, SetStateAction, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import { Slider } from "../components/ui/slider";

const products = [
  {
    id: 1,
    name: "Acme Circles T-Shirt",
    description: "60% combed ringspun cotton/40% polyester jersey tee.",
    price: 29.99,
    category: "Clothing",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Gamer Gear Pro Controller",
    description: "High-performance gaming controller with advanced features.",
    price: 59.99,
    category: "Electronics",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Eco Planters",
    description: "Sustainable and stylish indoor plant pots.",
    price: 19.99,
    category: "Home & Garden",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Zest Juicers",
    description: "Powerful juicers for fresh, healthy juices.",
    price: 99.99,
    category: "Kitchen",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Sunset Beach Shorts",
    description: "Quick-dry swim shorts for the beach.",
    price: 39.99,
    category: "Clothing",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Sunset Beach Towel",
    description: "Absorbent cotton towel for the beach.",
    price: 24.99,
    category: "Home & Garden",
    image: "/placeholder.svg",
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = products
      .filter((product) => {
        const nameMatch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const descriptionMatch = product.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const categoryMatch =
          selectedCategories.length === 0 ||
          selectedCategories.includes(product.category);
        const priceMatch =
          product.price >= priceRange[0] && product.price <= priceRange[1];
        return (nameMatch || descriptionMatch) && categoryMatch && priceMatch;
      })
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategories, priceRange, sortOrder]);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(e.target.value);
  };
  const handleCategoryFilter = (category: string) => {
    if (selectedCategories.includes(category as string)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handlePriceFilter = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };
  const handleSort = (order: SetStateAction<string>) => {
    setSortOrder(order);
  };
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSortOrder("asc");
  };
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border rounded-md w-64"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FilterIcon className="w-5 h-5" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedCategories.includes("Clothing")}
                      onCheckedChange={() => handleCategoryFilter("Clothing")}
                    />
                    Clothing
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedCategories.includes("Electronics")}
                      onCheckedChange={() =>
                        handleCategoryFilter("Electronics")
                      }
                    />
                    Electronics
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedCategories.includes("Home & Garden")}
                      onCheckedChange={() =>
                        handleCategoryFilter("Home & Garden")
                      }
                    />
                    Home & Garden
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedCategories.includes("Kitchen")}
                      onCheckedChange={() => handleCategoryFilter("Kitchen")}
                    />
                    Kitchen
                  </Label>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Price Range:{" "}
                  <span className="text-muted-foreground text-sm font-medium">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </h3>
                <Slider
                  value={priceRange}
                  max={200}
                  min={0}
                  step={1}
                  onValueChange={handlePriceFilter}
                  minStepsBetweenThumbs={1}
                />
                <div />
              </div>
              <div className="flex justify-end">
                <Button variant="outline" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <ListOrderedIcon className="w-5 h-5" />
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4 space-y-2">
              <DropdownMenuItem onSelect={() => handleSort("asc")}>
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleSort("desc")}>
                Price: High to Low
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            onClick={() => {
              navigate(`/product/${product.id}`);
            }}
          >
            <img
              src="/placeholder.svg"
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium">
                  ${product.price.toFixed(2)}
                </span>
                <Link
                  to="#"
                  className="text-primary hover:text-primary-foreground"
                >
                  Product Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}
