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
            <section className="hero">

       
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
                </section>
        </Layout>
    );
}


export default ProjectPage