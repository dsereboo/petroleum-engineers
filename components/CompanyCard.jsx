import Image from "next/image"


const CompanyCard=({data})=>{
    return(
        <div className="card container has-background-white pt-6 pb-6 pl-4 pr-4">
            <figure className="has-text-centered mb-2">
                <Image src={data.image} width={65} height={65} alt="quality-dispensers"/>
            </figure>
            <div>
            <p className="is-size-5 has-text-weight-bold has-text-black has-text-centered mb-2">{data.title}</p> 
            <p className="has-text-centered">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, egestas feugiat et varius platea .
            </p>   
            </div>
        </div>
    )
}


export default CompanyCard