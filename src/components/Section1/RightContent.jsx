import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard.jsx'
const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-6 rounded-4xl flex overflow-x-auto gap-10 flex-nowrap'>
      {props.users.map(function(elem, index){
        return <  RightCard key={index} color={elem.color} id={index} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
