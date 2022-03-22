import { graphql } from "gatsby";
import React from "react";
import { Layout, Post } from "../components";

const IndexPage = ({ data }) => {
  const posts = data.allWpPost.edges;

  return (
    <Layout>
      {posts.map((post) => (
        <Post key={post.node.id} post={post.node} />
      ))}
    </Layout>
  );
};

export default IndexPage;

export const allPosts = graphql`
  {
    allWpPost {
      edges {
        node {
          id
          title
          slug
          categories {
            nodes {
              name
            }
          }
          excerpt
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
