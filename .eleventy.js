module.exports = function(eleventyConfig) {
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

    eleventyConfig.addPassthroughCopy("public");

    return {
		dir: {
			output: "docs",
		},
	};
};