import React from 'react'

const Card = ({title,text}) => {
  return (
    <div className='mt-4  '>
     <h4 className='text-[20px]'>{title}</h4>
     <p className='text-[13px] mt-5'>{text}</p>
    </div>
  )
}

export default Card