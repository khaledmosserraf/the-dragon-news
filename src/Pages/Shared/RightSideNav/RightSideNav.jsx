import React from 'react';
import {FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold">Login With</h1>
            <button className="btn btn-outline py-3 w-full mt-3">
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
            <button className="btn btn-outline py-3 w-full mt-1">
                <FaGithub></FaGithub>
                Login with Github
            </button>

            <h1 className="text-2xl mt-10 font-semibold">Find Us On</h1>
            <div className='border-spacing-2 mt-3 rounded-t-lg border'>
                <a className='p-4 flex gap-6 items-center ounded-t-lg border' href=''>
                    <FaFacebookF></FaFacebookF>
                    Facebook
                </a>
                <a className='p-4 flex gap-6 items-center ounded-t-lg border' href=''>
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className='p-4 flex gap-6 items-center ounded-t-lg border' href=''>
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className='bg-gray-100 p-3 mt-7 rounded-t-lg'>
            <h1 className="text-2xl mt-2 font-semibold">Q-Zone</h1>
            <div className='border-spacing-2 mt-3 '>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
            </div>
        </div>
    );
};

export default RightSideNav;