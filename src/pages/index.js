import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
export default () => (
    <Layout>
        <SimpleHero>
            <Banner 
                title="continue exploring" 
                info="lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
            >
            <Link to="/tours" className="btn-white">
                explore tours
            </Link>
            </Banner>
        </SimpleHero>
        <About />
        <Services />
    </Layout>
)