module.exports = () => {
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-netlify-cms`,
        options: {
          modulePath: `${__dirname}/src/cms.js`,
        },
      },
    ],
  };
};
