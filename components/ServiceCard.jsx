import Image from "next/image"
import image from "../public/images/service3.png"

const ServiceCard=()=>{
    return(
        <div className="card is-shadowless is-clickable">
            <div className="card-image">
                <figure className="image">
                  <Image src={image} layout="responsive" alt="service"/>
                </figure>  
            </div>
            <div className="card-content">
                <p className="has-text-centered has-text-link is-size-4">Underground and Surface Tank Installation</p>
            </div>
            
        </div>
    )
}


export default ServiceCard