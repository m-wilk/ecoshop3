import Hero from "../../organism/hero/Hero";
import MarketCategory from "../../organism/marker-category/MarketCategory";
import FreshVegetable from "../../organism/fresh-vegetable/FreshVegetable";
import TopSellingProducts from "../../organism/top-selling-products/TopSellingProducts";
import DrinkJuice from "../../organism/drink-juice/DrinkJuice";
import NewArrivals from "../../organism/new-arrivals/NewArrivals";
import PopularSection from "../../organism/popular-section/PopularSection";

const Home = ({productsKay, categorieskey}) => {
  return (
    <>
      <Hero />
      <MarketCategory categorieskey={categorieskey} />
      <FreshVegetable productskey={productsKay} />
      <TopSellingProducts />
      <DrinkJuice drinkskey={productsKay} />
      <NewArrivals />
      <PopularSection />
    </>
  );
};

export default Home;
