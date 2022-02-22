import Head from "next/head";
import Layout from "../components/Layout";
import ServiceRows from "../components/ServiceRows";
import WorkedProjectsCard from "../components/WorkedProjectsCard";


const Services = (props) => {

  const data=[
    {id:"dsjods", title:"Project1"},
    {id:"dssadods", title:"Project2"},
    {id:"ds32jods", title:"Project3"},
    {id:"dsjo45ds", title:"Project4"},
    {id:"dsjo675ds", title:"Project4"},   
  ]

  return (
    <Layout props={props}>
      <Head>
        <title>Services</title>
        <meta name="description" content="Page displaying our services at Petroleum Engineers"/>
      </Head>
      <section className="hero  is-large bg-img ">
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
      <section className="section other-projects">

        <p className="is-size-4 has-text-weight-bold has-text-centered-mobile has-text-danger mb-5">Projects we worked on</p>  
        <div className="columns is-multiline">
          {
            data.map(
              (item)=>{
                return(
                  <div key={item.id} className="column is-2">
                    <WorkedProjectsCard data={item}/>
                  </div>
                )
              }
            )
          }
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
