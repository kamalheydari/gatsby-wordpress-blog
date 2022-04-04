import { GatsbyImage } from "gatsby-plugin-image";
import tw, { styled } from "twin.macro";

export const NavigationWrapper = styled.nav`
  ${tw`px-4 border-b-2 border-b-gray-300`}

  ul {
    ${tw`flex gap-4 min-w-full p-2 text-xl text-gray-600  `}
    li:first-child {
      ${tw`mr-auto `}
    }
  }

  .nav-active {
    ${tw`font-bold`}
  }
`;

export const PostWrapper = styled.article`
  ${tw`my-8 p-3 md:flex md:gap-4 `}

  p {
    ${tw`text-sm lg:text-lg text-gray-500 my-2 mb-auto`}
  }
  .post__link {
    ${tw`text-blue-800 text-lg no-underline block md:mt-14 hover:text-blue-900`}
  }
`;

export const ImageMini = styled(GatsbyImage)`
  ${tw`max-h-52 min-h-full w-full md:w-96 md:mr-2 rounded`}
`;

export const ImageFull = styled(GatsbyImage)`
  ${tw`max-h-96 rounded mb-2`}
`;
export const ImageBanner = styled(GatsbyImage)`
  ${tw`w-full my-4 `}
`;
export const ImageCategory = styled(GatsbyImage)`
  ${tw`m-3 rounded w-48 md:w-60 lg:w-96`}
`;

export const Title = tw.h2`
text-xl mb-4 mt-1 text-blue-800 tracking-wide hover:text-blue-900 md:text-2xl md:mt-0
`;

export const PostPageWrapper = tw.div`px-2 my-5`;

export const Content = styled.div`
  ${tw`px-2`}
  p {
    ${tw`text-lg  text-gray-500 my-2 mb-6 md:text-xl`}
  }
  strong {
    ${tw`font-bold text-gray-600`}
  }

  a {
    ${tw`text-blue-500 underline`}
  }
  blockquote {
    ${tw`border-l-4 border-l-blue-500 pl-4`}
  }
`;

export const CategoriesWrapper = styled.div`
  ${tw`my-6`}

  div:nth-child(even) {
    ${tw`flex-row-reverse`}
  }
`;

export const CatWrapper = styled.div`
  ${tw`mx-2 my-6 flex p-1 md:items-center`}

  .cat__desc {
    p {
      ${tw`text-justify`}
    }
    a {
      ${tw`bg-green-400 text-white py-1 px-2 mx-auto mt-4 block max-w-max rounded`}
    }
  }
`;

export const SectionTitle = tw.h2`text-green-600 text-center font-bold text-3xl `;

export const Container = tw.h2`mx-auto max-w-5xl`;

export const FooterWrapper = tw.footer`py-4 border-t-2 border-gray-300 text-center text-2xl text-gray-600`;
