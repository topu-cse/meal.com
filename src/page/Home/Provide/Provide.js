import React from 'react';
import img1 from '../../../assets/back/provide.jpg'
import p1 from '../../../assets/img/p1.jpg'
import p2 from '../../../assets/img/p2.jpg'
import p3 from '../../../assets/img/p3.jpg'
const Provide = () => {
    return (
        <div className='px-[40px] lg:px-[100px] mt-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
                {/* col1 */}
                <div>
                    <h1 className='text-[40px] font-comforter text-green-700' >We Provide</h1>
                    <h2 className='text-[30px] font-bold'>Our Special Flavours</h2>
                    <p className='pt-3 text-gray-500'>Vanillin is the worlds most popular flavour compound.
                        It is the key constituent of the natural vanilla flavour obtained from cured vanilla pods.</p>
                    <p className='text-gray-500 pt-2'>The recent identification of VpVAN from the vanilla orchid can contribute to an entirely</p>
                    <button className='border-solid border-[1px] border-green-500 transition duration-700 text-[15px] mt-3
                                absolute  rounded-none 
                              hover:bg-green-600  px-3 py-1  '>Learn More </button>
                </div>
                {/* col2 */}
                <div>
                    <div className='z-1 ' >
                        <div className='relative'>
                            <div>
                                {/* overlay */}
                                <div className='absolute  w-full h-full  bg-black/25 round-xl text-white  '   >
                                    <div className='absolute top-[65%]   left-[10%]  '  >
                                        <button className='border-solid border-[1px] border-green-500 transition duration-700 text-[15px]
                              text-white absolute  rounded-none 
                              hover:bg-green-600 px-3 py-1    '>Hot & Spicy </button>

                                        <p className='text-white  mt-8 front-bold  md:text-[20px]'>SPECIAL BEEF BURGERS </p>
                                        <p className='text-[15px] text-gray-200'>Make Your Order Now With Free Fries</p>



                                    </div>
                                </div>
                                <img className='h-[300px]   w-full  object-cover  ' src={img1} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                {/* col3 */}
                <div>
                    <div>
                        {/* p1 */}
                        <div className='flex pb-2'>
                            <div> 
                                <img className='h-[94px] ' src={p1} alt="" />
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-bold pb-1 mt-1'>STANDARD BURGER MEAL</h1>
                                <p className='text-gray-500 pt-1'>Standard Burger is patty, caramel onions</p>
                            </div>
                        </div>
                        {/* p2 */}
                        <div className='flex pb-2'>
                            <div>
                                <img className='h-[94px] w-[120px]'  src={p2} alt="" />
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-bold pb-1 mt-1'>BLACK CHOCOLATE BEAN</h1>
                                <p className='text-gray-500 pt-1'>Cacao  beans are technically not beans or legumes</p>
                            </div>
                        </div>
                        {/* p3 */}
                        <div className='flex pb-2'>
                            <div>
                                <img className='h-[94px] w-[120px]'  src={p3} alt="" />
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-bold pb-1 mt-1'>GRILLED ROAST CHICKEN</h1>
                                <p className='text-gray-500 pt-1'>grilling is usually considered a healthier technique</p>
                            </div>
                        </div>




                    </div>
                </div>

            </div>
        </div>
    );
};

export default Provide;