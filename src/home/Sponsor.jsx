import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules';
import Sp1 from "../assets/images/sponsor/01.png"
import Sp2 from "../assets/images/sponsor/02.png"
import Sp3 from "../assets/images/sponsor/03.png"
import Sp4 from "../assets/images/sponsor/04.png"
import Sp5 from "../assets/images/sponsor/05.png"
import Sp6 from "../assets/images/sponsor/06.png"

const sponsorList = [
    {
    imgUrl: Sp1,
    },
    {
    imgUrl: Sp2,
    },
    {
    imgUrl: Sp3,
    },
    {
    imgUrl: Sp4,
    },
    {
    imgUrl: Sp5,
    },
    {
    imgUrl: Sp6,
    },
    ];

    
const Sponsor = () => {
  return (
    <>
     <div className='sponsor-section section-bg'>
        <div className='container'>
           <div className='section-wrapper'>
              <div className='sponsor-slider'>
                <Swiper
                 slidesPerView={2}
                 spaceBetween={20}
                 autoplay={
                    {
                        delay: 2000,
                        disableOnInteraction: false
                    }
                 }
                //  pagination={{
                //     clickable:true
                //  }}
                 breakpoints={{
                    640:{
                        slidesPerView:1,
                        spaceBetween: 20
                    },
                    768:{
                        slidesPerView:3,
                        spaceBetween: 40
                    },
                    1024:{
                        slidesPerView:5,
                        spaceBetween: 50
                    },
                 }}
                 modules={[Autoplay]}
                 className='mySwiper'
                >
                    {
                        sponsorList.map((slist,i) => (
                            <SwiperSlide key={i}>
                                <div className='sponsor-item'>
                                    <div className='sponsor-thumb'>
                                        <img src={slist.imgUrl} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

              </div>
           </div>
        </div>
     </div>
    </>
  )
}

export default Sponsor