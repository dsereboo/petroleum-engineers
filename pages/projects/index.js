import Head from "next/head"
import Image from "next/image"
import Layout from "../../components/Layout"
import ProjectCard from "../../components/ProjectCard"
import image1 from "../../public/images/projectsHero.png"

const Projects=(props)=>{

    const data=[
        {id:1, name:"Total Sakumono"},
        {id:2, name:"Airport Shell"},
        {id:3, name:"Allied Oil Tema"},
        {id:4, name:"Shell Kwabenya"},
        {id:6, name:"Total Oyarifa"},
        {id:5, name:"Peduase Goil"},
    ]


    return(
        <Layout props={props}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Page displaying projects we have worked on at Petroleum Engineers"/>
            </Head>
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

export async function getServerSideProps() {
    const service_id = process.env.SERVICE_ID;
    const template_id = process.env.TEMPLATE_ID;
    const user_id = process.env.USER_ID;
  
    return {
      props: {
        service: service_id,
        template: template_id,
        user: user_id,
      },
    };
  }