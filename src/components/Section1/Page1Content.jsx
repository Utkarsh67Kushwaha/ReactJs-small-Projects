import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Page1Content = (props) => {
  console.log(props);
  return (
    <div className='pb-16 pt-6 px-18 flex item-center gap-10 h-[90vh]'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
