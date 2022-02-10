import Head from 'next/head'
import Image from 'next/image'
import CompanyCard from '../components/CompanyCard'
import CompanyRow from '../components/CompanyRow'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HotProducts from '../components/HotProducts'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import ProductCard from '../components/ProductCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="has-background-light">
      <Layout>
        <div className="section has-background-light">
          <article >
            <p className="is-size-4 has-text-danger has-text-centered">
              OUR COMPANY
            </p>
            <p className='is-size-2-desktop has-text-black has-text-centered mx-6'>
              At Petroleum Engineers, we believe that our customers deserve the
              best and thus we deliver nothing but the best.
            </p>
          </article>
        </div>
        <section className='section'>
          <CompanyRow/>
        </section>
        <HotProducts />
        {/* <Contact/> */}
        {/* <ProductCard/> */}
      </Layout>
    </div>
  );
}
