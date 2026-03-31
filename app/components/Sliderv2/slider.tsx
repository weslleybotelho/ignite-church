import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './styles.css';I
import { Navigation, Pagination } from 'swiper/modules';
import './slider.scss';

interface Announcement {
  id: number;
  title: string;
  image_url: string;
  link_url?: string;
}

type SliderImagesProps = {
  imageFiles?: string[];
  announcements?: Announcement[];
};

export default function SliderImages({ imageFiles, announcements }: SliderImagesProps) {
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper">
      {announcements
        ? announcements.map((a) => (
            <SwiperSlide key={a.id}>
              {a.link_url ? (
                <a href={a.link_url} target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.image_url} alt={a.title} style={{ width: '100%', height: 'auto' }} />
                </a>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={a.image_url} alt={a.title} style={{ width: '100%', height: 'auto' }} />
              )}
            </SwiperSlide>
          ))
        : imageFiles?.map((filename, idx) => (
            <SwiperSlide key={idx}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/img/annoucements/${filename}`} alt={`Announcement ${idx + 1}`} style={{ width: '100%', height: 'auto' }} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
