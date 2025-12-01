'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card, CardContent } from '@/components/ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

export default function GoogleReviews() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const reviews: Review[] = [
    {
      id: 1,
      author: 'Khristina Yaniak',
      rating: 5,
      date: '2 miesiące temu',
      text: 'Współpracujemy z tą firmą spedycyjną od dłuższego czasu i zawsze możemy liczyć na terminowe regulowanie płatności. Kontakt z pracownikami jest stały i profesjonalny, a wszelkie kwestie rozwiązywane są sprawnie i rzetelnie. Firma wykazuje się wysoką odpowiedzialnością oraz dbałością o partnerów biznesowych. Z pełnym przekonaniem rekomendujemy ją jako wiarygodnego partnera dla przewoźników.'
    },
    {
      id: 2,
      author: 'Kimek',
      rating: 5,
      date: '3 miesiące temu',
      text: 'Polecam współpracę z Panem Olgierdem – konkretny, uczciwy, zawsze ogarnia temat od A do Z. Kontakt szybki, wszystko załatwione bez zbędnego gadania, transporty na czas.'
    },
    {
      id: 3,
      author: 'Borki_95',
      rating: 5,
      date: '1 miesiąc temu',
      text: 'Bardzo dobra współpraca. Super kontakt na linii kierowca-spedytor. Dogodne warunki, dużo kilometrów i robota poukładana. Po jeździe w kilku "pseudo" spedycjach nareszcie firma, która zna się na robocie. Auto jeździ, zarabia i o to w tym chodzi!'
    },
    {
      id: 4,
      author: 'Angelika Pawlik',
      rating: 5,
      date: '4 miesiące temu',
      text: 'Świetna firma transportowa! Współpracujemy z JAQBS BIS od dłuższego czasu i zawsze możemy liczyć na rzetelność oraz punktualność. Kierowcy są bardzo uprzejmi, a ładunki docierają w idealnym stanie. Polecam każdemu, kto szuka sprawdzonego przewoźnika!'
    },
    {
      id: 5,
      author: 'MIDA Sp.zo.o',
      rating: 5,
      date: '2 tygodnie temu',
      text: 'Polecamy współpracę z firmą JAQBS! Współpracujemy od 2 lat, profesjonalny zespół w zakresie spedycji i transportu. Firma godna polecenia'
    },
    {
      id: 6,
      author: 'Zuzanna',
      rating: 5,
      date: '3 tygodnie temu',
      text: 'Bardzo solidna firma - wszystko zostało zorganizowane sprawnie i na czas. Dobry kontakt, szybkie odpowiedzi i żadnych problemów w trakcie transportu. Widać, że znają się na rzeczy. Na pewno jeszcze skorzystam.'
    }
  ];

  const googleReviewsUrl =
    'https://www.google.com/search?sca_esv=3cba3ff7c6207a53&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ezf6zMm8P9voPF5_smg4QJ-j-jdPa1ciiEu26kO1g9mnDn2100XHmh7jqrhfKHsuMgp7nG47CA-Pqgil1Xkvq6NIUWRiqnyckyySkZLzYR7-DHHF0A%3D%3D&q=JAQBS+BIS+Transport+i+Spedycja+Opinie&sa=X&ved=2ahUKEwiSk9qpoeyPAxV-KBAIHbqqPdMQ0bkNegQIPxAE&biw=1536&bih=730&dpr=1.25';

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue-50 rounded-full px-4 py-2 text-sm font-medium text-brand-blue-900 mb-6">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>Opinie Google</span>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Co mówią o nas{' '}
              <span className="text-brand-blue-900">nasi klienci</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dziękujemy za zaufanie! Wasze opinie motywują nas do dalszego
              rozwoju i doskonalenia usług.
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active-custom'
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            className="reviews-swiper pb-12"
          >
            {reviews.map(review => (
              <SwiperSlide key={review.id} className="h-auto mb-10">
                <Card
                  hover={false}
                  className="border border-gray-200 h-full flex flex-col"
                >
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="mb-6">
                      <Quote className="h-10 w-10 text-brand-blue-900 mb-4" />
                      <div className="flex items-center justify-between mb-4">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                      "{review.text}"
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                      <div className="w-10 h-10 bg-brand-blue-100 rounded-full flex items-center justify-center font-bold text-brand-blue-900">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {review.author}
                        </p>
                        <p className="text-sm text-gray-500">Klient Google</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.8} className="mt-12">
          <div className="bg-brand-blue-900 text-white rounded-2xl p-8 text-center border border-brand-blue-100">
            <h3 className="text-2xl font-bold mb-4">
              Współpraca przebiegła pomyślnie?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Mamy nadzieję, że współpraca przebiegła zgodnie z Państwa
              oczekiwaniami i była w pełni satysfakcjonująca. Będziemy wdzięczni
              za podzielenie się opinią w Google – każde słowo jest dla nas
              cenne i pomaga nam doskonalić nasze usługi.
            </p>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-brand-blue-900 hover:bg-brand-blue-800 border-2 border-white text-white transition-all duration-300 px-8 py-6 text-lg rounded-full">
                <Star className="w-5 h-5 mr-2 fill-yellow-400 text-yellow-400" />
                Zostaw opinię na Google
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>

      <style jsx global>{`
        .reviews-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .reviews-swiper .swiper-pagination-bullet-active-custom {
          background: #0b4073;
          width: 28px;
          border-radius: 5px;
        }

        .reviews-swiper .swiper-slide {
          height: auto;
          display: flex;
        }

        .reviews-swiper .swiper-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}
