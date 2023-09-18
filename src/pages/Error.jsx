import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";

function Error() {
  const params = useParams();
  const { kode } = params;
  const navigation = useNavigate();

  return (
    <>
      <header className=" bg-bgColor">
        <h1
          onClick={() => navigation("/")}
          className="cursor-pointer container mx-auto md:px-0 px-5 py-4 text-center md:text-left md:py-12 text-customBlack text-3xl font-bold"
        >
          Flashindo Computer
        </h1>
      </header>
      <main className="h-screen bg-bgColor flex flex-col justify-center items-center px-5">
        <p className="text-customBlack text-xl">
          Tidak Ada Service Dengan Kode {kode}
        </p>
        <section className="container mx-auto md:px-0 px-5 flex flex-col items-center mt-12 ">
          <Button onClick={() => navigation("/")} isInfo>
            Cek Service Lainnya {">"}
          </Button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Error;
