import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/images/logo.png"
//  avbar.module.css"


const Navbar=()=>{

    const [active, setActive]=useState(false)
    const handleShowMenu=()=>{
        setActive(!active)
    }

    return (
      <>
        <nav
          className="navbar is-fixed-top signal-navbar nav-bottom"
          aria-label="main navigation"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <Image src={logo} height={250} width={938}  alt="signal logo"/>
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
               <Link href="#contact"><a className="navbar-item">Contact Us</a></Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar