import React from 'react';
import img1 from '../../assets/img/fancy-title-img.png'

const Menu = () => {


    return (
        <div className='back-img  mt-[100px]'>

            <div className='flex justify-center flex-col items-center pt-[40px]'>

                <div className='text-[40px] font-comforter text-green-600' > Tasty & Crunchy </div>
                <div className='font-bold text-[30px]'>
                    Menu Of The Day </div>
                <div><img src={img1} alt="" /></div>

            </div>
          
          {/* menu button */}
          <div className='flex justify-center  mt-[40px] text-white'>
            <button className='px-1 mx-2'>ALL DAY</button>
            <button className='px-1 mx-2'>BEVERAGE</button>
            <button className='px-1 mx-2'>DESSERTS</button>
            <button className='px-1 mx-2'>DRINKS</button>

          </div>


        </div>
    );
};

export default Menu;