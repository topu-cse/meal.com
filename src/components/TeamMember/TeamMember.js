import React from 'react';
import img1 from '../../assets/img/fancy-title-img.png'
const TeamMember = () => {
 const teamMember=[
    {
        id:1,
        img:,
        name:"",
        tittle:"",

    },
    {
        id:2,
        img:,
        name:"",
        tittle:"",

    },
    {
        id:3,
        img:,
        name:"",
        tittle:"",

    },
    {
        id:4,
        img:,
        name:"",
        tittle:"",

    },
 ]
    return (
        <div>
            {/* team banner */}
            <div className='flex justify-center flex-col items-center mt-16'>

                <div className='text-[40px] font-comforter text-green-600' > Awesome Chef </div>
                <div className='font-bold text-[30px]'>Our Passionate Team</div>
                <div><img src={img1} alt="" /></div>

            </div>


            
        </div>
    );
};

export default TeamMember;