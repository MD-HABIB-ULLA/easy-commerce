import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET() {
  const products = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 10, max: 100, dec: 2 }),
    image: faker.image.urlLoremFlickr({ category: "ecommerce" }),
  }));

  return NextResponse.json(products, { status: 200 });
}
