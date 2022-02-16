import Image from "next/image"
import image from "../public/images/service3.png"

const WorkedProjectsCard=({data})=>{
    return(
        <div className="card is-clickable">
            <div className="card-image">
                <figure className="image">
                    <Image src={image} width={295} height={186} layout="responsive"/>
                </figure>
            </div>
            <div className="card-content">
                <p>{data.title}</p>
            </div>
        </div>
    )
}

export default WorkedProjectsCard

