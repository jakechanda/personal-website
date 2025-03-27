import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='bg-black h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>

            <h1 className='text-3x1 font-bold ml-4'>Jacob Chanda</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href='#home'>Home</a></li>
                <li className='p-5'><a href='#about'>About</a></li>
                <li className='p-5'><a href='#experience'>Experience</a></li>
                <li className='p-5'><a href='#projects'>Projects</a></li>                
                <li className='p-5'><a href='#contact'>Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>

            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-600' 
                : 'fixed left-[-100%]'}>
                <h1 className='text-3x1 font-bold text-white ml-4 mt-4'>Jacob Chanda</h1>
                <ul className='text-3x1 primary-color m-4'>
                    <li className='p-5'><a href='#home'>Home</a></li>
                    <li className='p-5'><a href='#about'>About</a></li>
                    <li className='p-5'><a href='#experience'>Experience</a></li>
                    <li className='p-5'><a href='#projects'>Projects</a></li>
                    <li className='p-5'><a href='#contact'>Contact</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
