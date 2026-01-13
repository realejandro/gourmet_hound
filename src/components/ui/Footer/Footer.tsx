'use client';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const iconElementsList = [ faInstagram, faFacebook ];

const Footer = () => {
    
    const iconListRendering = (): React.ReactNode => {
        return iconElementsList.map( element => ( 
            <Link href={"https://www.instagram.com/gourmethoundldn/?igsh=MXh6NGducTVkb29mYw%3D%3D&utm_source=qr#"} 
                  key={ element.iconName.substring(2, element.iconName.length -1 ) }
                  target="_blank"
                >
                <button className="btn btn-ghost btn-circle">
                    <FontAwesomeIcon icon={ element } style={{
                        width: "30px"
                    }}/>
                </button>
            </Link>
            )
        )
    }


return (
    <div className="grid font-serif">
        <div className="grid grid-cols-3 text-center mt-10">
            <div className="grid">
                <h2>About Us</h2>
                <p>Our blog</p>
            </div>
            <div className="grid">
                <h2>Customer Services</h2>
                <p>
                    Everyday, 8am to 8pm
                    <br/>
                    <em>
                        We aim to respond to all enquiries within 24 hours
                    </em>
                </p>
                <p>Privacy policy</p>
            </div>
            <div className="grid">
                <h2>Follow us</h2>
                <div className="flex flex-row justify-center gap-4">
                { iconListRendering() }
                </div>            
            </div>
            <div className="grid justify-center mt-10 order-2">
                <Link  
                    href="https://ac-technology.netlify.app/"
                    target="_blank"
                    
                >
                   <em className="text-sm">© 2025,  AC developer | Techtooine</em> 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer