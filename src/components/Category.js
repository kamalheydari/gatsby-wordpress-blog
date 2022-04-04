import React from 'react';
import { Link } from 'gatsby';


import { CatWrapper, ImageCategory } from "../styles/CustomStyles.styles";

const Category = ({ image, link, text,cat }) => {
  return (
    <CatWrapper>
      <div className='cat__img'>
        <ImageCategory
          className='cat__img'
          image={image}
          width={600}
          height={320}
          alt='cat img'
        />
      </div>
      <div className='cat__desc'>
        <p>{text}</p>
        <Link to={link}>
          See all {cat} posts
        </Link>
      </div>
    </CatWrapper>
  );
};

export default Category;
