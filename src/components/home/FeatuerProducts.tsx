"use client";
import { addToCart } from "@/redux/reducers/cart";
import { fetchData } from "@/redux/reducers/products";
import { AppDispatch, RootState } from "@/redux/store";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast"; // Import react-hot-toast
import Link from "next/link";

const FeaturedProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Ensure correct dispatch type
  const {
    data: products,
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin border-t-4 border-primary border-solid w-16 h-16 rounded-full"></div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center h-96 text-red-500">
        <p>Error loading products: {error}</p>
      </div>
    );
  }

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} has been added to the cart!`, {
      position: "top-center",
      duration: 3000,
      // Tailwind styling
    });
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Products
          </h2>
          <button className="text-primary hover:text-primary-dark font-semibold">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {products?.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white flex flex-col rounded-2xl border shadow-md overflow-hidden group"
            >
              <Link
                href={`/products/${product.id}`}
                className="relative md:h-64 xl:h-44 lg:h-36 h-32 cursor-pointer"
              >
                <Image
                  height={1000}
                  width={1000}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-4 flex-1 flex justify-end flex-col">
                <Link
                  href={`/products/${product.id}`}
                  className="md:text-lg text-base font-semibold cursor-pointer text-gray-900"
                >
                  {product.name}
                </Link>
                <p className="text-gray-600 md:text-base text-sm mt-1">
                  ${product.price}
                </p>
                <button
                  onClick={() => handleAddToCart(product)} // Add to Cart button
                  className="md:mt-4 mt-2 w-full bg-primary hover:bg-white hover:text-primary duration-300 hover:border-primary border border-transparent text-white py-2 rounded-full hover:bg-primary-dark transition-colors text-sm md:text-base"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
