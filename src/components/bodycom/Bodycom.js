import React from 'react'
import Search from './Search';
import Allrestaurants from './Allrestaurants';
import ItemRecommend from './ItemRecommend';
import FamRes from './FamRes';

const Bodycom = () => {

  const value = "Bengaluru"

  return (
    <div className='lg:mx-32'>

      <Search/>

      <div className='flex flex-col items-start justify-center my-[4rem] '>
        <h1 className='text-[1.5rem] font-bold font-serif'>
          Whats on your mind?
        </h1>
        <ItemRecommend />
      </div>

      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-[1.5rem] font-bold font-serif'>
          Famous recipes around the Globe
        </h1>
        <FamRes />
      </div>

      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-[1.5rem] font-bold font-serif'>
          Recipies that you'll love to prepare
        </h1>
        <Allrestaurants />
      </div>

    </div>
  )
}

export default Bodycom;