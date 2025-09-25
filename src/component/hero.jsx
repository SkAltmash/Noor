import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FaAndroid, FaGooglePlay } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/Noor/hero1.jpg",
  },
  {
    image: "/Noor/hero2.jpg",
  },
  {
    image: "/Noor/hero3.jpg",
  },
  {
    image: "/Noor/hero4.jpg",
  },
  {
    image: "/Noor/hero5.jpg",
  },
  {

    image: "/Noor/hero6.jpg",
  },
  {
    image: "/Noor/hero7.jpg",
  },
  {
    image: "/Noor/hero8.jpg",
  },
  {

    image: "/Noor/hero9.jpg",
  },

];

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 4, md: 8 },
        px: 2,
        py: { xs: 6, md: 0 },
        background: "linear-gradient(to bottom, #22C55E , #ffffff)",
      }}
    >


      <Box

        sx={{ width: { xs: "100%", md: "60%" }, height: "100%" }}>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ width: "100%", height: "100%" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  minHeight: { xs: "70vh", md: "100vh" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  px: 2,
                  py: { xs: 4, md: 8 },
                }}
              >
                {/* Phone mockup with a style that helps with layering */}
                <Box
                  component="img"
                  src={slide.image}
                  alt={slide.title}
                  sx={{
                    maxHeight: { xs: "300px", md: "500px" },
                    width: "auto",
                    objectFit: "cover",
                    mb: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />


              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "30%" },
        }}
      >
        <div className="flex flex-col md:flex-row gap-3">
          <Toaster position="bottom-center" reverseOrder={false} />

          {/* APK Button */}
          <a
            href="/Noor-v1.apk"
            download
            className="flex items-center justify-center gap-2 bg-black text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            <FaAndroid className="text-green-400 text-xl" />
            <span>Download APK</span>
          </a>

          {/* Google Play Button */}
          <button
            onClick={() => toast("Coming soon on Google Play")}
            className="flex items-center justify-center gap-2 bg-gray-400 text-white px-5 py-2 rounded-lg shadow-md cursor-not-allowed"
          >
            <FaGooglePlay className="text-xl" />
            <span>Google Play</span>
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default HeroSection;