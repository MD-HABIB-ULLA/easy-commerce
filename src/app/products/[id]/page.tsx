"use client";

import type React from "react";
import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  ChevronDown,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import { addToCart } from "@/redux/reducers/cart";
import toast from "react-hot-toast";
import { Product } from "@/types/product";
import Image from "next/image";

const ProductDetail: React.FC = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useDispatch();

  const { data: products } = useSelector((state: RootState) => state.products);

  const product: Product | undefined = products.find(
    (p: Product) => p.id === id
  );

  const [quantity, setQuantity] = useState<number>(1);
  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    useState<boolean>(false);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} has been added to the cart!`, {
      position: "top-center",
      duration: 3000,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-[64px] sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              height={1000}
              width={1000}
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-500">{product.category}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-500">(128 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${(Number.parseFloat(product.price) * 1.2).toFixed(2)}
            </span>
            <span className="px-2.5 py-0.5 text-sm font-semibold text-red-700 bg-red-100 rounded-full">
              Save 20%
            </span>
          </div>

          {/* Description */}
          <div>
            <button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="flex items-center justify-between w-full py-2 text-left"
            >
              <span className="font-medium text-gray-900">Description</span>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform ${
                  isDescriptionExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`mt-2 text-gray-600 transition-all ${
                isDescriptionExpanded ? "block" : "hidden"
              }`}
            >
              <p>{product.description}</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-3 px-4 rounded-full hover:bg-white border border-transparent hover:border-primary hover:text-primary duration-300 transition-colors flex items-center justify-center space-x-2 "
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 py-3 px-4 border rounded-md hover:bg-gray-50 transition-colors">
                <Heart className="h-5 w-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-3 px-4 border rounded-md hover:bg-gray-50 transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="border-t pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-gray-400" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-gray-400" />
                <span className="text-sm text-gray-600">2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-gray-400" />
                <span className="text-sm text-gray-600">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
