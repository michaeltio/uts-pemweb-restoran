import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Opening from '../Components/Home/Opening';
import Greetings from '../Components/Home/Greetings';
import Categories from '../Components/Home/Categories';
import View from '../Components/Home/View';
import './Home.css';

import { Link, Head, usePage } from '@inertiajs/react';

function Home() {
    return (
        <div>
            <Navbar />
            <Opening />

            <div className='-mt-20'>
                <Greetings />
            </div>

            {/* <div className='w-5/6 mx-20 bg-black h-1 mb-14'></div> */}
            <div className='mb-24 mx-56 h-56 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-20'>
                <Categories />
            </div>

            <View />
            <Footer />
        </div>
    );
};

export default Home;