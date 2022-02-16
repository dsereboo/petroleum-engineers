import Layout from "../components/Layout";
import ServiceRows from "../components/ServiceRows";


const Services = () => {
  return (
    <Layout>
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
