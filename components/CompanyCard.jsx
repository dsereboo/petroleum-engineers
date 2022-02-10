import Image from "next/image"
import styles from "../styles/Home.module.css"



const CompanyCard=({data})=>{

    console.log("image",data.image)
    return(
        <div className="card container has-background-white pt-6 pb-6">
            <figure className="has-text-centered mb-2">
                <Image src={data.image} width={65} height={65} alt="quality-dispensers"/>
            </figure>
            <div>
            <p className="is-size-5 has-text-weight-bold has-text-black has-text-centered mb-2">{data.title}</p> 
            <p className={"has-text-centered " +`${styles.word}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, egestas feugiat et varius platea .
            </p>   
            </div>
        </div>
    )
}


export default CompanyCard