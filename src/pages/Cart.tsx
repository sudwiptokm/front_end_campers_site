import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

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
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import {
  CartItem,
  decrementQuantity,
  incrementQuantity,
  removeProductFromCart,
  updateQuantityByAmount,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   stock: number;
//   image: string;
// }

// const initialCartItems: CartItem[] = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     price: 99.99,
//     quantity: 1,
//     stock: 10,
//     image: "/placeholder.svg",
//   },
//   {
//     id: 2,
//     name: "Leather Backpack",
//     price: 79.99,
//     quantity: 2,
//     stock: 5,
//     image: "/placeholder.svg",
//   },
//   {
//     id: 3,
//     name: "Smart Home Hub",
//     price: 59.99,
//     quantity: 1,
//     stock: 0,
//     image: "/placeholder.svg",
//   },
// ];

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cart_items = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    setCartItems(cart_items);
    console.log(cart_items);
  }, [cart_items]);

  const [cartItems, setCartItems] = useState<CartItem[]>(cart_items);
  const [itemToRemove, setItemToRemove] = useState<CartItem | null>(null);

  const removeItem = (item: CartItem) => {
    setItemToRemove(item);
  };

  const confirmRemove = () => {
    if (itemToRemove) {
      // setCartItems((items) =>
      //   items.filter((item) => item._id !== itemToRemove._id)
      // );
      dispatch(removeProductFromCart(itemToRemove));
      setItemToRemove(null);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const isOutOfStock = cartItems.some((item) => item.stock === 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.imgId}
                        alt={item.name}
                        className="w-12 h-12 rounded-md"
                      />
                      <span>
                        {item.name} <br />{" "}
                        {item.stock === 0 ? (
                          <span className="text-destructive text-xs">
                            (Out of Stock)
                          </span>
                        ) : (
                          <span className="text-muted-foreground text-xs">
                            Stock: {item.stock}
                          </span>
                        )}{" "}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => dispatch(decrementQuantity(item))}
                        disabled={item.quantity <= 1}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateQuantityByAmount({
                              payload: item,
                              amount:
                                parseInt(e.target.value) > item.stock
                                  ? item.stock
                                  : parseInt(e.target.value) < 1
                                  ? 1
                                  : parseInt(e.target.value),
                            })
                          )
                        }
                        className="w-16 text-center"
                        min={1}
                        max={item.stock}
                      />
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => dispatch(incrementQuantity(item))}
                        disabled={
                          item.quantity === item.stock || item.stock === 0
                        }
                      >
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    ${(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => removeItem(item)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Confirm Removal</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to remove "{item.name}" from
                            your cart?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={confirmRemove}>
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>
                    {" "}
                    <span className="text-muted-foreground text-[10px]">
                      {calculateTotal() > 199.99 ? "(Free Shipping)" : ""}
                    </span>{" "}
                    ${calculateTotal() > 199.99 ? "0.00" : "9.99"}
                  </span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                disabled={isOutOfStock || cartItems.length === 0}
                onClick={() => navigate("/checkout")}
              >
                {isOutOfStock ? "Some Items Out of Stock" : "Place Order"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
