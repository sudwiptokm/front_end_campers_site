import { useEffect, useState } from "react";
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

import { shallowEqual } from "react-redux";
import { toast } from "sonner";
import UploadcareUploader from "../components/UploadcareUploader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../redux/features/product/productThunk";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ProductTypeWithID } from "../schemas";

export default function ProductManagement() {
  const products = useAppSelector((state) => state.product, shallowEqual);

  const [productToDelete, setProductToDelete] =
    useState<ProductTypeWithID | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [files, setFiles] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] =
    useState<ProductTypeWithID | null>(null);

  const form = useForm<ProductTypeWithID>({
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      description: "",
      category: "",
      rating: 0,
      subtitle: "",
      promotion: undefined,
    },
  });

  useEffect(() => {
    if (files) {
      form.setValue("imgId", files);
    }
  }, [files]);

  useEffect(() => {
    if (!isSheetOpen) {
      setFiles(null);
    }
  }, [isSheetOpen]);

  const dispatch = useAppDispatch();

  const handleDelete = (product: ProductTypeWithID) => {
    setProductToDelete(product);
  };

  // Adding a product
  const addNewProduct = async (productData: Omit<ProductTypeWithID, "_id">) => {
    try {
      await dispatch(addProduct(productData)).unwrap();
      toast.success("Product added successfully");
    } catch (error: any) {
      console.error(`Failed to add product: ${error.message}`);
      toast.error(`Failed to add product: ${error.message}`);
    }
  };

  // Updating a product
  const updateExistingProduct = async (productData: ProductTypeWithID) => {
    try {
      await dispatch(updateProduct(productData)).unwrap();
      toast.success("Product updated successfully");
    } catch (error: any) {
      console.error(`Failed to update product: ${error.message}`);
      toast.error(`Failed to update product: ${error.message}`);
    }
  };

  // Deleting a product
  const confirmDeleteProduct = async (productId: string) => {
    try {
      await dispatch(deleteProduct(productId)).unwrap();
      toast.success("Product deleted successfully");
    } catch (error: any) {
      console.error(`Failed to delete product: ${error.message}`);
      toast.error(`Failed to delete product: ${error.message}`);
    }
  };

  const confirmDelete = async () => {
    if (productToDelete) {
      console.log("Deleting product:", productToDelete);
      confirmDeleteProduct(productToDelete._id);
    }
    setProductToDelete(null);
  };

  const onSubmit = async (data: ProductTypeWithID) => {
    if (editingProduct) {
      console.log("Updating product:", { ...editingProduct, ...data });
      updateExistingProduct(data);
    } else {
      console.log("Creating new product:", data);
      addNewProduct(data);
    }
    setIsSheetOpen(false);
    setEditingProduct(null);
    form.reset();
  };

  const handleEdit = (product: ProductTypeWithID) => {
    setEditingProduct(product);
    form.reset(product);
    setFiles(product.imgId!);
    setIsSheetOpen(true);
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Products ({products.length})</h1>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              size="sm"
              onClick={() => {
                setEditingProduct(null);
                form.reset({
                  name: "",
                  price: 0,
                  stock: 0,
                  description: "",
                  category: "",
                  rating: 0,
                  subtitle: "",
                });
              }}
            >
              Create New Product
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-scroll">
            <SheetHeader>
              <SheetTitle>
                {editingProduct ? "Edit Product" : "Create New Product"}
              </SheetTitle>
              <SheetDescription>
                {editingProduct
                  ? "Edit the details of the existing product."
                  : "Fill in the details to add a new product."}
              </SheetDescription>
            </SheetHeader>
            <div className="pt-6">
              <UploadcareUploader files={files} setFiles={setFiles} />
            </div>
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
                  name="subtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subtitle</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
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
                  name="stock"
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
                    required: "rating are required",
                    validate: (value) =>
                      (value >= 0 && value <= 5) ||
                      "rating must be between 0 and 5",
                  }}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rating</FormLabel>
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
                  name="promotion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Promotion</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(val) => {
                            let value: string = val;
                            if (val === "none") {
                              value = "";
                            }
                            field.onChange(value);
                          }}
                          value={field.value || "none"}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose Promotion" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="top_selling">
                              Top Selling
                            </SelectItem>
                            <SelectItem value="featured">Featured</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  {editingProduct ? "Update Product" : "Create Product"}
                </Button>
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
            {products.map((product, idx) => (
              <TableRow key={product._id || idx}>
                <TableCell>
                  <img
                    src={product.imgId}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="rounded-md object-cover w-12 h-12"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(product)}
                    >
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
