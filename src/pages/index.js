import React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.css'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Home({ data }) {
  
  console.log(data);

  return(
    <Layout>
      <section className="header">
        <div>
          <h2>Hello World</h2>
          <h3>From Gatsby</h3>
          <p>Building new pages</p>
          <Link to="/projects" className="btn">My Portfolio project</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`
