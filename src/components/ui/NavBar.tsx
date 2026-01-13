'use client';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import React from 'react'



const NavBar = () => {

    const iconListRendering = (): React.ReactNode => {
        
        const iconElementsList = [ faInstagram, faFacebook ];

        return iconElementsList.map( element => (
            <Link href={"https://www.instagram.com/gourmethoundldn/?igsh=MXh6NGducTVkb29mYw%3D%3D&utm_source=qr#"} key={ element.iconName.substring(2, element.iconName.length -1 ) }>
                <button className="btn btn-ghost btn-circle">
                    <FontAwesomeIcon icon={ element } style={{
                        width: "30px"
                    }}/>
                </button>
            </Link>
        ))
    }


  return (
  <div className="navbar justify-center bg-base-100 font-serif">
    <div className="navbar-start">
        <div className="flex flex-row justify-center gap-4 hidden lg:flex">
            { iconListRendering() }
        </div>
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                <li>
                    <Link href={"/"}>FOOD & DRINK</Link>
                </li>
                <li>
                    <Link href={"/"}>HOME</Link>
                </li>
                <li>
                    <Link href={"/about"}>ABOUT US</Link>
                </li>
                <li>
                    <Link href={"/contact"}>CONTACT</Link>
                </li>
            </ul>
        </div>
    </div>
    <div className="navbar-center flex-none">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li><Link href={"/"}>FOOD & DRINK</Link></li>
          <li><Link href={"/"}>HOME</Link></li>
          <li><Link href={"/about"}>ABOUT US</Link></li>
          <li><Link href={"/contact"}>CONTACT</Link></li>
        </ul>
    </div>
    <div className="navbar-end gap-4">
        
        <div className="hidden lg:flex">
            <button tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
            </button>
        </div>

        <div className="flex self-center hidden lg:flex">
            <Link href="/cart">
                <button className="btn btn-ghost btn-circle ">
                    <FontAwesomeIcon  icon={ faBasketShopping } className="w-5 h-5"/>    
                </button>
            </Link>               
        </div>
    </div>
    
  </div>
  )
}


export default NavBar;