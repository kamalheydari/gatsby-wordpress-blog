import React from "react";
import { Link } from "gatsby";

import { PostWrapper, ImageMini, Title } from "../Styles/CustomStyles.styles";

const Post = ({ post }) => {
  return (
    <PostWrapper>
      <div className='post__header'>
        <ImageMini
          image={
            post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          }
          alt={post.title}
        />
      </div>
      <div className='post__body'>
        <Link to={`/category/${post.slug}`}>
          <Title
            dangerouslySetInnerHTML={{
              __html: post.title.slice(0, 80) + "...",
            }}
          />
        </Link>
        <div
          className='post__content'
          dangerouslySetInnerHTML={{
            __html: post.excerpt.substring(0, 120) + "...",
          }}
        />
        <Link to={`/category/${post.slug}`} className='post__link'>
          Read more
        </Link>
      </div>
    </PostWrapper>
  );
};

export default Post;
