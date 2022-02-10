import Image from "next/image"
import Layout from "../components/Layout"
import image1 from "../public/images/projectsHero.png"

const Projects=()=>{
    return(
        <Layout>
            <section className="hero bg-img">
                <Image src={image1} alt="projects-hero"/>
            </section>  
        </Layout>
    )
}

export default Projects