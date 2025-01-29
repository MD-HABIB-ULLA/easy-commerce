import Image from "next/image";
import React from "react";

interface Category {
  name: string;
  image: string;
}

const CategorySlider: React.FC = () => {
  const categories: Category[] = [
    {
      name: "Electronics",
      image: "/images/cat-1.avif",
    },
    {
      name: "Fashion",
      image: "/images/cat-2.avif",
    },
    {
      name: "Home Decor",
      image: "/images/cat-3.avif",
    },
    {
      name: "Toys",
      image: "/images/cat-4.avif",
    },
    {
      name: "Sports",
      image: "/images/cat-5.avif",
    },
    {
      name: "Books",
      image: "/images/cat-6.avif",
    },
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>
        <div className="flex hover:overflow-x-auto overflow-hidden transition-all duration-300 pb-4 space-x-6 scrollbar-custom">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex-none  w-64 cursor-pointer group"
            >
              <div className="relative h-40 border shadow-md rounded-lg overflow-hidden">
                <Image
                  height={1000}
                  width={1000}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-semibold">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategorySlider;
