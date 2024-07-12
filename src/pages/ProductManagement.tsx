import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  stockQuantity: number;
  description: string;
  ratings: number;
}

const products: Product[] = [
  {
    id: 1,
    image: "/placeholder.svg",
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    stockQuantity: 10,
    description:
      "High-quality wireless headphones with noise-cancelling features.",
    ratings: 4.5,
  },
  {
    id: 2,
    image: "/placeholder.svg",
    name: "Leather Backpack",
    price: 79.99,
    category: "Bags",
    stockQuantity: 5,
    description:
      "Genuine leather backpack with multiple compartments and padded straps.",
    ratings: 4.0,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    name: "Outdoor Camping Gear",
    price: 149.99,
    category: "Outdoors",
    stockQuantity: 3,
    description: "Complete set of camping gear for outdoor adventures.",
    ratings: 4.8,
  },
  {
    id: 4,
    image: "/placeholder.svg",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    stockQuantity: 20,
    description: "100% organic cotton t-shirt for everyday wear.",
    ratings: 4.2,
  },
  {
    id: 5,
    image: "/placeholder.svg",
    name: "Smart Home Hub",
    price: 59.99,
    category: "Electronics",
    stockQuantity: 8,
    description:
      "Central hub for controlling smart home devices with voice commands.",
    ratings: 4.6,
  },
];

export default function ProductManagement() {
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const form = useForm<Product>({
    defaultValues: {
      name: "",
      price: 0,
      stockQuantity: 0,
      description: "",
      category: "",
      ratings: 0,
    },
  });

  const handleDelete = (product: Product) => {
    setProductToDelete(product);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      console.log("Deleting product:", productToDelete);
      // Implement actual delete logic here
    }
    setProductToDelete(null);
  };

  const onSubmit = (data: Product) => {
    console.log("New product data:", data);
    // Implement actual create logic here
    setIsSheetOpen(false);
    form.reset();
  };

  return (
    <div className="w-full px-4 md:px-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button size="sm">Create New Product</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create New Product</SheetTitle>
              <SheetDescription>
                Fill in the details to add a new product.
              </SheetDescription>
            </SheetHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="stockQuantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stock Quantity</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value, 10))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  rules={{
                    required: "Ratings are required",
                    validate: (value) =>
                      (value >= 0 && value <= 5) ||
                      "Ratings must be between 0 and 5",
                  }}
                  name="ratings"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ratings</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Create Product</Button>
              </form>
            </Form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="w-[100px]">Price</TableHead>
              <TableHead className="w-[150px]">Category</TableHead>
              <TableHead className="w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img
                    src={product.image}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(product)}
                        >
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete the product "
                            {productToDelete?.name}"? This action cannot be
                            undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={confirmDelete}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
