import React from 'react';
import img1 from '../../../assets/img/fancy-title-img.png'
import { GiCook } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { PiUserListDuotone } from "react-icons/pi";
const Services = () => {
    return (
        <div>
            <div className='px-[40px] lg:px-[100px] mt-[100px]'>
                {/* sevice bar */}
                <div className='flex justify-center flex-col items-center'>

                    <div className='text-[40px] font-comforter text-green-600' > Awesome Feature </div>
                    <div className='font-bold text-[30px]'>Our Services Feature </div>
                    <div><img src={img1} alt="" /></div>

                </div>

                {/* servive */}
                <div className='pt-[70px]'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  '>



                        <div className=' flex justify-center flex-col items-center text-center border border-green-500'>
                            <div className='py-4'>
                                <GiCook size={40}/>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold'>FRESH DISHES</h1>
                                <p className='text-gray-500'>In in hendrerit nibh. Sed mattis nisi nec con gue sempr. Integer feugiat purus quism enimn lobortis.</p>
                            </div>
                        </div>




                        <div className=' flex justify-center flex-col items-center text-center border border-green-500'>
                            <div className='py-4'>
                                <GiHotMeal  size={40}/>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold'>WELL SERVICE</h1>
                                <p className='text-gray-500'> In in hendrerit nibh. Sed mattis nisi nec con gue sempr. Integer feugiat purus quism enimn lobortis.</p>
                            </div>
                        </div>




                        <div className=' flex justify-center flex-col items-center text-center border border-green-500'>
                            <div className='py-4'>
                                <TbTruckDelivery  size={40}/>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold'>FAST DELIVERY</h1>
                                <p className='text-gray-500'>In in hendrerit nibh. Sed mattis nisi nec con gue sempr. Integer feugiat purus quism enimn lobortis.</p>
                            </div>
                        </div>




                        <div className=' flex justify-center flex-col items-center text-center border border-green-500'>
                            <div className='py-4'>
                                <PiUserListDuotone  size={40}/>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold'>VARIOUS MENU</h1>
                                <p className='text-gray-500'>In in hendrerit nibh. Sed mattis nisi nec con gue sempr. Integer feugiat purus quism enimn lobortis.</p>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;