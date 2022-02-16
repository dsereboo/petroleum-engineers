import Image from "next/image"
import image from "../public/images/service3.png"

const WorkedProjectsCard=()=>{
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <Image src={image} layout="responsive"/>
                </figure>
            </div>
            <div className="card-content">

            </div>
        </div>
    )
}

export default WorkedProjectsCard

