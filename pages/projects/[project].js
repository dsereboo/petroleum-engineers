import Layout from "../../components/Layout"
import  ImageGallery  from "react-image-gallery"

const ProjectPage=(props)=>{

    const images=[
        {
            original:"/images/projectsHero.png",
            originalWidth:"100",
           
           
        },
        { original:"/images/hero2.png"},
        {
            original:"/images/tool.png"
        }
    ]
    return (
        <Layout props={props}>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showBullets={true}
              useBrowserFullscreen={false}
              showNav={false}
              autoPlay={true}
              additionalClass="boy"
            />          
            <section className="section">
                <div className="container">
                    <article>
                     <p className="is-size-3 has-text-link has-text-weight-bold mb-2">Project Name</p>
                        <p>
                    Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, 
                    </p>
                    </article>
                 
                
                </div>
                <div className="container">
                <article>
                    <p className="is-size-3 has-text-link has-text-weight-bold">Other Projects</p>
                    </article>
                </div>
            </section>
        </Layout>
    );
}


export default ProjectPage

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