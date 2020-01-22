import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div>
          {data.allWordpressPage.edges.map(page => (
            <div key={page.node.id}>
              <h1>{page.node.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: page.node.content }} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
    query {
        allWordpressPage {
            edges {
                node {
                    id,
                    title,
                    excerpt,
                    content,
                    slug,
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
        allWordpressPost(sort: { fields: [date] }) {
            edges {
                node {
                    title,
                    excerpt,
                    slug
                }
            }
        }
    }
`
