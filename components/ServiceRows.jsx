import ServiceCard from "./ServiceCard"

const ServiceRows=()=>{

    const data=[
        {id:"1", name:"Underground and Surface Tank Installation Works", image:"/images/tank.png",},
        {id:"2", name:"Service Station Construction", image:"/images/station.png",},
        {id:"3", name:"Forecourt Electrical and Pipe Work", image:"/images/service3.png",},
        {id:"4", name:"Servicing and Maintenance of Petroleum Eqiupment", image:"/images/servicing.png",},
    ]

    
    return(
        <div className="columns is-multiline ">
            <div className="column is-5 is-offset-1  ">
                <ServiceCard data={data[0]} />
            </div>
            <div className="column is-5">
                <ServiceCard data={data[1]}/>
            </div>
            <div className="column is-5 is-offset-1">
                <ServiceCard data={data[2]}/>
            </div>
            <div className="column is-5">
                <ServiceCard data={data[3]}/>
            </div>
        </div>
    )
}

export default ServiceRows