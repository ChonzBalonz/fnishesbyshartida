import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Gallery.css";

// Use the images from the public folder
const images = Array.from({ length: 15 }, (_, i) => `/img${i + 1}.jpg`);

const rotations = [-10, -5, 0, 5, 10, -7, 7, -3, 3, -8, 8, -4, 4, -6, 6];

function Gallery() {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={40}
        slidesPerView={3} // Show fewer images for bigger size
        centeredSlides
        grabCursor
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        breakpoints={{
          1200: { slidesPerView: 3 },
          900: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="carousel-card"
              style={{
                transform: `rotate(${rotations[idx % rotations.length]}deg)`,
              }}
            >
              <img src={src} alt={`Work ${idx + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
