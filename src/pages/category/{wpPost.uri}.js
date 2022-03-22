import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../../components";
import {
  Title,
  PostPageWrapper,
  ImageFull,
  Content,
} from "../../Styles/CustomStyles.styles";

export default function PostTemplate({ data: { post } }) {
  return (
    <Layout>
      <PostPageWrapper>
        <ImageFull
          image={
            post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          }
          alt={post.title}
        />
        <Title dangerouslySetInnerHTML={{ __html: post.title }} />
        <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      </PostPageWrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    post: wpPost(id: { eq: $id }) {
      id
      title
      content
      featuredImage {
        node {
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
