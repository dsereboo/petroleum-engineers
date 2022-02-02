import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
//  avbar.module.css"


const Navbar=()=>{

    const [active, setActive]=useState(false)
    const handleShowMenu=()=>{
        setActive(!active)
    }

    return (
      <>
        <nav
          className="navbar is-fixed-top signal-navbar"
          aria-label="main navigation"
          role="navigation"
        >
          <div className="container is-max-widescreen">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <Image src="https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/new.png?alt=media&token=df2d4ba1-7dfb-40e7-afc7-7911dfc63259" height={250} width={938}  alt="signal logo"/>
              </a>
              <a
                className={active? "navbar-burger is-active":"navbar-burger"}
                role="button"
                aria-expanded="false"
                aria-label="menu"
                data-target="navbarSample"
                onClick={handleShowMenu}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarSample" className={active?"navbar-menu is-active":"navbar-menu"}>
              <div className="navbar-end">
               <Link href="/"><a className="navbar-item">Home</a></Link>
               <Link href="/services"><a className="navbar-item">Our Services</a></Link>
               <Link href="/projects"><a className="navbar-item">Projects</a></Link>
               <Link href="/about"><a className="navbar-item">About Us</a></Link>
               <Link href="/details/contact"><a className="navbar-item">Contact Us</a></Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar