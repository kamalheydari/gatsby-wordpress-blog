import { graphql } from "gatsby";
import React from "react";
import { Category, Layout, Post } from "../components";
import {
  SectionTitle,
  ImageBanner,
  CategoriesWrapper,
} from "../Styles/CustomStyles.styles";

const IndexPage = ({ data }) => {
  const posts = data.allWpPost.edges;
  const ACF = data.wpPage.ACF_HomePage;

  return (
    <Layout>
      <ImageBanner
        image={ACF.heroImage.localFile.childImageSharp.gatsbyImageData}
        alt='banner'
      />
      <CategoriesWrapper>
        <SectionTitle>All Categories</SectionTitle>
        <Category
          image={ACF.cat1Image.localFile.childImageSharp.gatsbyImageData}
          link={ACF.cat1Link}
          text={ACF.cat1Text}
          cat='Music'
        />
        <Category
          image={ACF.cat2Image.localFile.childImageSharp.gatsbyImageData}
          link={ACF.cat2Link}
          text={ACF.cat2Text}
          cat='Movie'
        />
        <Category
          image={ACF.cat3Image.localFile.childImageSharp.gatsbyImageData}
          link={ACF.cat3Link}
          text={ACF.cat3Text}
          cat='Art'
        />
      </CategoriesWrapper>
      <SectionTitle>Latest Posts</SectionTitle>
      {posts.map((post) => (
        <Post key={post.node.id} post={post.node} />
      ))}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allWpPost(limit: 4) {
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

    wpPage(uri: { eq: "/" }) {
      ACF_HomePage {
        cat1Link
        cat1Text
        cat2Link
        cat2Text
        cat3Link
        cat3Text
        heroImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        cat1Image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        cat2Image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        cat3Image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
