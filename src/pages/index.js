import React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.css'
import { graphql, Link } from 'gatsby'

export default function Home() {
  
  //const { title, description } = data.site.siteMetadata

  return(
    <Layout>
      <section className="header">
        <div>
          <h2>Hello World</h2>
          <h3>From Gatsby</h3>
          <p>Building new pages</p>
          <Link to="/projects" className="btn">My Portfolio project</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth: '100%'}}/>
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         copyright
//         description
//         title
//       }
//     }
//   }`
