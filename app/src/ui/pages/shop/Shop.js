import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import Select from "react-select";
import ProductItem from "../../molecules/product-item/ProductItem";

const Shop = ({ datashop, dataproducts }) => {
  const [values, setValues] = useState([0, 100]);
  const [fromValue, toValue] = values;
  return (
    <div className="container py-16">
      <div className="grid grid-rows-1 grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="shadow-10xl py-8 px-6">
            <h3 className="pb-6 font-bold">Product Categories</h3>
            {/* checked list */}
            <ul>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
            </ul>
            {/* price range */}
            <div className="my-16">
              <h3 className="pb-6 font-bold">Price Range</h3>
              <Range
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => {
                  return (
                    <div
                      style={{
                        ...props.style,
                        height: "50px",
                        display: "flex",
                        width: "100%",
                        padding: "9px",
                      }}
                    >
                      <div
                        ref={props.ref}
                        style={{
                          height: "5px",
                          width: "100%",
                          borderRadius: "4px",
                          background: getTrackBackground({
                            values,
                            colors: ["#ccc", "#548BF4", "#ccc"],
                            min: 0,
                            max: 100,
                          }),
                          alignSelf: "center",
                        }}
                      >
                        {children}
                      </div>
                    </div>
                  );
                }}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    key={props.key}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      border: "1px solid #444",
                      backgroundColor: "#fff",
                    }}
                  />
                )}
              />
              <p className="pt-4">
                Price: ${fromValue} - ${toValue}
              </p>
            </div>
            <h3 className="pb-6 font-bold">Brands</h3>
            {/* checked list */}
            <ul>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
            </ul>
            <h3 className="pb-6 font-bold mt-16">Weight</h3>
            {/* checked list */}
            <ul>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
              <li className="mb-6">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />
                  Vegetable
                </label>
              </li>
            </ul>
          </div>
          <div className="mt-8 py-8 px-6 bg-seler-black bg-no-repeat bg-cover h-72 rounded text-white">
            <span className="uppercase text-xs">Trendy</span>
            <h3 className="text-4xl font-bold font-league mt-3 mb-10">
              Best wireless <br /> Shoes
            </h3>
            {/* effect podkreslenie oraz poruszenia strzałki */}
            <a
              className="group flex items-center gap-3  relative inline-flex"
              href="#"
            >
              <span>Shop Now</span>
              <span className="icon-circle-right text-lg transition-transform duration-300 group-hover:translate-x-1"></span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        <div className="col-span-9">
          <div className="shadow-10xl p-6 flex items-center justify-between">
            <p>Showing 1–16 of 66 results</p>
            <div className="flex items-center">
              <p>Sort by:</p>
              <Select
                name="selectedCategory"
                options={datashop}
                placeholder="Default"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: "none",
                    boxShadow: "none",
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,

                    marginRight: "2rem",
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
                    boxShadow: " 1px 0px 12px -5px rgba(184, 184, 191, 1)",

                    marginTop: "30px",
                  }),
                }}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => (
                    <span className="icon-circle-down ms-3"></span>
                  ),
                }}
              />
            </div>
          </div>
          {/* product item */}
          <div className="grid grid-flow-row grid-cols-3 gap-8 my-16">
            {dataproducts.map(( dataproduct ) => {
              return <ProductItem title={dataproduct.title} price={dataproduct.price} idkey={dataproduct.id}/>;
            })}
          </div>
          <div className="p-12 flex flex-col items-center justify-center gap-10 rounded bg-deal-green bg-no-repeat bg-cover">
            <h3 className="text-4xl font-bold font-league text-white">
              Get the best deal for Grocery Items
            </h3>
            {/* button with arrow*/}
            <a
              className="group bg-yellow px-8 py-3 rounded slide-effect mt-4 flex items-center gap-3 max-lg:mb-12"
              href="#"
            >
              Shop Now
              <span className="icon-circle-right text-lg group-hover:translate-x-1 transition-all"></span>
            </a>
          </div>
          {/* product item */}
          <div className="grid grid-flow-row grid-cols-3 gap-8 my-16">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
