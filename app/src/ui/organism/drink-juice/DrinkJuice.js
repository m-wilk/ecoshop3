import Image from "../../atoms/imagine/Image";
import Tomato from "../../../assets/img/p-img-1.png";
import ProductItem from "../../molecules/product-item/ProductItem";

const DrinkJuice = ({drinkskey}) => {
  return (
    <div className="bg-vegetable pt-16">
      <div className="container pb-16">
        {/* title ith link */}
        <div className="flex items-center justify-between mb-7">
          <h4 className="text-3xl font-bold">Drinks Juice</h4>
          <a className="font-bold relative underline-effect" href="#">
            View All
          </a>
        </div>
        <div className="grid grid-rows-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8">
           {/* product item */}
         {drinkskey.map((drinkkey) => {
          return (
            <div key={drinkkey.id}>
               <ProductItem title={drinkkey.title} price={drinkkey.price}/>
            </div>
           
          )
         })}
        </div>
      </div>
      {/* best product baner */}
      <div className="bg-bestdeal bg-no-repeat bg-cover max-lg:hidden">
        <div className="container py-16  flex flex-col items-center justify-center text-center">
          <h1 className="font-league font-bold text-6xl">
            Get the best deal for Grocery
          </h1>
          <p>
            You get into the 2k+ best Products in Flash offer with as into the
            find to <br />
            makein shaped sofa for sale.
          </p>
          {/* button with arrow*/}
          <a
            className="group bg-primary text-white px-8 py-3 rounded slide-effect mt-12 flex items-center gap-3"
            href="#"
          >
            Seller Login
            <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DrinkJuice;
