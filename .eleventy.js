module.exports = function(eleventyConfig) {
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.addPassthroughCopy("**/*.nojekyll");
    return {
		dir: {
			output: "_docs",
		},
	};
};