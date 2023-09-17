import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigation = useNavigate()
  const params = useParams()
  const {kode} = params
  return (
    <>
      <header className=" bg-bgColor">
        <h1 onClick={() => navigation("/")} className="cursor-pointer container mx-auto md:px-0 px-5 py-4 text-center md:text-left md:py-12 text-customBlack text-3xl font-bold">
          Flashindo Computer
        </h1>
      </header>
      <main className="bg-bgColor">
        <section className="container mx-auto md:px-0 px-5 flex flex-col items-center gap-5">
          <p className="text-customBlack text-xl">Gambar Progress Service : </p>
          <div className=" rounded-2xl overflow-hidden border-double border-2 p-1 border-primaryBlue">
            <img
              className="w-full h-full rounded-2xl object-cover object-center "
              src="https://www.netcomputer.id/wp-content/uploads/2023/01/servis-laptop.jpg"
              alt=""
            />
          </div>
          <p className="text-customBlack text-xl">
            Status Service :{" "}
            <span className="text-primaryBlue font-semibold">ONPROGRESS</span>
          </p>
        </section>
        <section className="container mx-auto md:px-0 px-5 flex flex-col items-start gap-8 mt-12">
          <div>
            <p className="text-customBlack text-xl">
              Kode Service :{" "}
              <span className="text-customBlack font-semibold">
                {kode}
              </span>
            </p>
          </div>
          <div>
            <p className="text-customBlack text-xl">Service :</p>
            <p className="text-customBlack text-lg font-light">
              PC Computer - Tak bisa masuk windows
            </p>
          </div>
          <div>
            <p className="text-customBlack text-xl">Deskripsi :</p>
            <p className="text-customBlack text-lg font-light">
              Tak bisa masuk windows, loading hitam terus. Kemarin sempat tampil
              tapi lambat kali responnya
            </p>
          </div>
          <div>
            <p className="text-customBlack text-xl">Komentar dari Servicer :</p>
            <p className="text-customBlack text-lg font-light">
              Sedang dicek PC nya, kondisi terakhir hbs mati ga tampil, kemudian
              sudah di tes rupanya RAM bermasalah. Sekarang tampil namun HDD tak
              terbaca. Sedang proses cek HDD komputer consumen
            </p>
          </div>
          <div>
            <p className="text-customBlack text-xl">Biaya Service :</p>
            <p className="text-customBlack text-xl font-bold">
              Rp -
            </p>
          </div>
        </section>
        <section className="container mx-auto md:px-0 px-5 flex flex-col items-center mt-12 ">
          <Button>Chat dan Tanya Pada Kami {">"}</Button>
          <Button onClick={() => navigation("/")} isInfo>Cek Service Lainnya {">"}</Button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Detail;
