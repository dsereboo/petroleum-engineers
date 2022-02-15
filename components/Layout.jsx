import Head from "next/head"
import { Toaster } from "react-hot-toast"
import Contact from "./Contact"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Partners from "./Partners"

const Layout=({children,props})=>{
    return(
        <div>
            <Head>
                <body className="has-navbar-fixed-top"></body>
            </Head>
            <Navbar/>      
            <main className="container is-fullhd">
                {children}
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                  
                />
            </main> 
            <div className="container is-fullhd">
                <Partners/>
                 <Contact props={props} />
            </div>
           
          
            <Footer/>
                   
        </div>
    )
}


export default Layout