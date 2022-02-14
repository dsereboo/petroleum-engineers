import Head from "next/head"
import Contact from "./Contact"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Partners from "./Partners"

const Layout=({children})=>{
    return(
        <div>
            <Head>
                <body className="has-navbar-fixed-top"></body>
            </Head>
            <Navbar/>      
            <main className="container is-fullhd">
                {children}
            </main> 
            <div className="container is-fullhd">
                <Partners/>
                 <Contact/>
            </div>
           
          
            <Footer/>
                   
        </div>
    )
}


export default Layout