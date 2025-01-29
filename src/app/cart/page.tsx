"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import { removeFromCart } from "@/redux/reducers/cart";
import {
  ArrowLeft,
  CreditCard,
  Minus,
  Plus,
  Trash2,
  Truck,
} from "lucide-react";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (sum, item) => sum + Number.parseFloat(item.price),
      0
    );
    const newTax = newSubtotal * 0.1; // Assuming 10% tax
    const newTotal = newSubtotal + newTax;

    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newTotal);
  }, [cartItems]);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[64px]">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <span className="text-gray-600">{cartItems.length} items</span>
          </div>

          {/* Cart Items */}
          <div className="mt-8">
            {cartItems.map((item: Product) => (
              <div key={item.id} className="flex py-6 border-b">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  <Image
                    height={1000}
                    width={1000}
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <Link href={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <p className="ml-4">
                        ${parseFloat(item.price).toFixed(2)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 rounded-md hover:bg-gray-100">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium">{1}</span>
                      <button className="p-1 rounded-md hover:bg-gray-100">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      type="button"
                      className="font-medium text-primary/50 hover:text-primary duration-300 transition-colors flex items-center"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="mt-6">
            <Link
              href="/"
              className="flex items-center text-primary/50 hover:text-primary duration-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-sm font-medium text-gray-900">
                ${subtotal.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-sm text-gray-600">Shipping</p>
                <Truck className="h-4 w-4 text-green-500 ml-1" />
              </div>
              <p className="text-sm font-medium text-green-500">Free</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Tax</p>
              <p className="text-sm font-medium text-gray-900">
                ${tax.toFixed(2)}
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-gray-900">
                  Order Total
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center rounded-full transition-colors duration-300 border border-transparent bg-primary  px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:border-primary hover:text-primary"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Proceed to Checkout
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 space-y-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Truck className="h-5 w-5 text-gray-400 mr-2" />
              <p>Free shipping on orders over $100</p>
            </div>
            <p className="text-xs">
              Shipping tax and discount codes are calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
