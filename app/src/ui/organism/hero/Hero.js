import Hero1 from "../../../assets/img/hero-img-1.png";
import Hero2 from "../../../assets/img/hero-img-2.png";
import Hero3 from "../../../assets/img/hero-img-3.png";
import Slider from "react-slick";
import Image from "../../atoms/imagine/Image";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <div className="bg-vegetable pt-5">
      <div className="container">
        <Slider {...settings}>
          <div>
            <div className="flex max-lg:flex-col max-lg:flex-col-reverse">
              <div className="flex flex-col items-start justify-center flex-1">
                <span className="uppercase text-primary font-medium text-xl lg:text-3xl  mb-2">
                  Fresh Grocery
                </span>
                <h1 className="text-7xl font-league font-bold">
                  There's you can Buy your all of Grocery Products.
                </h1>
                {/* button with arrow*/}
                <a
                  className="group bg-yellow px-8 py-3 rounded slide-effect mt-4 flex items-center gap-3 max-lg:mb-12"
                  href="#"
                >
                  Seller Login
                  <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
                </a>
              </div>
              <div className="h-[250px] lg:w-[40rem] lg:h-[40rem] flex items-center max-lg:scale-50">
                <Image src={Hero1} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="flex flex-col items-start justify-center flex-1">
                <span className="uppercase text-primary font-medium text-[2rem]  mb-2">
                  Fresh Grocery
                </span>
                <h1 className="text-[4rem] font-league font-bold">
                  We Provide Fresh <br /> and Organic Fruits <br />
                  To Your Door.
                </h1>
                {/* button with arrow*/}
                <a
                  className="group bg-yellow px-8 py-3 rounded slide-effect mt-4 flex items-center gap-3 mb-5"
                  href="#"
                >
                  Seller Login
                  <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
                </a>
              </div>
              <div className="w-[40rem] h-[40rem]  max-lg:scale-75">
                <Image src={Hero2} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="flex flex-col items-start justify-center flex-1">
                <span className="uppercase text-primary font-medium text-[2rem]  mb-2">
                  Fresh Grocery
                </span>
                <h1 className="text-[4rem] font-league font-bold">
                  You Can Buy All <br />
                  the Grocery Items <br /> Hasslefree
                </h1>
                {/* button with arrow*/}
                <a
                  className="group bg-yellow px-8 py-3 rounded slide-effect mt-4 flex items-center gap-3 mb-5"
                  href="#"
                >
                  Seller Login
                  <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
                </a>
              </div>
              <div className="w-[40rem] h-[40rem]  max-lg:scale-75">
                <Image src={Hero3} />
              </div>
            </div>
          </div>
        </Slider>
        {/* hero service section */}
        <div className="flex items-center justify-between bg-primary px-16 py-6 rounded mt-16 flex-wrap gap-8">
          <div className="flex items-center gap-3">
            <span className="icon-clipboard text-white text-3xl"></span>
            <div className="text-white">
              <h5 className="font-bold">Free Shipping</h5>
              <p>When ordering over $100</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="icon-clipboard text-white text-3xl"></span>
            <div className="text-white">
              <h5 className="font-bold">Free Shipping</h5>
              <p>When ordering over $100</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="icon-clipboard text-white text-3xl"></span>
            <div className="text-white">
              <h5 className="font-bold">Free Shipping</h5>
              <p>When ordering over $100</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="icon-clipboard text-white text-3xl"></span>
            <div className="text-white">
              <h5 className="font-bold">Free Shipping</h5>
              <p>When ordering over $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
