import React from 'react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

const Info = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
			) {
				edges {
					node {
						frontmatter {
							title
							date
						}
						excerpt(truncate: true, pruneLength: 100)
						timeToRead
					}
				}
			}
		}
	`)

	return (
		<div>
			<div>
				<h1>ブログリスト</h1>
				<ul>
					{data.allMarkdownRemark.edges.map(({ node }) => {
						return (
							<li key={node.frontmatter.title}>
								<h2>{node.frontmatter.title}</h2>
								<p>{node.frontmatter.date}</p>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
export default Info
