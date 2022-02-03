import React from "react";
import Image from "next/image";
import image from "../public/images/castrol.png"
import image2 from "../public/images/staroil.png"
import image3 from "../public/images/shell.svg"
import image4 from "../public/images/sankofa.png"
import image5 from "../public/images/star.gif"
import styles from "../styles/Partners.module.css"

const Partners=()=>{
    return(
        <section className="hero has-background-white has-navbar-fixed-top">
            <div className="hero-body">
                <p className="is-size-4 has-text-centered mb-3 has-text-danger has-text-weight-medium">COMPANIES WE’VE WORKED WITH</p>
                <p className="is-size-5 has-text-centered has-text-black mb-6">They trust us!</p>
                <div className="columns is-vcentered ">
                     <div className="column is-flex is-justify-content-center is-2 is-offset-2 is-4-mobile is-offset-4-mobile">
                        <Image src={image5} className="is-centered"/>
                    </div>
                    <div className="column is-flex is-justify-content-center is-2 is-4-mobile is-offset-4-mobile ">
                        <Image src={image4} />
                    </div>
                    <div className="column is-flex is-justify-content-center is-2 is-4-mobile is-offset-4-mobile">
                        <Image src={image3}  />
                    </div>
                    <div className="column is-flex is-justify-content-center is-2 is-4-mobile is-offset-4-mobile">
                        <Image src={image} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Partners