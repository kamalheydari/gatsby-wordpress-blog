import { GatsbyImage } from "gatsby-plugin-image";
import tw, { styled } from "twin.macro";

export const NavigationWrapper = styled.nav`
  ${tw`max-w-6xl mx-auto px-4 border-b-2 border-b-gray-300`}

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
  ${tw`max-w-5xl mx-auto my-8 p-3 md:flex relative`}

  p {
    ${tw`text-sm md:text-lg text-gray-500 my-2 mb-6`}
  }
  .post__link {
    ${tw`text-blue-800 text-lg no-underline absolute bottom-2 hover:text-blue-900`}
  }
`;

export const ImageMini = styled(GatsbyImage)`
  ${tw`max-h-52 min-h-full md:w-96 mr-4 rounded`}
`;

export const ImageFull = styled(GatsbyImage)`
  ${tw`max-h-96 rounded mb-2`}
`;

export const Title = tw.h2`
text-xl mb-4  mt-1 text-blue-800 tracking-wide hover:text-blue-900 md:text-2xl md:mt-0
`;

export const PostPageWrapper = tw.div`px-2 my-5 mx-auto max-w-5xl`;

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
