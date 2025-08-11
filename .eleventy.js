module.exports = function(eleventyConfig){
    
    eleventyConfig.addPassthroughCopy("src/resources");
    eleventyConfig.addPassthroughCopy("src/screenshots");

    return {
      dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts"
      }
    };
  }