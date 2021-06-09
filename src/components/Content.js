import React from 'react';
import ImageOne from '../images/Book1.png';
import ImageTwo from '../images/Book2.png';

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Elequent Javascript</h2>
          <p className='mb-2'>Marjin Haverbeke</p>
          <span>$56</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Python Crash Course</h2>
          <p className='mb-2'>Eric Matthes</p>
          <span>$40</span>
        </div>
      </div>
    </>
  );
};

export default Content;