import CategorySlider from "@/components/home/CategorySlider";
import FeaturedProducts from "@/components/home/FeatuerProducts";
import HeroBanner from "@/components/home/HeroBanner";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <CategorySlider />
      <FeaturedProducts />
    </div>
  );
}
