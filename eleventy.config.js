export default function (eleventyConfig) {
    eleventyConfig.addTemplateFormats('css');
    eleventyConfig.addPassthroughCopy('admin');
    return {
        dir: {
        input: "src"
        }
    };
}