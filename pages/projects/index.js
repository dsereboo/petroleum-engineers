import Image from "next/image"
import Layout from "../../components/Layout"
import ServiceCard from "../../components/ServiceCard"
import ServiceRows from "../../components/ServiceRows"
import image1 from "../../public/images/projectsHero.png"

const Projects=()=>{

    const data=[
        {id:1, name:"Project Name"},
        {id:2, name:"Project Name"},
        {id:3, name:"Project Name"},
        {id:4, name:"Project Name"},
        {id:6, name:"Project Name"},
        {id:5, name:"Project Name"},
    ]
    return(
        <Layout>
            <section className="hero bg-img">
                <Image src={image1} alt="projects-hero"/>
            </section>  
            <section className="section">
                <div className="columns is-multiline">
                {
                    data.map(
                        (item)=>{
                            return(
                                <div className="column is-4">
                                    <ServiceCard/>
                                </div>
                            )
                        }
                    )
                }
                  </div>
            </section>
        </Layout>
    )
}

export default Projects