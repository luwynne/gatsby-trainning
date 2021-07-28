import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/projects.css'
import { graphql, Link } from 'gatsby'

export default function Projects({ data }) {

    const projects = data.allMarkdownRemark.nodes;

    return (
        <Layout>
            <div className="portfolio">
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've created</h3>
                <div className='projects'>
                    { projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    )) }
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectsPage {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              frontmatter {
                slug
                stack
                title
              }
              id
            }
        }
    }
`
