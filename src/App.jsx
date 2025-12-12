import React from 'react'
import Section1 from './components/Section1/section1.jsx'
import Section2 from './components/Section2/Section2.jsx'
const App = () => {
  const users=[
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      into:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx3b3JraW5nfGVufDB8fDB8fHww',
      into:'',
      color:'orange',
      tag:'underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1539343915366-4da26f7a1f2c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      into:'',
      color:'lightseagreen',
      tag:'underbanked'
    },
    {
      img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      into:'',
      color:'pink',
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
 