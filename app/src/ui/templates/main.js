import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../organism/header/Header";
import Footer from "../organism/footer/Footer";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import ProductDetails from "../pages/product-details/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";


// sztuczne dane do breadcrumb
const BreadcrumbsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Shop",
    url: "/shop",
  },
  {
    name: "Product Detail",
    url: null,
  },
];

const BreadcrumbsData2 = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Seller Application",
    url: null,
  },
];

const BreadcrumbsData3 = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Dashboard",
    url: null,
  },
];

const Main = () => {
  //pobieranie danych z serwera lista kategori
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8100/api/v1/common/categories/")
      .then((respons) => {
        setCategories(respons.data);
      });
  }, []);
  console.log(categories);

  // zamiana formatu danych pod wtyczke
  const categoriesOptions = categories.map((categorie) => {
    return {
      value: categorie.id,
      label: categorie.name,
      // dodanie mojego klucza icon
      icon: categorie.icon_name,
    };
  });

  //pobieranie danych z serwera produktów
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8100/api/v1/products/").then((response) => {
      setProducts(response.data);
    });
  }, []);
  console.log(products);

  return (
    <>
      <Header data={categoriesOptions} />
      <Routes>
        <Route path="/" element={ <Home productsKay={products} categorieskey={categories}/> }/>
        <Route path="/shop" element={ <Shop datashop={categoriesOptions} dataproducts={products} />  }/>
        <Route path="/productdetails/:id" element={ <ProductDetails databredcrumbsForProductDetails={BreadcrumbsData} categoriesOptions={categoriesOptions} dataproducts={products}/>  }/>
        <Route path="/registration" element={ <Registration databredcrumbsForRegistration={BreadcrumbsData2}/>}/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/dashboard/*" element={ <Dashboard databredcrumbsForDashbord={BreadcrumbsData3}/> }/>
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
