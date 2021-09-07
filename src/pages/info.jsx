import React from "react"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const Info = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            id
            html
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt(truncate: true, pruneLength: 100)
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      /<h1>ブログリスト</h1>
      <p>{data.allMarkdownRemark.totalCount}件表示</p>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>

              <div
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
              <Link to={node.fields.slug}>
                Show More: {node.frontmatter.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}
export default Info
