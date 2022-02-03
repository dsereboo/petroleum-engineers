import Layout from "../components/Layout";
import Image from "next/image";
import image from "../public/images/hero2.png";
import image2 from "../public/images/about1.png";

export default function About() {
  return (
    <Layout>
      <div className="hero ">
        <Image src={image} />
      </div>
      <div className="section">
        <div className="container">
          <p className="title  has-text-link is-hidden-tablet">About Us</p>
          <div className="columns">
            <div className="column is-5">
              <Image src={image2} layout="responsive" />
            </div>
            <div className="column is-6 ml-3">
              <article>
                <p className="title  has-text-link is-hidden-mobile">
                  About Us
                </p>
                <p className="is-size-5 mb-3">
                  Petroleum Engineers is a registered company and a one stop
                  solution centre for most petroleum related problems in the
                  country, specializing in the retail of Lanfeng Fuel Dispensers
                  and Spare parts, Service Station Construction, Servicing &
                  Maintenance of Petroleum Equipment.
                </p>
                <p className="is-size-5 mt-5 mb-3">
                  Our Maintenance team is so well equipped and advanced in
                  modern ways of Fuel Dispensers Installations, Service and
                  Repair of all Fuel Dispensers in the country. As part of the
                  Industry Players, we understand the requirement of our
                  business and appreciate that sometimes maintenance works needs
                  to be responded to in a timely manner without going through
                  bureaucratic process. Our team members are dotted around the
                  country to respond to all problems timely.
                </p>
                <p className="is-size-5 mt-4 mb-0">
                  At Petroleum Engineers you are assured of quality services
                  that are provided with the highest standards of technical
                  support.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <p className="title  has-text-link is-hidden-tablet">What we do</p>
          <div className="columns">
            <div className="column is-6 ml-3">
              <article>
                <p className="title  has-text-link is-hidden-mobile">
                  What we do
                </p>
                <p className="is-size-5 mb-3">
                  Petroleum Engineers is the sole importer of Lanfeng Fuel
                  Dispensers which is gaining grounds in the country due to it's
                  efficiency, durability and cost effectiveness. We also have
                  quality control certification from Ghana, China, Russia among
                  others.
                </p>
                <p className="is-size-5 mt-4 mb-0">
                  Petroleum Engineers is making major waves in the industry with
                  our technical team providing very important solutions to most
                  petroleum related problems at the filling station outlets
                  across the country
                </p>
              </article>
            </div>
            <div className="column is-5">
              <div class="tile is-ancestor">
                <div class="tile is-4 is-vertical is-parent">
                  <div class="tile is-child ">
                    <Image src={image2} layout="intrinsic" />
                  </div>
                  <div class="tile is-vertical is-child ">
                    <Image src={image2} layout="responsive" />
                  </div>
                </div>
                <div class="tile is-parent">
                  <div class="tile is-child">
                    <Image src={image2} layout="responsive" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
