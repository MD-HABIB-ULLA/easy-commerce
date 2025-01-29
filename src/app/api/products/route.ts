import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

// Handle GET request with dynamic filters
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const count = Number(searchParams.get("count")) || 50; // Default to 50
  const searchQuery = searchParams.get("search")?.toLowerCase() || ""; // Search term
  const minPrice = Number(searchParams.get("minPrice")) || 0; // Default to 0
  const maxPrice = Number(searchParams.get("maxPrice")) || 100000; // No max limit
  const categoryFilter = searchParams.get("category")?.toLowerCase() || ""; // Category filter

  // Generate Fake Products
  const products = Array.from({ length: count }, () => {
    const price = parseFloat(faker.commerce.price({ min: minPrice, max: maxPrice, dec: 2 }));
    const validPrice = isNaN(price) ? 0 : price;

    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: validPrice,
      category: faker.commerce.department(), // Random category
      image: faker.image.urlLoremFlickr(),
    };
  });

  // Apply Filters (Search, Price, Category)
  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery)
      : true;

    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    const matchesCategory = categoryFilter
      ? product.category.toLowerCase().includes(categoryFilter)
      : true;

    return matchesSearch && matchesPrice && matchesCategory;
  });

  return NextResponse.json(filteredProducts, { status: 200 });
}
