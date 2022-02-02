import React from "react";



const Footer=()=>{
    return(
        <footer className="footer">
          <div className="container is-max-widescreen">
                <div className="columns ">
                    <div className="column is-3 is-offset-1 has-text-white has-justify-content-space-between">
                        <h1 className="is-size-5">Quick Links</h1>
                        <p className="is-size-6">Home</p>
                        <p>Our Products</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="column is-8-mobile is-3-desktop is-8-tablet is-offset-1 is-half has-text-white">
                        <h1 className="is-size-5">Products</h1>
                        <p>Fuel Dispenser</p>
                        <p>Station Construction</p>
                        <p>Servicing & Maintenance</p>
                        <p>Spare Parts</p>
                    </div>
                    <div className="column is-4 is-half has-text-white">
                        <h1 className="is-size-5">Contact Us</h1>
                        <p>+233 55 510 1447 / +233 55 300 4495</p>
                        <p>petroleumengineersgh@gmail.com </p>
                        <p>South McCarthy, New Tetegu, Graceland</p>
                    </div>
                </div>
                <hr></hr>
                <p className="has-text-centered has-text-white">© 2021 Petroleum Engineers. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer