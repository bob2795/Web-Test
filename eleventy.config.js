export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('admin');
    return {
        dir: {
        input: "src"
        }
    };
}