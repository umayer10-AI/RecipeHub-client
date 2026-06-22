import Banner from '@/component/Banner';
import Dynamic1 from '@/component/Dynamic1';
import Section1 from '@/component/Section1';
import Section2 from '@/component/Section2';
import Section3 from '@/component/Section3';
import Section4 from '@/component/Section4';
import TopLikedComponent from '@/component/TopLikedComponent';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Dynamic1></Dynamic1>
      <TopLikedComponent></TopLikedComponent>
      <Section1></Section1>
      <Section2></Section2>
      <Section4></Section4>
    </div>
  );
};

export default page;