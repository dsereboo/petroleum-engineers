import Head from "next/head"
import Contact from "./Contact"
import Footer from "./Footer"
import Navbar from "./Navbar"

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
                <Contact/>
            <div className="container is-fullhd">
            <Footer/>
            </div>          
        </div>
    )
}


export default Layout