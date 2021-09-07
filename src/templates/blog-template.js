import React from "react"
import { Link, graphql } from "gatsby"

const Blog = props => {
  return (
    <div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <Link to={`/bloglist/`}>
        <h2>{props.data.markdownRemark.title}</h2>
        <p>{props.data.markdownRemark.date}</p>
      </Link>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
      frontmatter {
        title
      }
      #   query {
      #     allMarkdownRemark {
      #       edges {
      #         node {
      #           frontmatter {
      #             title
      #             date(formatString: "MMMM DD, YYYY")
      #           }
      #           excerpt
      #           fields {
      #             slug
      #           }
      #         }
      #       }
      #     }
      #   }
    }
  }
`

export default Blog
