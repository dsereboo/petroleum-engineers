import CompanyRow from "../components/CompanyRow";
import HotProducts from "../components/HotProducts";
import Layout from "../components/Layout";
import ImageGallery from "react-image-gallery";
import { BiCaretRightCircle} from 'react-icons/bi'
import { useState } from "react";
import Head from "next/head"

export default function Home(props) {

  const [play,setPlay]=useState(false)

  const images = [
    {
      original:"/images/site.png",
      loading:"eager",
      originalWidth:"1440",
      orignalHeight:"882",
    },
    {
      original: "/images/projectsHero.png",
      originalWidth: "100",
      loading:"lazy",
    },
    { original: "/images/hero2.png",
      loading:"eager", 
      originalWidth:"1440",
      orignalHeight:"882",
      
    },
    {
      original: "/images/tool.png",
      loading:"lazy",
      originalWidth:"1440",
      orignalHeight:"882",
    },
  ];

  const handlePlay=(prevState)=>{
    setPlay(!prevState)
  }

  return (
    <div className="has-background-light">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Landing page showcasing Petroleum Engineers"/>
      </Head>
      <Layout props={props}>
        <div className="carousel-holder hero is-full-height-with-navbar">
          <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets={true}
            useBrowserFullscreen={false}
            showNav={false}
            lazyLoad={true}
            autoPlay={true}
            slideDuration={650}
            // onImageLoad={handlePlay}
            additionalClass="boy"
          />

          <div className="text-block is-shadowless has-background-light is-hidden-touch">
            <div className="card-body">
              <p className="has-text-danger is-size-3 mb-4">Welcome</p>
              <p className="is-size-2 mb-5 has-text-black">
                We are experience work-lovers focused on quality
              </p>
              <p className="has-text-danger is-size-3 is-flex is-align-items-center pb-2">
                View our projects
                <BiCaretRightCircle />
              </p>
            </div>
          </div>
        </div>
        <div className="section has-background-light des">
          <article className="des">
            <p className="is-size-3 has-text-danger has-text-centered">
              OUR COMPANY
            </p>

            <p
              className={
                "is-size-2-desktop is-size-5-mobile has-text-black has-text-centered"
              }
            >
              At Petroleum Engineers, we believe that our customers deserve the
              best and thus we deliver nothing but the best.
            </p>
          </article>
        </div>
        <section className="section">
          <CompanyRow />
        </section>
        <HotProducts />
      </Layout>
    </div>
  );
}

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
