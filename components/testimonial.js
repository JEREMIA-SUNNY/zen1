import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Testimonials() {
  const stuff = [
    {
      text: "exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "John Doe",
      position: "Co-Founder",
      company: "Accenture",
      logo: "/clients/client1.jpg",
      id: 1,
    },
    {
      text: "exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "lord",
      position: "President",
      company: "Atos",
      logo: "/clients/client2.jpg",
      id: 2,
    },
    {
      text: " incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "John Doe",
      position: "Founder & CEO",
      company: "Hcl",
      logo: "/clients/client3.jpg",
      id: 3,
    },
    {
      text: "cidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "John Doe",
      position: "Founder & CEO",
      company: "capgemini",
      logo: "/clients/client4.jpg",
      id: 4,
    },
    {
      text: " exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "John Doe",
      position: "Founder & CEO",
      company: "Wipro",
      logo: "/clients/client5.jpg",
      id: 5,
    },
    {
      text: " exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "John Doe",
      position: "Founder & CEO",
      company: "Arqaam",
      logo: "/clients/client6.jpg",
      id: 6,
    },
  ];

  return (
    <section className="text-black md:pt-14 md:pb-10 pt-7 pb-5  bg-white body-font">
      <div className="container px-5  mx-auto">
        <div className="flex gap-4 justify-center mb-14">
         
          <h1 className="text-3xl capitalize lg:text-4xl text-black  text-center">
           What Our Customers Say
          </h1>
          
        </div>
        <div className="flex flex-wrap -m-4  justify-center mt-10 mb-10 ">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            breakpoints={{
              769: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {
                 
                },
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {
                 
                },
              },
            }}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={true}
            speed={800}
          >
            {stuff.map(({ text, id, logo, company, position }) => (
              <SwiperSlide key={id}>
                <div className="w-full  flex flex-col justify-around h-[550px] shadow-lg border border-gray-400">
                  <div className="bg-green-50 p-6 rounded-lg ">
                    <div className="h-16 w-full relative cursor-pointer">
                      <Image
                        layout="fill"
                        alt=""
                        src={logo}
                        className="absolute inset-0 object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-black text-center mt-14 ">{text}</p>
                    </div>
                  </div>
                  <div>
                    
                    <p className="text-center  mt-4">{company}</p>
                    <p className="text-center text-sm">{position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
