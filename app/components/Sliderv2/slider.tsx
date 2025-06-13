import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './styles.css';I
import { Navigation, Pagination } from 'swiper/modules';

type SliderImagesProps = {
  imageFiles: string[];
};

export default function SliderImages({ imageFiles }: SliderImagesProps) {
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper">
      {imageFiles.map((filename, idx) => (
        <SwiperSlide key={idx}>
          <img src={`/img/annoucements/${filename}`} alt={`Announcement ${idx + 1}`} style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
