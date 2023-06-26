import React from 'react'

const Card = ({title,text}) => {
  return (
    <div className='mt-4  '>
     <h4 className='lg:text-[20px] sm:text-[28px] leading-7'>{title}</h4>
     <p className='lg:text-[13px] sm:text-[18px] sm:mt-2 lg:mt-5 leading-5'>{text}</p>
    </div>
  )
}

export default Card