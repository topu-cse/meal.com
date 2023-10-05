import React, { useState } from 'react';
import img1 from '../../assets/img/fancy-title-img.png'
import { menuData } from '../data/menuData/menuData';

const Menu = () => {
    const [food, setFood] = useState(menuData)
    const slicefood = food.slice(0, 8)
    return (
        <div className='back-img  mt-[100px]'>

            <div className='flex justify-center flex-col items-center pt-[40px]'>

                <div className='text-[40px] font-comforter text-white' > Tasty & Crunchy </div>
                <div className='font-bold text-[30px] text-white'>
                    Menu Of The Day </div>
                <div><img src={img1} alt="" /></div>

            </div>

            {/* menu button */}
            <div className='flex flex-wrap justify-center  mt-[40px] text-white'>
                <button className='px-2 mt-2 mx-2 border-dashed border border-white-500'>ALL ITEMS</button>
                <button className='px-2 mt-2 mx-2 border-dashed border border-white-500'>Appetizers</button>
                <button className='px-2 mt-2 mx-2 border-dashed border border-white-500'>Soup and Salad</button>
                <button className='px-2 mt-2 mx-2 border-dashed border border-white-500'>Entrees</button>
                <button className='px-2 mt-2 mx-2 border-dashed border border-white-500'>Sides</button>
                <button className='px-2 mt-2 mx-2 border-dashed border border-white-500'>Desserts</button>
                <button className='px-2 mt-2 mx-2 border-dashed border border-white-500'>Drinks</button>

            </div>

            {/* menu */}
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-[40px] lg:px-[100px] mt-[60px]  '>
                    {
                        slicefood.map((food) => (
                            <div key={food.id} className='text-white border-dashed border border-white-500 px-[30px] py-[20px]  lg:h-[140px] bg-black/30'>
                                <div className='mt-2 '>
                                    <div>
                                        <h1 className='font-bold text-[20px]'>{food.tittle}</h1> 
                                    </div>
                                    <div className='flex justify-end mt-[-20px] '>
                                        <p className='font-bold  '>$ {food.price}</p>
                                    </div>
                                </div>
                                <p className='text-gray-200'>{food.info}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    );
};

export default Menu;