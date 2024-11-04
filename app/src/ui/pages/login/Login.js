import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../../atoms/imagine/Image";
import Line from "../../../assets/img/vector-line.png";
import AccountImg from "../../../assets/img/account-img.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // states
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState("");

  // wysyłanie states na server i otrzymanie odpowiedzi
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    axios.post("http://localhost:8100/api/v1/auth/login/", formData).then((response) => {
        console.log("ok zalogowane", response.data);
        navigate("/");
    })
    .catch((error) => {
        if (error.response) {
            setLoginErrors(error.response.data.detail);
        }
    })
  };

  return (
    <div className="py-16 container mb-40">
      <div className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-1 gap-8">
        <div className="col-span-5 px-8 pt-16 pb-40 shadow-xl ">
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <h5 className="text-3xl font-bold">Log In</h5>
              <Image src={Line} />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-400 mb-2">Email Address*</label>
              <input
                className="border border-primary px-6 py-3 rounded focus:outline-none"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 mb-2">Password*</label>
              <input
                className="border border-primary px-6 py-3 rounded focus:outline-none"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="my-4">
              <label>
                <input className="me-3 accent-primary" type="checkbox" />I
                Remember Me
              </label>
            </div>
            <button
              className="text-center text-white bg-primary p-4 rounded"
              href="#"
            >
              Log In
            </button>
            <p className="text-gray-400 mt-3 text-center">
              Dont't have an account ? &nbsp;
              <Link className="font-bold text-black" to="/registration">
                Sign Up Free
              </Link>
            </p>
                {loginErrors ? (<p>{loginErrors}</p>) : null}
          </form>
        </div>
        <div className="col-span-7">
          <div className="my-16 flex items-center justify-center">
            <Image src={AccountImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
