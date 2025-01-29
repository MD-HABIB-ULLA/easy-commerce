"use client";

import { fetchData } from "@/redux/reducers/products";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>(); // Ensure correct dispatch type
  const {
    data: products,
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  console.log(products, status, error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return <div className="text-7xl text-red-500">this is home page</div>;
}
