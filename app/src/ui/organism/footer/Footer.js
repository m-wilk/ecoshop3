import Image from "../../atoms/imagine/Image";
import Logo from "../../../assets/img/logo.png";
import Payment from "../../../assets/img/payment-img.png";

const Footer = () => {
  return (
    <div className="bg-black pt-10 mt-16">
      {/* footer top */}
      <div className="flex items-center justify-center bg-delivery-green bg-no-repeat bg-cover h-[30rem] bg-center -mt-64">
        <div className="container flex items-center justify-center">
          <div className="xl:w-1/6"></div>
          <div className="xl:w-2/6 flex flex-col items-center justify-center">
            <h3 className="text-3xl text-white font-bold">
              Get <span className="text-yellow">20%</span> Off Discount Coupon
            </h3>
            <p className="text-white">by Subscribe our Newsletter</p>
            {/* newslatter */}
            <div className="flex mt-8 w-full">
              <div className="bg-white rounded-l py-4 px-6 flex items-center gap-3 flex-1">
                <span className="icon-envelop text-gray-400 text-xl"></span>
                <input
                  className="focus:outline-none bg-transparent uppercase"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <button className="py-4 px-6 bg-yellow rounded-r" href="#">
                Get the Coupn
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer bootom */}
      <div className="container pt-16">
        <div className="grid grid-rows-1 grid-cols-4 border-b border-gray-800 pb-4">
          <div>
            <Image className="mb-10" src={Logo} />
            <ul className="text-gray-400">
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Track Order
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Delivery & Returns
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Warranty
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-xl">About Us</h4>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Track Order
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Delivery & Returns
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Warranty
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Warranty
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-xl">Useful Links</h4>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Track Order
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Delivery & Returns
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Warranty
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="hover:text-primary hover:border-b hover:border-primary"
                  href="#"
                >
                  Warranty
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-xl">Contact Info</h4>
            <div className="flex items-start gap-4 mb-4">
              <span className="icon-location text-white p-3 border border-gray-400 rounded-full"></span>
              <div>
                <h4 className="text-white font-bold mb-3 text-xl">Address:</h4>
                <p className="text-gray-400">
                  4517 Washington Ave. Manchester,
                  <br /> Kentucky 39495
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <span className="icon-phone1 text-white p-3 border border-gray-400 rounded-full"></span>
              <div>
                <h4 className="text-white font-bold mb-3 text-xl">Phone:</h4>
                <p className="text-gray-400">+880171889547</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <span className="icon-envelop text-white p-3 border border-gray-400 rounded-full"></span>
              <div>
                <h4 className="text-white font-bold mb-3 text-xl">Email:</h4>
                <p className="text-gray-400">Demo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 py-8 text-gray-400">
            <div className="flex items-center gap-3">
              <span className="icon-instagram"></span>
              <span className="icon-facebook"></span>
              <span className="icon-youtube"></span>
            </div>
            <p className="font-bold">
              ©2024 <span className="text-primary">Quomodosoft </span>All rights
              reserved
            </p>
          </div>
          <Image src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
