import Image from "next/image"
import image from "../public/images/service3.png"

const ServiceCard=({data})=>{

    return(
        <div className="card is-shadowless is-clickable">
            <div className="card-image">
                <figure className="image">
                  <Image src={data.image} width={622} height={585} alt="service"/>
                </figure>  
            </div>
            <div className="card-content">
                <p className="has-text-centered has-text-link is-size-4">{data.name}</p>
            </div>
            
        </div>
    )
}


export default ServiceCard