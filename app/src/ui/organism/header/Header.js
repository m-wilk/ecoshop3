import SearchCategoriesProduct from "../../molecules/search-categories-product/SearchCategoriesProduct";
import Badge from "../../molecules/badge/Badge";
import Select, { components } from "react-select";
import Image from "../../atoms/imagine/Image";
import Logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";


const Header = ({data}) => {
  return (
    <>
      {/* top-header */}
      <div className="bg-light-green border-light-green border-b">
        <div className="container py-4 font-medium flex justify-between">
          <ul className="flex gap-3">
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul className="flex items-center gap-3 max-lg:hidden">
            <li>
              <a className="flex gap-2 items-center" href="#">
                <span className="icon-phone1 text-primary"></span>
                <span>+ 00645 4568</span>
              </a>
            </li>
            <div className="w-0.5 h-4 bg-gray-400"></div>
            <li>
              <a className="flex gap-2 items-center" href="#">
                <span className="icon-envelop text-primary"></span>
                <span>Youremai@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* center-header */}
      <div className="max-lg:bg-light-green">
        <div className="container py-6 flex items-center justify-between">
          <span className="icon-equalizer lg:hidden"></span>
          <Image src={Logo} />
          <SearchCategoriesProduct
            options={data}
            className="w-1/2 max-lg:hidden"
          />
          <div className="flex items-center gap-5">
            <a className="flex items-center gap-3 relative max-lg:hidden">
              <Badge />
              <span className="icon-spinner10 text-lg"></span>
            </a>
            <a className="flex items-center gap-3 relative max-lg:hidden">
              <Badge />
              <span className="icon-spinner10 text-lg"></span>
            </a>
            <a className="flex items-center gap-3 relative">
              <Badge />
              <span className="icon-spinner10 text-lg"></span>
            </a>
            <a className="flex items-center gap-3 relative max-lg:hidden">
              <Badge />
              <span className="icon-spinner10 text-lg"></span>
            </a>
          </div>
        </div>
      </div>
      {/* bottom-header */}
      <div className="bg-primary max-lg:hidden">
        <div className="container py-4 flex items-center justify-between">
          {/* menu-category-product */}
          <div className="flex items-center">
            <Select
              name="selectedCategory"
              options={data}
              placeholder="All Categories"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: "none",
                  width: "270px",
                  boxShadow: "none",
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                  padding: "8px",
                  marginRight: "3rem",
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
                  width: "270px",
                }),
              }}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => (
                  <span className="icon-circle-down"></span>
                ),
                Control: (props) => {
                  return (
                    <components.Control {...props}>
                      <div className="flex items-center justify-between w-full px-3">
                        <span className="icon-equalizer"></span>
                        {props.children}
                      </div>
                    </components.Control>
                  );
                },
                Option: (props) => {
                  console.log(props);
                  return (
                    <components.Option {...props}>
                      <div className="flex items-center justify-between px-3">
                        <div>
                          <span className={`${props.data.icon} me-3`}></span>
                          {props.children}
                        </div>
                        <span className="icon-arrow-right"></span>
                      </div>
                    </components.Option>
                  );
                },
              }}
            />
            {/* navigation */}
            <ul className="text-white flex item-center gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="/dashboard">User Dashboard</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          {/* button */}
          <Link className="bg-yellow px-8 py-3 rounded slide-effect" to="/registration">
            Seller Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
