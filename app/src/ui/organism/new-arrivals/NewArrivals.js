import Image from "../../atoms/imagine/Image";
import Tomato from "../../../assets/img/p-img-1.png";

const NewArrivals = () => {
    return (
        <div className="bg-vegetable py-16">
        <div className="container">
          {/* title ith link */}
          <div className="flex items-center justify-between mb-7">
            <h4 className="text-3xl font-bold">New Arrivals</h4>
            <a className="font-bold relative underline-effect" href="#">
              View All
            </a>
          </div>
          <div className="grid grid-rows-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            </div>{" "}
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            </div>{" "}
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            </div>{" "}
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            </div>{" "}
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
            </div>{" "}
            {/* product item */}
            <div className="bg-white px-6 py-10 shadow-sm rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
              <Image
                className="mb-4 transform transition duration-500 hover:scale-110"
                src={Tomato}
              />
              {/* hidden product cart links end*/}
              <div className="flex flex-col items-end justify-start gap-3 absolute top-6 end-0 translate-x-full group-hover:-translate-x-6 duration-500">
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
        {/* info product baner */}
        <div className="container py-16 bg-pineapple bg-no-repeat bg-cover max-lg:hidden mt-16">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-league font-bold text-6xl text-white">
              Get the best deal for Modern Grocery
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
    );
}

export default NewArrivals;