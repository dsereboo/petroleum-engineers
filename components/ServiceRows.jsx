import ServiceCard from "./ServiceCard"

const ServiceRows=()=>{
    return(
        <div className="columns is-multiline ">
            <div className="column is-5 is-offset-1  ">
                <ServiceCard/>
            </div>
            <div className="column is-5">
                <ServiceCard/>
            </div>
            <div className="column is-5 is-offset-1">
                <ServiceCard/>
            </div>
            <div className="column is-5">
                <ServiceCard/>
            </div>
        </div>
    )
}

export default ServiceRows