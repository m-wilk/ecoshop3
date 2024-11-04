import Category1 from "../../../assets/img/c-img-1.png";
import FrutsImg1 from "../../../assets/img/c-shop-img-1.png";
import Image from "../../atoms/imagine/Image";


const MarketCategory = ({categorieskey}) => {
    return (
        <div className="container py-16">
        {/* title ith link */}
        <div className="flex items-center justify-between mb-7">
          <h4 className="text-3xl font-bold">Market Category</h4>
          <a className="font-bold relative underline-effect" href="#">
            View All
          </a>
        </div>
        {/* category section */}
        <div className="grid grid-rows-1 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
          {categorieskey.map(({ id, name }) => {
            return (
              <div key={id}>
                <div className="flex items-center justify-center bg-light-green h-52 w-full mb-4 rounded-lg border overflow-hidden">
                  <Image
                    className="transform transition duration-500 hover:scale-110"
                    src={Category1}
                  />
                </div>
                <a className="text-xl text-gray-500" href="#">
                  {name}
                </a>
              </div>
            );
          })}
        </div>
        {/* health section */}
        <div className="grid grid-rows-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 pt-16">
          <div className="flex flex-col items-start bg-fruts-green bg-no-repeat bg-cover h-99 px-8 py-4">
            <span className="text-lg mb-4">Fruits</span>
            <h2 className="font-league text-4xl font-bold">
              Healthy & Goods <br /> Fruits
            </h2>
            <a
              className="group bg-primary text-white px-8 py-3 rounded slide-effect mt-4 flex items-center gap-3"
              href="#"
            >
              Seller Login
              <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
            </a>
            <div>
              <Image src={FrutsImg1} />
            </div>
          </div>
          <div className="flex flex-col items-start bg-fruts-green bg-no-repeat bg-cover h-99 px-8 py-4">
            <div>
              <Image src={FrutsImg1} />
            </div>
            <span className="text-lg mb-4">Fruits</span>
            <h2 className="font-league text-4xl font-bold">
              Healthy & Goods <br />
              Fruits
            </h2>
            <a
              className="group bg-primary text-white px-8 py-3 rounded slide-effect mt-4 flex items-center gap-3 mb-4"
              href="#"
            >
              Seller Login
              <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
            </a>
          </div>
          <div className="flex flex-col items-start bg-fruts-green bg-no-repeat bg-cover h-99 p-8 px-8 py-4">
            <span className="text-lg mb-4">Fruits</span>
            <h2 className="font-league text-4xl font-bold">
              Healthy & Goods <br />
              Fruits
            </h2>
            <a
              className="group bg-primary text-white px-8 py-3 rounded slide-effect mt-4 flex items-center gap-3"
              href="#"
            >
              Seller Login
              <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
            </a>
            <div>
              <Image src={FrutsImg1} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default MarketCategory;