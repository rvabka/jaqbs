'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Partners() {
  const partners = ['FedEx', 'Amazon', 'DPD', 'Schenker', 'UPS', 'DHL', 'Maersk', 'C.H. Robinson', 'Kuehne + Nagel', 'XPO Logistics'];

  return (
    <section className="pt-16 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 50
            }
          }}
          className="partners-swiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="text-2xl font-bold text-gray-400 text-center py-8 mb-5 cursor-grab">
                {partner}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
