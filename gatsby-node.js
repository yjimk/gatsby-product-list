const path = require("path")
const request = require("request-promise")

exports.createPages = async ({ actions: { createPage } }) => {
  try {
    // Pull the product data during the build phase. New build would need to be triggered
    // if the data was to change. Not suitable for highly dynamic data.
    const products = await request({
      uri: "https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3",
      json: true,
    })

    // Create the index page and hydrate with product data
    await createPage({
      path: "/",
      component: path.resolve(`${__dirname}/src/templates/index.js`),
      context: {
        products,
      },
    })

    return
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}
