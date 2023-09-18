import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTask } from "../api/services/task";
import { Bars } from "react-loader-spinner";

const Detail = () => {
  const navigation = useNavigate();
  const params = useParams();
  const { kode } = params;
  const fetchTask = async () => {
    const data = await getOneTask(kode);
    if (data.code === "ERR_BAD_REQUEST") {
      throw new Error("Failed to fetch task data");
    }
    return data.data;
  };

  //realtime fetching after 7 seconds
  const {
    data: task,
    isLoading,
    isError,
  } = useQuery(["tasks", kode], fetchTask, {
    staleTime: 5000,
    refetchInterval: 15000,
  });

  if (isLoading) {
    return (
      <>
        <main className="bg-bgColor h-screen flex justify-center items-center w-full">
          <Bars
            height="80"
            width="80"
            color="#4353AA"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </main>
      </>
    );
  }

  if (isError) {
    navigation(`/error/${kode}`);
  }
  const sendMessageToWA = () => {
    if (task) {
      // Replace with the phone number you want to send the message to
      const phoneNumber = `+${import.meta.env.VITE_APP_PHONE_NUMBER}`;

      // Construct the WhatsApp URL with the phone number and message
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        `Halo *Flashindo Computer*\nSaya ingin bertanya terkait service an saya dengan data berikut\n\nNama Konsumen : ${task.nama_consumen}\nNo Telpon Konsumen: ${task.no_telp_consumen}\nBarang yang diservice : ${task.nama_barang}\nKode: ${task.kode_task}\nService: ${task.title}\nDeskripsi: ${task.deskripsi}\nStatus Terakhir : ${task.status}\n\nSaya ingin bertanya `
      )}`;

      // Open the WhatsApp chat in a new tab or window
      window.open(whatsappURL, "_blank");
    }
  };
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
      <main className="bg-bgColor">
        {task && (
          <>
            <section className="container mx-auto md:px-0 px-5 flex flex-col items-center gap-5">
              <p className="text-customBlack text-xl">
                Gambar Progress Service :{" "}
              </p>
              <div className=" rounded-2xl overflow-hidden border-double border-2 p-1 border-primaryBlue">
                {task.gambar_service ? (
                  <img
                    className="w-[35rem] h-full rounded-2xl object-cover object-center "
                    src={`${task.gambar_service_URL}`}
                    alt={`${task.title}`}
                  />
                ) : (
                  <p className="text-customBlack text-xl">
                    Belum ada gambar service terbaru.
                  </p>
                )}
              </div>
              <p className="text-customBlack text-xl">
                Status Service :{" "}
                <span className="text-primaryBlue font-semibold uppercase">
                  {task.status}
                </span>
              </p>
            </section>
            <section className="container mx-auto md:px-0 px-5 flex flex-col items-start gap-8 mt-12">
              <div>
                <p className="text-customBlack text-xl">
                  Kode Service :{" "}
                  <span className="text-customBlack font-semibold">{kode}</span>
                </p>
              </div>
              <div>
                <p className="text-customBlack text-xl">Service :</p>
                <p className="text-customBlack text-lg font-light">
                  {task.title}
                </p>
              </div>
              <div>
                <p className="text-customBlack text-xl">Deskripsi :</p>
                <p className="text-customBlack text-lg font-light">
                  {task.deskripsi}
                </p>
              </div>
              <div>
                <p className="text-customBlack text-xl">
                  Komentar dari Servicer :
                </p>
                <p className="text-customBlack text-lg font-light">
                  {task.komentar_service ? task.komentar_service : "-"}
                </p>
              </div>
              <div>
                <p className="text-customBlack text-xl">Biaya Service :</p>
                <p className="text-customBlack text-xl font-bold">
                  Rp {task.harga_service ? task.harga_service : "-"}
                </p>
              </div>
            </section>
          </>
        )}

        <section className="container mx-auto md:px-0 px-5 flex flex-col items-center mt-12 ">
          <Button onClick={sendMessageToWA}>
            Chat dan Tanya Pada Kami {">"}
          </Button>
          <Button onClick={() => navigation("/")} isInfo>
            Cek Service Lainnya {">"}
          </Button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Detail;
