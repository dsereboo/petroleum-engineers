import { MdOutlineMailOutline,MdOutlineLocationOn} from "react-icons/md"
import{FiPhone} from "react-icons/fi"
import { IconContext } from "react-icons"


const Footer=()=>{
    return(
        <div className="container is-fullhd">
        <footer className="footer footer-top">
          <div className="container">
                <div className="columns ">
                    <div className="column is-3 is-offset-1 has-text-white has-justify-content-space-between">
                        <h1 className="is-size-5 mb-1">Quick Links</h1>
                        <p className="is-size-6 mb-1">Home</p>
                        <p className="mb-1">Our Products</p>
                        <p className="mb-1">About Us</p>
                        <p className="mb-1">Contact Us</p>
                    </div>
                    <div className="column is-8-mobile is-3-desktop is-8-tablet is-offset-1 is-half has-text-white">
                        <h1 className="is-size-5 mb-1">Products</h1>
                        <p className="mb-1">Fuel Dispenser</p>
                        <p className="mb-1">Station Construction</p>
                        <p className="mb-1">Servicing & Maintenance</p>
                        <p className="mb-1">Spare Parts</p>
                    </div>
                    <div className="column is-4 is-half has-text-white">
                        <h1 className="is-size-5 mb-1">Contact Us</h1>
                        <div className="is-flex is-flex-direction-row is-align-items-center">
                        <IconContext.Provider value={{size:"1.2em"}}>
                                <FiPhone/>
                            </IconContext.Provider>
                           <p className="ml-2 mb-1">+233 55 510 1447 / +233 55 300 4495</p>
                        </div>
                        <div className="is-flex is-flex-direction-row is-align-items-center">
                            <IconContext.Provider value={{size:"1.2em"}}>
                                <MdOutlineMailOutline/>
                            </IconContext.Provider> 
                            <p className="ml-2 mb-1">petroleumengineersgh@gmail.com </p> 
                        </div>
                       <div className="is-flex is-flex-direction-row is-align-items-flex-start">
                          <IconContext.Provider value={{size:"1.2em"}}>
                                <MdOutlineLocationOn/>
                            </IconContext.Provider>
                            <p className="ml-2 mb-1">South McCarthy,New Tetegu,Graceland</p>
                       </div>            
                    </div>
                </div>
                <hr></hr>
                <p className="has-text-centered has-text-white">© 2021 Petroleum Engineers. All Rights Reserved</p>
            </div>
        </footer>
        </div>
    )
}

export default Footer