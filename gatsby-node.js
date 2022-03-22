const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const archiveTemplate = path.resolve("./src/templates/archive.js");

  const result = await graphql(`
    {
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `);

  const { allWpCategory } = result.data;

  allWpCategory.edges.forEach((category) => {
    const numberOfPosts = category.node.count;

    if (numberOfPosts > 0 || category.node.name !== "uncategorized") {
      createPage({
        path: category.node.uri,
        component: archiveTemplate,
        context: {
          catId: category.node.id,
          catUri: category.node.uri,
        },
      });
    }
  });
};
