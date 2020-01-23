import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default ({ pageContext }) => (
  <Layout>
    {pageContext.posts.map(post => (
      <div key={post.node.id}>
        <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
        <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
      </div>
    ))}
    {Array.from({ length: pageContext.totalPages }).map((page, index) => (
      <div key={index}>
        <Link to={index === 0 ? "/blog" : `/blog/${index + 1}`}>
          {index + 1}
        </Link>
      </div>
    ))}
  </Layout>
);
