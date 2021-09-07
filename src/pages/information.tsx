import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const InformationPage: FC.React = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // console.log(data)
  return (
    <div>
      <p>インフォメーション</p>
      <p>{data.allMarkdownRemark.totalCount}件表示</p>

      {data.allMarkdownRemark.edges.map((edge, index) => (
        <div key={index}>
          <div>title / {edge.node.frontmatter.title}</div>
          <div>date / {edge.node.frontmatter.date}</div>
          {/* TODO: Create Page */}
          {/* <Link to={edge.node.fields.slug}>
            Show More: {edge.node.frontmatter.title}
          </Link> */}
        </div>
      ))}
    </div>
  )
}
export default InformationPage
