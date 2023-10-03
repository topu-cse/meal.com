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
                    <div className='z-1' >
                        <div className='relative'>
                            <div>
                                {/* overlay */}
                                <div className='absolute  w-full h-full bg-black/50 round-xl text-white  ' data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" >
                                    <div className='absolute top-[35%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]' data-aos="fade-right">
                                        <p className='text-green-500  font-comforter  md:text-[40px]'>Welcome </p>
                                        <p className='text-[20px] lg:text-[40px md:text-[40px]'><span>TO HOT MEAL</span>  <br /> Reserve Your Table Now</p>

                                        <button className='border-solid border-[1px] border-green-500 transition duration-700
                              text-white absolute  rounded-none mt-2
                              hover:bg-green-600 px-8 py-4'>EXPLORE PRODUCTS</button>

                                    </div>
                                </div>
                                <img className='h-[460px] md:max-h-[500px]  w-full  object-cover  ' src={img1} alt="" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='z-1'>
                        <div className='relative'>
                            <div>
                                {/* overlay */}
                                <div className='absolute  w-full h-full bg-black/50 round-xl text-white  '  data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" >
                                    <div className='absolute top-[35%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]' data-aos="fade-right">
                                        <p className='text-green-500  font-comforter  md:text-[40px]'>Welcome </p>
                                        <p className='text-[20px] lg:text-[40px md:text-[40px]'><span>TO HOT MEAL</span>  <br /> Reserve Your Table Now</p>

                                        <button className='border-solid border-[1px] border-green-500 transition duration-700
                              text-white absolute  rounded-none mt-2
                              hover:bg-green-600 px-8 py-4'>EXPLORE PRODUCTS</button>

                                    </div>
                                </div>
                                <img className='h-[460px] md:max-h-[500px]  w-full  object-cover  ' src={img2} alt="" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Banner;