import Head from "next/head";
import Layout from "../components/Layout";
import ServiceRows from "../components/ServiceRows";


const Services = (props) => {
  return (
    <Layout props={props}>
      <Head>
        <title>Services</title>
        <meta name="description" content="Page displaying our services at Petroleum Engineers"/>
      </Head>
      <section className="hero  is-large bg-img mt-4">
        <div className="hero-body">
          <article>
            <p className="is-size-jumbo is-size-1-mobile has-text-centered-mobile  has-text-right-desktop has-text-white has-text-weight-bold">
              Our Services
            </p>
          </article>
        </div>
      </section>
      <section className="section">
         <ServiceRows/>
      </section>
      <section className="section">
          <div className="columns">
              <div className="column is-offset-1">
                <p className="has-text-centered-mobile has-text-danger">Projects we worked on</p>
              </div>  
          </div>       
      </section>
    
    </Layout>
  );
};

export default Services;

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
