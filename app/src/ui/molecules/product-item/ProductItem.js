import Image from "../../atoms/imagine/Image";
import Tomato from "../../../assets/img/p-img-1.png";
import { Link } from "react-router-dom";

const ProductItem = ({title, price, idkey}) => {
    return (
        
            <div  className="bg-white px-6 py-10 shadow-10xl rounded flex flex-col items-center hover:border hover:border-primary relative group overflow-hidden">
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
              <Link to={`/productdetails/${idkey}`} className="text-xl font-bold pt-3 pb-3">
                {title}
              </Link>
              <div className="font-bold flex gap-3 text-xl">
                <span className="line-through text-gray-500">$12.99</span>
                <span className="text-red-500">${price}</span>
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
          );
    
}

export default ProductItem;