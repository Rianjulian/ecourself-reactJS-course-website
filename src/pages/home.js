import React from "react";
import Benefit from '../component/Benefit';
import Categories from '../component/Categories';
import Company from '../component/Company';
import Course from '../component/Course';
import Hero from '../component/Hero';
import Prepos from '../component/prepos';
import Promotion from '../component/Promotion';
import Testimonials from '../component/Testimonials';

const Home = () => {
    return (
        <>
        <Hero/>
        <Company/>
        <Benefit/>
        <Categories/>
        <Promotion/>
        <Course/>
        <Testimonials/>
        <Prepos/>
        </>
    )
  };

  export default Home;