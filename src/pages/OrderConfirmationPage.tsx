import { Card } from "@/components/ui/card";
import { SVGProps } from "react";
import { Link } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import { clearCart } from "../redux/features/cart/cartSlice";
import { useAppDispatch } from "../redux/hooks";

export default function OrderConfirmationPage() {
  

  const searchParams = new URLSearchParams(window.location.search);
  const name = searchParams.get("name");
  const total = searchParams.get("total");
  const cardNumber = searchParams.get("cardNumber");
  const cardType = searchParams.get("cardType");

  console.log({ name, total, cardNumber, cardType });
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-gray-50 dark:bg-gray-900">
      <Card className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <CircleCheckIcon className="text-green-500 h-16 w-16" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">
            Payment Successful
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Thank you for your payment, {name?.toUpperCase()}. Your order is
            being processed.
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              Amount Paid:
            </span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              ${total}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              Payment Method:
            </span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              {cardType} ending in {cardNumber?.slice(-4)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              Date &amp; Time:
            </span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              {new Date().toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          >
            ← Go Back to Home
          </Link>
        </div>
      </Card>
    </div>
  );
}

function CircleCheckIcon(
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
