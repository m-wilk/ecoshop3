import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import Hero1 from "../../../assets/img/hero-img-1.png";
import Hero2 from "../../../assets/img/hero-img-2.png";
import Image from "../../atoms/imagine/Image";
import Select from "react-select";
import Profil from "../../../assets/img/aurthor-img-1.png";
import ProductItem from "../../molecules/product-item/ProductItem";
import Bredcrumb from "../../molecules/bredcrumb/Bredcrumb";
import Modal from "react-modal";
import { useParams } from "react-router";

const backendProductImages = [Hero1, Hero2];

const settings = {
  customPaging: function (i) {
    return (
      <div className="border my-4">
        <a>
          <Image
            className="w-[80px] h-[80px] p-2 object-cover"
            src={backendProductImages[i]}
          />
        </a>
      </div>
    );
  },
  dots: true,
  dotsClass: "slick-dots thumb-dots",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "40px",
    width: "400px",
    height: "430px",
  },
};

const ProductDetails = ({
  categoriesOptions,
  databredcrumbsForProductDetails,
  dataproducts,
}) => {
  //wybranie kategorji z select
  const [selectedWeight, setSelectedWeight] = useState();
  const [quantity, setQuantity] = useState(1);
  // przelanczanie sie po tabach
  const [selectedSection, setSelectedSection] = useState("description");
  //c.d wysylanie po cliknieciu wybranej kategorji z select
  const onAddToCartHandler = () => {
    console.log(selectedWeight, quantity);
  };
  // modal
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  // parametry w routerze w tym przypadku (:id)
  const params = useParams();
  console.log(params.id);
  // pobranie jednego produktu na podstawie parametru :id
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8100/api/v1/products/${params.id}`)
      .then((response) => {
        console.log(response.data)
        setProduct(response.data);
      });
  }, [params.id]);

  return (
    <div className="py-16">
      <div className="container">
        <Bredcrumb databredcrumbs={databredcrumbsForProductDetails} />
        <div className="grid grid-row-1 grid-cols-2 gap-8 my-16">
          <div className="slider-container mb-16">
            <Slider {...settings}>
              {backendProductImages.map((image) => {
                return (
                  <div key={image} className="border p-8 relative">
                    <Image src={image} />
                    <div className="bg-yellow px-5 py-7 rounded-full absolute top-8 left-8">
                      <h4 className="font-bold">-50%</h4>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div>
            <span className="uppercase text-gray-400">vegetable</span>
            <h3 className="text-2xl font-bold my-4">{product.title}</h3>
            {/* rating stars */}
            <div>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
              <span className="icon-star-full text-yellow"></span>
            </div>
            <div className="font-bold flex gap-3 text-xl my-4">
              <span className="line-through text-gray-500">$12.99</span>
              <span className="text-red-500">${product.price}</span>
            </div>
            <p>
              {product.description}
            </p>
            <div className="bg-light-green inline-block p-3 rounded-lg font-bold my-4">
              <span>Availabillity: </span>
              <span className="text-primary">132 Products Available</span>
            </div>
            <div>
              <p className="text-primary mb-4">Weight:</p>
              <Select
                value={selectedWeight}
                onChange={(value) => {
                  setSelectedWeight(value);
                }}
                name="selectedCategory"
                options={categoriesOptions}
                placeholder="Select Weight"
                classNames={{
                  control: () => "custom-controller",
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: "1px solid black",
                    boxShadow: "none",
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,

                    padding: "5px",
                    marginLeft: "0",
                    // width: "450px",
                  }),
                  placeholder: (baseStyles, state) => {
                    return {
                      ...baseStyles,
                      color: "#707070",
                    };
                  },

                  option: (baseStyles, state) => {
                    return {
                      ...baseStyles,
                      background: "white",
                      color: "black",
                      "&:hover": {
                        background: "#b7b7b7",
                        color: "#fff",
                      },
                      "&:focus": {
                        background: "#fff",
                      },
                    };
                  },
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    padding: "0",
                    boxShadow: "none",
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    border: "1px solid black",
                    width: "450px",
                  }),
                }}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => (
                    <span className="icon-circle-down me-4"></span>
                  ),
                }}
              />
              <div className="my-4">
                <div className="flex gap-5">
                  <div className="flex gap-5">
                    <div className="border border-primary px-4 py-3 rounded">
                      <span
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                        className="px-2"
                      >
                        -
                      </span>
                      <span className="px-2"> {quantity} </span>
                      <span
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                        className="px-2"
                      >
                        +
                      </span>
                    </div>
                    <div className="border border-primary px-4 py-3 rounded">
                      <span className="icon-heart"></span>
                    </div>
                  </div>

                  {/* button with arrow*/}
                  <button
                    onClick={onAddToCartHandler}
                    className="group bg-primary px-8 py-3 rounded text-white flex items-center justify-center w-full flex-1"
                    href="#"
                  >
                    <span className="group-hover:translate-x-1 transition-all me-3">
                      +
                    </span>
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-400">
                  Category : <span className="text-primary">Kitchen</span>
                </p>
                <p className="text-gray-400">
                  Tags : <span className="text-primary">Beer, Foamer</span>
                </p>
                <p className="text-gray-400">
                  SKU : <span className="text-primary">KE-91039</span>
                </p>
              </div>
              {/* triger button to modal */}
              <button onClick={openModal} className="text-red-600 font-bold">
                <span className="icon-flag me-2"></span>
                <span>Report This Item</span>
              </button>
              <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <h2 className="text-2xl font-bold mb-5">Report Products</h2>
                <button
                  className="absolute top-5 end-5 px-4 py-3 bg-red-500 rounded-full"
                  onClick={closeModal}
                >
                  <span className="icon-cross text-white"></span>
                </button>
                <form>
                  <div>
                    <label className="text-gray-500">
                      {" "}
                      Enter Report Ttile*{" "}
                    </label>
                    <input
                      className="border border-primary px-4 py-3 rounded w-full mt-2 mb-5 focus:outline-none"
                      placeholder="Raports Headline here"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500">
                      {" "}
                      Enter Report Ttile*{" "}
                    </label>
                    <textarea
                      className="border border-primary px-4 py-3 rounded w-full mt-2 mb-5 focus:outline-none"
                      placeholder="Type here"
                    ></textarea>
                  </div>
                </form>
                <button className="bg-primary text-white  px-4 py-3  w-full">
                  Submit Raport
                </button>
              </Modal>
              <div className="flex items-center gap-4 my-4">
                <span>Share This:</span>
                <span className="icon-facebook text-blue-600"></span>
                <span className="icon-pinterest text-red-600"></span>
                <span className="icon-twitter text-blue-300"></span>
              </div>
            </div>
          </div>
        </div>
        {/* product nav and description */}
        <div className="mt-52 mb-16">
          <nav className="flex gap-10 font-bold text-primary border-b">
            <button
              onClick={() => {
                setSelectedSection("description");
              }}
              className={`px-4 py-3 ${
                selectedSection === "description"
                  ? "text-black border-b border-primary"
                  : ""
              }`}
            >
              Description
            </button>
            <button
              onClick={() => {
                setSelectedSection("reviews");
              }}
              className={`px-4 py-3 ${
                selectedSection === "reviews"
                  ? "text-black border-b border-primary"
                  : ""
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => {
                setSelectedSection("sellerinfo");
              }}
              className={`px-4 py-3 ${
                selectedSection === "sellerinfo"
                  ? "text-black border-b border-primary"
                  : ""
              }`}
            >
              Seller Info
            </button>
          </nav>
          <div className="mt-5 mb-16">
            {/* changed tab 1 */}
            {selectedSection === "description" ? (
              <div>
                <h5 className="text-xl font-semibold mb-3">Introduction</h5>
                <p className="text-gray-500 mb-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries but
                  also the on leap into electronic typesetting, remaining
                  essentially unchanged. It wasn’t popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, andei more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum to make
                  a type specimen book.
                </p>
                <h5 className="text-xl font-semibold mb-3">Features :</h5>
                <ul className="list-disc text-gray-500 space-y-3 ms-4">
                  <li>slim body with metal cover</li>
                  <li>
                    latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                  </li>
                  <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                  <li>
                    NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit
                    keyboard, touchpad with gesture support
                  </li>
                </ul>
              </div>
            ) : null}

            {/* /* changed tab 2 */}
            {selectedSection === "reviews" ? (
              <div>
                <h5 className="text-xl font-semibold my-5">Reviews</h5>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-4">
                    <Image src={Profil} />
                    <div>
                      <h5 className="font-bold">Sajjad Hossain</h5>
                      <p className="text-gray-400">London, UK</p>
                    </div>
                  </div>
                  rating stars
                  <div>
                    <span className="icon-star-full text-yellow"></span>
                    <span className="icon-star-full text-yellow"></span>
                    <span className="icon-star-full text-yellow"></span>
                    <span className="icon-star-full text-yellow"></span>
                    <span className="icon-star-full text-yellow"></span>
                  </div>
                </div>
                <p className="mt-5 mb-16 text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the redi 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries but
                  also the on leap into electronic typesetting, remaining
                </p>
              </div>
            ) : null}

            {/* changed tab 3 */}
            {selectedSection === "sellerinfo" ? <div></div> : null}
          </div>
        </div>
      </div>
      {/* product week section */}
      <div className="bg-gray-100">
        <div className="container pt-16 pb-28">
          {/* title ith link */}
          <div className="flex items-center justify-between mb-7">
            <h4 className="text-3xl font-bold">Best Sell in this Week</h4>
            <a className="font-bold relative underline-effect" href="#">
              View All
            </a>
          </div>
          <div className="grid grid-rows-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8">
            {/* product item */}
            {dataproducts.map(({ title, price, id }) => {
              return <ProductItem title={title} price={price} idkey={id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
