import { graphql } from "gatsby";
import React from "react";
import { Layout, Post } from "../components";

const ArchiveTemplate = ({ pageContext: { catId }, data }) => {
  const posts = data.allWpPost.edges;

  return (
    <Layout>
      {posts.map((post) => (
        <Post key={post.node.id} post={post.node} />
      ))}
    </Layout>
  );
};

export default ArchiveTemplate;

export const pageQuery = graphql`
  query($catId: String!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
    ) {
      edges {
        node {
          id
          excerpt
          title
          uri
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`;
