import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8 justify-between flex flex-col'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>{props.id+1}</h2>
            <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa veniam magni nam maiores quos.</p>
            <div className='flex gap-4 items-center'>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full text-lg '>{props.tag}</button>
                <button className=' text-white font-medium px-4 py-2 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
