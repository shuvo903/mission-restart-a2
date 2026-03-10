import React from 'react';
import BannerImgLeft from "../../assets/banner-bg-left.png";
import BannerImgRight from "../../assets/banner-bg-right.png";
const Banner = ({inProgress,resolved}) => {
    return (
        <div className='bg-gray-200 w-full'>
            <div className="flex flex-col lg:flex-row justify-between lg:gap-10 gap-6 py-20 mx-auto max-w-screen-2xl px-4 lg:px-6 items-center">

                <div className="flex justify-center items-center flex-1  bg-linear-to-r from-[#632EE3] to-[#9F62F2]  rounded-2xl">
                    <div className="absolute text-center items-center text-white">
                        <h3 className='lg:text-2xl text-xl font-bold'>In-Progress</h3>
                        <span className='lg:text-6xl text-4xl font-bold'>{inProgress}</span>
                    </div>
                    <img className='w-1/2 object-contain' src={BannerImgLeft} alt="" />
                    <img className='w-1/2 object-contain' src={BannerImgRight} alt="" />
                </div>


                <div className="flex justify-center items-center flex-1  bg-linear-to-r from-[#54CF68] to-[#00827A]  rounded-2xl ">

                    <div className="absolute text-center items-center text-white">
                        <h3 className='lg:text-2xl text-xl font-bold'>Resolved</h3>
                        <span className='lg:text-6xl text-4xl font-bold'>{resolved}</span>
                    </div>
                    <img className='w-1/2 object-contain' src={BannerImgLeft} alt="" />
                    <img className='w-1/2 object-contain' src={BannerImgRight} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;