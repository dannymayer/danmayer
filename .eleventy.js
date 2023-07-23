const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    // Eleventy Plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Eleventy Content Sources
    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
    };
};
