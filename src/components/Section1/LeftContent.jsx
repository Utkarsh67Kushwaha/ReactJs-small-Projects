import React from 'react'
import HeroTxt from './HeroTxt'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between items-start gap-10 px-5'>
        <HeroTxt />
        <Arrow />
    </div>
  )
}

export default LeftContent
