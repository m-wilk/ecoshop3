import { useState } from "react";
import axios from "axios";
import Bredcrumb from "../../molecules/bredcrumb/Bredcrumb";
import Image from "../../atoms/imagine/Image";
import Upload from "../../../assets/img/upload.png";
import Sallers from "../../../assets/img/sallers-cover.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Registration = ({ databredcrumbsForRegistration }) => {
  // input upload logo
  const [logo, setLogo] = useState();
  const onLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };
  // input upload cover
  const [cover, setCover] = useState();
  const onCoverChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCover(URL.createObjectURL(e.target.files[0]));
    }
  };
  
  //  states
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [registerErrors, setRegisterErrors] = useState({});

  // wysyłanie states na server i otrzymanie odpowiedzi
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name,
      surname,
      email,
      password,
      password2,
    };
    axios
      .post("http://localhost:8100/api/v1/auth/register/", formData)
      .then((response) => {
        console.log("ok", response.data);
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          setRegisterErrors(error.response.data);
        }
      });
  };

  return (
    <div className="pb-16">
      <div className="bg-vegetable py-16">
        <div className="container">
          <Bredcrumb databredcrumbs={databredcrumbsForRegistration} />
          <div className="flex items-center justify-center font-bold">
            <h1 className="text-3xl">Become A Seller!</h1>
          </div>
        </div>
      </div>
      {/* seller application section */}
      <div className="py-16 container">
        <div className="grid grid-rows-1 grid-cols-12 shadow-xl gap-10 px-8 py-16">
          <div className="col-span-7">
            <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
              <h5 className="font-bold text-xl">Seller Information</h5>
              <p className="text-gray-400 mb-4">
                Fill the form below or write us We will help you as soon as
                possible
              </p>
              <div className="flex flex-col">
                <label className="text-gray-400 mb-2">Name*</label>
                <input
                  className="border border-primary px-6 py-3 rounded"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {Array.isArray(registerErrors.name)
                  ? registerErrors.name.map((error) => {
                      return <p>{error}</p>;
                    })
                  : null}
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 mb-2">Surname*</label>
                <input
                  className="border border-primary px-6 py-3 rounded"
                  type="tel"
                  placeholder="Surname*"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                />
                {Array.isArray(registerErrors.surname)
                  ? registerErrors.surname.map((error) => {
                      return <p>{error}</p>;
                    })
                  : null}
              </div>
              <h5 className="font-bold text-xl mt-8">Shop Information</h5>
              <p className="text-gray-400 mb-4">
                Fill the form below or write us We will help you as soon as
                possible
              </p>
              <div className="flex flex-col">
                <label className="text-gray-400 mb-2">Email Adress*</label>
                <input
                  className="border border-primary px-6 py-3 rounded"
                  type="email"
                  placeholder="Enter your Email Adress"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {Array.isArray(registerErrors.email)
                  ? registerErrors.email.map((error) => {
                      return <p>{error}</p>;
                    })
                  : null}
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 mb-2">Password*</label>
                <input
                  className="border border-primary px-6 py-3 rounded"
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {Array.isArray(registerErrors.password2)
                  ? registerErrors.password.map((error) => {
                      return <p>{error}</p>;
                    })
                  : null}
                {/* sprawdzenie czy hasła sa takie same przed wyslaniem na serwer */}
                {password !== password2 ? <p>password isn't the same</p> : null}
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 mb-2">Repead Password*</label>
                <input
                  className="border border-primary px-6 py-3 rounded"
                  type="password"
                  placeholder="Repead Password"
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                />
              </div>
              <div className="my-4">
                <label>
                  <input className="me-3 accent-primary" type="checkbox" />I
                  agree all terms and condition in EcoShop
                </label>
              </div>
              <button
                className="text-center text-white bg-primary p-4 rounded w-3/4"
                href="#"
              >
                Create Seller Account
              </button>
              <span className="text-gray-400">
                Already have an Account? &nbsp;
                <Link className="font-bold text-black" to="/login">
                  Log in
                </Link>
              </span>
            </form>
          </div>
          <div className="col-span-5">
            <div className="mt-10">
              <h5 className="font-bold text-xl mb-3">Update Logo</h5>
              <p className="text-gray-400">
                Profile of at least Size300x300. Gifs work too.Max 5mb.
              </p>
              <div className="flex items-center justify-center mt-5 relative">
                <Image
                  className="rounded-full w-40 h-40 border border-primary"
                  src={logo || Upload}
                />
                <label className="px-3 py-2 bg-primary rounded-full absolute bottom-[5px] end-[220px]">
                  <span className="icon-pencil text-white"></span>
                  <input
                    onChange={onLogoChange}
                    className="hidden"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </label>
              </div>
            </div>
            <div className="mt-10">
              <h5 className="font-bold text-xl mb-3">Update Cover</h5>
              <p className="text-gray-400">Cover of at least Size 1170x920.</p>
              <div className="flex items-center justify-center mt-5 relative">
                <Image
                  className="w-100 h-50 rounded border border-primary"
                  src={cover || Sallers}
                />
                <label className="px-3 py-2 bg-primary rounded-full absolute bottom-[-15px] end-[50px]">
                  <span className="icon-pencil text-white"></span>
                  <input
                    onChange={onCoverChange}
                    className="hidden"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
