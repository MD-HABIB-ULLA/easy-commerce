import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

// Handle GET request and return a fixed list of products
export async function GET() {
  const products = Array.from({ length: 50 }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price({ min: 10, max: 500, dec: 2 })),
    category: faker.commerce.department(),
    image: faker.image.urlLoremFlickr(),
  }));

  return NextResponse.json(products, { status: 200 });
}
