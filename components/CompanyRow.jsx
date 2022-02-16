import { useRouter } from "next/router"
import CompanyCard from "./CompanyCard"



const CompanyRow=()=>{
   
    const router=useRouter()

    const data=[
        {id:"a4adf",image:"/images/quality.png", title:"Quality Dispensers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, egestas feugiat et varius platea."},
        {id:"ads8f",image:"/images/construction.png", title:"Construction", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, egestas feugiat et varius platea."},
        {id:"xiopf",image:"/images/fix.png", title:"Repairs & Maintenance", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, egestas feugiat et varius platea."}
    ]

    const handleMove=()=>{
        router.push("/about")
    }


    return(
        <div className="columns is-multiline">
            {
                data.map(
                    (item)=>{
                        return(
                            <div key={item.id} className="column is-4">
                                <CompanyCard data={item}/>
                            </div>
                        )
                    }
                )
            }
            <div className="container is-flex is-justify-content-center mt-4">
                <button className="button is-link" onClick={handleMove}>More About us &gt;</button>
            </div>
        </div>
    )
}

export default CompanyRow