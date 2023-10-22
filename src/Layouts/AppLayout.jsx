import React from 'react'
import Header from '../components/Header';

 const  AppLayout = ({children}) => {
 
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default AppLayout;