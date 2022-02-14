import Layout from "../../components/Layout"
import  ImageGallery  from "react-image-gallery"

const ProjectPage=()=>{

    const images=[
        {
            original:"/images/projectsHero.png",
           
        },
        { original:"/images/hero2.png"},
        {
            original:"/images/tool.png"
        }
    ]
    return (
        <Layout>
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
                    <p className="is-size-3 has-text-link has-text-weight-bold">Project Name</p>
                    <p>
                    Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, Project Description goes into this paragraph, 
                    </p>
                </div>
            </section>
        </Layout>
    );
}


export default ProjectPage