import SectionDivider from '@/components/divider/SectionDivider';
import Footer from '@/components/ui/Footer/Footer';
import NavBar from '@/components/ui/NavBar';
import React, { ReactNode } from 'react';

const BasicLayout = ({ children } : { children: ReactNode }) => {
  return (
    <div>
      <NavBar/>
       { children }
       <SectionDivider height="h-30"/>
       <Footer/> 
    </div>
  )
}

export default BasicLayout