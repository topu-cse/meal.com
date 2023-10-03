import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import './styles.css';

import img1 from '../../../assets/back/banner-1.jpg'
import img2 from '../../../assets/back/banner-2.jpg'
const Banner = () => {

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='z-1 ' >
                        <div className='relative'>
                            <div>
                                {/* overlay */}
                                <div className='absolute  w-full h-full   round-xl text-white  '   >
                                    <div className='absolute top-[15%] lg:top-[30%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]'  >
                                        <p className='text-green-500  font-comforter  md:text-[40px]'>Welcome </p>
                                        <p className='text-[10px] lg:text-[40px md:text-[30px]'><span>TO HOT MEAL</span>  <br /> Reserve Your Table Now</p>

                                        <button className='border-solid border-[1px] border-green-500 transition duration-700 text-[15px]
                              text-white absolute  rounded-none mt-2
                              hover:bg-green-600 px-3 py-1  animate-pulse '>EXPLORE </button>

                                    </div>
                                </div>
                                <img className='h-[900px]  lg:h-[1000px]    w-full  object-cover  ' src={img1} alt="" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='z-1 ' >
                        <div className='relative'>
                            <div>
                                {/* overlay */}
                                <div className='absolute  w-full h-full  round-xl text-white  '   >
                                    <div className='absolute top-[15%] lg:top-[30%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]'  >
                                        <p className='text-green-500  font-comforter  md:text-[40px]'>Welcome </p>
                                        <p className='text-[10px] lg:text-[40px md:text-[30px]'><span>TO HOT MEAL</span>  <br /> Reserve Your Table Now</p>

                                        <button className='border-solid border-[1px] border-green-500 transition duration-700 text-[15px]
                              text-white absolute  rounded-none mt-2
                              hover:bg-green-600 px-3 py-1  animate-pulse '>EXPLORE </button>

                                    </div>
                                </div>
                                <img className='h-[900px]  lg:h-[1000px]    w-full  object-cover  ' src={img1} alt="" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Banner;