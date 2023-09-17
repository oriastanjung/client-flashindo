import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleContactClick = () => {
    const phoneNumber = "6281234567890";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    window.open(whatsappURL, "_blank");
  };
  const navigation = useNavigate();
  const onClickBTNDetail = (e) => {
    e.preventDefault();
    navigation(`/detail/${input}`);
  };

  return (
    <>
      <main className="w-full h-screen relative bg-bgColor text-center pt-[10%]">
        <h1 className="text-customBlack font-bold text-4xl sm:pt-10 pt-6">
          Flashindo Computer
        </h1>
        <p className="text-customBlack font-normal text-xl md:text-3xl pt-10 mt-6">
          Lihat Service-an anda Disini!
        </p>
        <form onSubmit={onClickBTNDetail}>
          <SearchBar
            isRequired
            placeholder={"Masukkan kode service disini!"}
            value={input}
            onChange={handleChange}
          />
          <Button type={"submit"}>Lihat Disini</Button>
        </form>
        <div>
          <p className="mt-6 text-primaryBlue">
            Lupa kode service?
            <span
              className="underline cursor-pointer"
              onClick={handleContactClick}
            >
              {" "}
              Hubungi kami
            </span>
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
