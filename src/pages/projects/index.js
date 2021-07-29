import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/projects.css'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Projects({ data }) {

    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className="portfolio">
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've created</h3>
                <div className='projects'>
                    { projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    )) }
                </div>
                <p>Like what you see? Email me at {contact} for a quote.</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectsPage {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              frontmatter {
                slug
                stack
                title
                thumb{
                    childImageSharp{
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
              }
              id
            }
        }
        contact: site{
            siteMetadata{
                contact
            }
        }
    }
`
