import React from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Home = () => {
  const handleContactClick = () => {
    const phoneNumber = "6281234567890";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-full h-screen relative bg-bgColor text-center pt-6">
      <h1 className="text-customBlack font-bold text-4xl sm:pt-10 pt-6">
        Flashindo Computer
      </h1>
      <p className="text-customBlack font-normal text-3xl pt-10 mt-6">
        Lihat Service-an anda Disini!
      </p>
      <SearchBar />
      <Button />
      <div>
        <p className="mt-6">
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
    </div>
  );
};

export default Home;
