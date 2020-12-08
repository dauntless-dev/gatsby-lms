const componentWithMDXScope = require("gatsby-plugin-mdx/component-with-mdx-scope");
const path = require("path");
const startCase = require("lodash.startcase");

exports.createPages = ({ page, graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fields {
                    id
                  }
                  frontmatter {
                    language
                  }
                  tableOfContents
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => { 
          
          const template =
          node.frontmatter.language === "de"
          ? "./src/templates/de.js"
          : node.frontmatter.language === "es"
          ? "./src/templates/es.js"
          : node.frontmatter.language === "it"
          ? "./src/templates/it.js"
          : node.frontmatter.language === "por"
          ? "./src/templates/por.js"
          : "./src/templates/docs.js"

          createPage({
            path: node.fields.slug ? node.fields.slug : "/",
            component: path.resolve(template),
            context: {
              id: node.fields.id
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: { 
        $components: path.resolve(__dirname, "src/components"),
        buble: '@philpl/buble' // to reduce bundle size
      }
    }
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-export-default-from"
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, "");

    if (value === "index") {
      value = "";
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`
    });

    createNodeField({
      name: "id",
      node,
      value: node.id
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title || startCase(parent.name)
    });
  }
};
