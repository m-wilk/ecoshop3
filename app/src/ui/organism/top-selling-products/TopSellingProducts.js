import Vegetable1 from "../../../assets/img/p-img-5.png";
import Image from "../../atoms/imagine/Image";

const TopSellingProducts = () => {
  return (
    <div className="container py-16">
      {/* title ith link */}
      <div className="flex items-center justify-between mb-7">
        <h4 className="text-3xl font-bold">Top Selling Prodcuts</h4>
        <a className="font-bold relative underline-effect" href="#">
          View All
        </a>
      </div>
      <div className="grid grid-rows-2 xl:grid-cols-3 lg:grid-cols-2 gap-8">
        {/* product item */}
        <div className="flex items-center  justify-center gap-8 shadow-10xl bg-white rounded  hover:border hover:border-primary relative group overflow-hidden">
          {/* hidden product cart links from left*/}
          <div className="flex flex-col items-start justify-start gap-3 absolute top-6 left-0 -translate-x-full group-hover:translate-x-6 duration-500 z-50">
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-tab"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-heart"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-loop2"></span>
            </a>
          </div>
          <Image
            className="w-48 transform transition duration-500 hover:scale-110"
            src={Vegetable1}
          />
          <div className="flex flex-col items-start justify-center flex-1 p-3">
            {/* rating stars */}
            <div className="flex justify-center">
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
            </div>
            <a href="#" className="text-xl font-bold pt-3 pb-3">
              Fresh Red Tomatos
            </a>
            <div className="font-bold flex gap-3 text-xl">
              <span className="line-through text-gray-500">$12.99</span>
              <span className="text-red-500">$6.99</span>
            </div>
            {/* button with plus*/}
            <a
              className="bg-medium-green text-primary font-bold py-3 rounded  mt-4 text-center w-full hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-plus text-sm mr-2"></span>
              Add To Cart
            </a>
          </div>
        </div>
        {/* product item */}
        <div className="flex items-center  justify-center gap-8 shadow-10xl bg-white rounded p-3 hover:border hover:border-primary relative group overflow-hidden">
          {/* hidden product cart links from left*/}
          <div className="flex flex-col items-start justify-start gap-3 absolute top-6 left-0 -translate-x-full group-hover:translate-x-6 duration-500 z-50">
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-tab"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-heart"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-loop2"></span>
            </a>
          </div>
          <Image
            className="w-48 transform transition duration-500 hover:scale-110"
            src={Vegetable1}
          />
          <div className="flex flex-col items-start justify-center flex-1 p-3">
            {/* rating stars */}
            <div className="flex justify-center">
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
            </div>
            <a href="#" className="text-xl font-bold pt-3 pb-3">
              Fresh Red Tomatos
            </a>
            <div className="font-bold flex gap-3 text-xl">
              <span className="line-through text-gray-500">$12.99</span>
              <span className="text-red-500">$6.99</span>
            </div>
            {/* button with plus*/}
            <a
              className="bg-medium-green text-primary font-bold py-3 rounded  mt-4 text-center w-full hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-plus text-sm mr-2"></span>
              Add To Cart
            </a>
          </div>
        </div>
        {/* product item */}
        <div className="flex items-center  justify-center gap-8 shadow-10xl bg-white rounded p-3 hover:border hover:border-primary relative group overflow-hidden">
          {/* hidden product cart links from left*/}
          <div className="flex flex-col items-start justify-start gap-3 absolute top-6 left-0 -translate-x-full group-hover:translate-x-6 duration-500 z-50">
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-tab"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-heart"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-loop2"></span>
            </a>
          </div>
          <Image
            className="w-48 transform transition duration-500 hover:scale-110"
            src={Vegetable1}
          />
          <div className="flex flex-col items-start justify-center flex-1 p-3">
            {/* rating stars */}
            <div className="flex justify-center">
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
            </div>
            <a href="#" className="text-xl font-bold pt-3 pb-3">
              Fresh Red Tomatos
            </a>
            <div className="font-bold flex gap-3 text-xl">
              <span className="line-through text-gray-500">$12.99</span>
              <span className="text-red-500">$6.99</span>
            </div>
            {/* button with plus*/}
            <a
              className="bg-medium-green text-primary font-bold py-3 rounded  mt-4 text-center w-full hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-plus text-sm mr-2"></span>
              Add To Cart
            </a>
          </div>
        </div>
        {/* product item */}
        <div className="flex items-center  justify-center gap-8 shadow-10xl bg-white rounded p-3 hover:border hover:border-primary relative group overflow-hidden">
          {/* hidden product cart links from left*/}
          <div className="flex flex-col items-start justify-start gap-3 absolute top-6 left-0 -translate-x-full group-hover:translate-x-6 duration-500 z-50">
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-tab"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-heart"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-loop2"></span>
            </a>
          </div>
          <Image
            className="w-48 transform transition duration-500 hover:scale-110"
            src={Vegetable1}
          />
          <div className="flex flex-col items-start justify-center flex-1 p-3">
            {/* rating stars */}
            <div className="flex justify-center">
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
            </div>
            <a href="#" className="text-xl font-bold pt-3 pb-3">
              Fresh Red Tomatos
            </a>
            <div className="font-bold flex gap-3 text-xl">
              <span className="line-through text-gray-500">$12.99</span>
              <span className="text-red-500">$6.99</span>
            </div>
            {/* button with plus*/}
            <a
              className="bg-medium-green text-primary font-bold py-3 rounded  mt-4 text-center w-full hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-plus text-sm mr-2"></span>
              Add To Cart
            </a>
          </div>
        </div>
        {/* product item */}
        <div className="flex items-center  justify-center gap-8 shadow-10xl bg-white rounded p-3 hover:border hover:border-primary relative group overflow-hidden">
          {/* hidden product cart links from left*/}
          <div className="flex flex-col items-start justify-start gap-3 absolute top-6 left-0 -translate-x-full group-hover:translate-x-6 duration-500 z-50">
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-tab"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-heart"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-loop2"></span>
            </a>
          </div>
          <Image
            className="w-48 transform transition duration-500 hover:scale-110"
            src={Vegetable1}
          />
          <div className="flex flex-col items-start justify-center flex-1 p-3">
            {/* rating stars */}
            <div className="flex justify-center">
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
            </div>
            <a href="#" className="text-xl font-bold pt-3 pb-3">
              Fresh Red Tomatos
            </a>
            <div className="font-bold flex gap-3 text-xl">
              <span className="line-through text-gray-500">$12.99</span>
              <span className="text-red-500">$6.99</span>
            </div>
            {/* button with plus*/}
            <a
              className="bg-medium-green text-primary font-bold py-3 rounded  mt-4 text-center w-full hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-plus text-sm mr-2"></span>
              Add To Cart
            </a>
          </div>
        </div>
        {/* product item */}
        <div className="flex items-center  justify-center gap-8 shadow-10xl bg-white rounded p-3 hover:border hover:border-primary relative group overflow-hidden">
          {/* hidden product cart links from left*/}
          <div className="flex flex-col items-start justify-start gap-3 absolute top-6 left-0 -translate-x-full group-hover:translate-x-6 duration-500 z-50">
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-tab"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-heart"></span>
            </a>
            <a
              className="bg-medium-green rounded px-4 py-3 hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-loop2"></span>
            </a>
          </div>
          <Image
            className="w-48 transform transition duration-500 hover:scale-110"
            src={Vegetable1}
          />
          <div className="flex flex-col items-start justify-center flex-1 p-3">
            {/* rating stars */}
            <div className="flex justify-center">
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
            </div>
            <a href="#" className="text-xl font-bold pt-3 pb-3">
              Fresh Red Tomatos
            </a>
            <div className="font-bold flex gap-3 text-xl">
              <span className="line-through text-gray-500">$12.99</span>
              <span className="text-red-500">$6.99</span>
            </div>
            {/* button with plus*/}
            <a
              className="bg-medium-green text-primary font-bold py-3 rounded  mt-4 text-center w-full hover:bg-primary hover:text-white duration-500"
              href="#"
            >
              <span className="icon-plus text-sm mr-2"></span>
              Add To Cart
            </a>
          </div>
        </div>
      </div>
      {/* grocery section */}
      <div className="container mt-16">
        <div className="grid grid-rows-1 md:grid-cols-2 gap-8">
          {/* grocery item */}
          <div className="bg-grocery1 bg-no-repeat bg-cover p-8 h-72">
            <div className="flex flex-col items-start justify-center flex-1">
              <span className="uppercase font-medium mb-2">
                Fresh Vegetables
              </span>
              <h1 className="font-league font-bold text-4xl">
                The 14 Most Nutrient- <br />
                Dense Vegetables
              </h1>
              {/* button with arrow*/}
              <a
                className="group bg-yellow px-8 py-3 rounded slide-effect mt-12 flex items-center gap-3"
                href="#"
              >
                Seller Login
                <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
              </a>
            </div>
          </div>
          {/* grocery item */}
          <div className="bg-grocery1 bg-no-repeat bg-cover p-8 h-72">
            <div className="flex flex-col items-start justify-center flex-1">
              <span className="uppercase font-medium mb-2">
                Fresh Vegetables
              </span>
              <h1 className="font-league font-bold text-4xl">
                The 14 Most Nutrient- <br />
                Dense Vegetables
              </h1>
              {/* button with arrow*/}
              <a
                className="group bg-yellow px-8 py-3 rounded slide-effect mt-12 flex items-center gap-3"
                href="#"
              >
                Seller Login
                <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
