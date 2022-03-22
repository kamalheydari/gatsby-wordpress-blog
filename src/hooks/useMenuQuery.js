import { graphql, useStaticQuery } from "gatsby";

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      menu: wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            id
            url
            label
          }
        }
      }
    }
  `);
  return data;
};
