import Image from "next/image"
import Layout from "../../components/Layout"
import ProjectCard from "../../components/ProjectCard"
import ServiceRows from "../../components/ServiceRows"
import image1 from "../../public/images/projectsHero.png"

const Projects=()=>{

    const data=[
        {id:1, name:"Total Sakumono"},
        {id:2, name:"Airport Shell"},
        {id:3, name:"Allied Oil Tema"},
        {id:4, name:"Shell Kwabenya"},
        {id:6, name:"Total Oyarifa"},
        {id:5, name:"Peduase Goil"},
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
                                <div key={item.id} className="column is-4">
                                    <ProjectCard data={item}/>
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