import Countdown from "react-countdown";
import ProductItem from "../../molecules/product-item/ProductItem";

const FreshVegetable = ({ productskey }) => {
  return (
    <div className="bg-vegetable">
      <div className="container py-16">
        {/* title ith link */}
        <div className="flex items-center justify-between mb-7">
          <h4 className="text-3xl font-bold">Fresh Vegetable</h4>
          <a className="font-bold relative underline-effect" href="#">
            View All
          </a>
        </div>
        <div className="grid grid-rows-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {/* product item */}
          {productskey.map((productkey) => {
            return (
              <div key={productkey.id}>
                <ProductItem
                  title={productkey.title}
                  price={productkey.price}
                />
              </div>
            );
          })}
        </div>
        {/* Flash sale section */}
        <div className="py-16 container">
          <div className="bg-sale bg-no-repeat bg-cover p-12">
            <Countdown
              renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) {
                  return <p>Koniec promocji ! </p>;
                }
                return (
                  <div className="flex gap-4 mb-8">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center justify-center bg-white h-24 w-24 rounded-full">
                        <span className="text-3xl text-red-500 font-bold">
                          {days}
                        </span>
                      </div>
                      <span className="text-xl">Days</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center justify-center bg-white h-24 w-24 rounded-full">
                        <span className="text-3xl text-blue-400 font-bold">
                          {hours}
                        </span>
                      </div>
                      <span className="text-xl">Hours</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center justify-center bg-white h-24 w-24 rounded-full">
                        <span className="text-3xl text-green-500 font-bold">
                          {minutes}
                        </span>
                      </div>
                      <span className="text-xl">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center justify-center bg-white h-24 w-24 rounded-full">
                        <span className="text-3xl text-red-500 font-bold">
                          {seconds}
                        </span>
                      </div>
                      <span className="text-xl">Seconds</span>
                    </div>
                  </div>
                );
              }}
              date={Date.now() + 88400000}
            />
            <div className="flex flex-col items-start relative">
              <h2 className="text-6xl font-league font-bold">
                WOO! Flash Sale
              </h2>
              <p className="text-xl">
                You get into the 2k+ best Products in br Flash offer with as in{" "}
                <br />
                shaped sofa for sale.
              </p>
              {/* button with arrow*/}
              <a
                className="group bg-primary text-white px-8 py-3 rounded slide-effect mt-4 flex items-center gap-3 mt-8"
                href="#"
              >
                Shop Now
                <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
              </a>
              <h3 className="absolute flex flex-col items-center justify-center bottom-0 end-10 bg-yellow h-36 w-36 rounded-full">
                <p className="text-4xl font-bold">26%</p>
                <p className="text-2xl">OFF</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshVegetable;
