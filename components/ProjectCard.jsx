import Image from "next/image"
import Link from "next/link"
import image from "../public/images/service3.png"

const ProjectCard=({data})=>{

    
    return(
        <div className="card is-shadowless is-clickable">
            <div className="card-image">
                <figure className="image">
                <Link href={`/projects/${data.id}`}>
                  <Image src={image} layout="responsive" alt="service"/>
                  </Link> 
                </figure>  
            </div>
            <div className="card-content">
                <p className="has-text-centered has-text-link is-size-4">{data.name}</p>
            </div>
           
        </div>
    )
}


export default ProjectCard