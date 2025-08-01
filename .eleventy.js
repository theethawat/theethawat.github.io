const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const sharp = require("sharp");
const Image = require("@11ty/eleventy-img");
const dayjs = require("dayjs");
const _ = require("lodash");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const GALLERY_IMAGE_WIDTH = 192;
const LANDSCAPE_LIGHTBOX_IMAGE_WIDTH = 2000;
const PORTRAIT_LIGHTBOX_IMAGE_WIDTH = 720;

// Credit https://www.bash.lk/posts/tech/1-elventy-image-gallery/
function galleryShortcode(content, name) {
  return `
      <div>
        <script type="module">
              import PhotoSwipeLightbox from '/js/photoswipe-lightbox.esm.min.js';
              import PhotoSwipe from '/js/photoswipe.esm.min.js';
             
          </script>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 items-center" id="gallery-${name}">
              ${content}
          </div>
        
      </div>
  `.replace(/(\r\n|\n|\r)/gm, "");
}

async function galleryImageShortcode(src, alt) {
  // const source = `./src${src}`;
  // let lightboxImageWidth = LANDSCAPE_LIGHTBOX_IMAGE_WIDTH;

  // const metadata = await sharp(source).metadata();

  // if (metadata.height > metadata.width) {
  //   lightboxImageWidth = PORTRAIT_LIGHTBOX_IMAGE_WIDTH;
  // }

  // const options = {
  //   formats: ["jpeg"],
  //   widths: [GALLERY_IMAGE_WIDTH, lightboxImageWidth],
  //   urlPath: "./src/",
  //   outputDir: "./_site/img",
  // };

  // const genMetadata = await Image(source, options);

  // console.log("genMetadata.jpeg", genMetadata.jpeg);
  //   <a href="${src}"   data-pswp-width="1875"    data-cropped="true"
  //   data-pswp-height="2500" >
  //         <img src="${src}"
  //  alt="${alt}" />
  //     </a>
  return `
    <a href="${src}" class="hover:shadow-md"   >
        <img src="${src}"  
 alt="${alt}" />
    </a>
  `.replace(/(\r\n|\n|\r)/gm, "");
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "th", // Required, this site uses "en"
    // when normal use
    errorMode: "allow-fallback", //"never", // // Opting out of "strict"
    // when to build image
    //errorMode: "never", //"never", // // Opting out of "strict"
  });
  eleventyConfig.addNunjucksAsyncFilter("postcss", (cssCode, done) => {
    postcss([tailwindcss(require("./tailwind.config.js")), autoprefixer()])
      .process(cssCode)
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null)
      );
  });

  eleventyConfig.addWatchTarget("./src/**/*.css");
  eleventyConfig.addPairedLiquidShortcode("gallery", galleryShortcode);
  eleventyConfig.addLiquidShortcode("galleryImage", galleryImageShortcode);
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addFilter("friendlyDate", (dateObj) => {
    return dayjs(dateObj).format("DD MMMM YYYY");
  });
  eleventyConfig.addFilter("extractHeaders", (content) => {
    const headers = content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/g);
    if (!headers) {
      return [];
    }
    return headers.map((header) => {
      const text = header.replace(/<[^>]+>/g, ""); // Remove HTML tags
      const textWithHyphens = text.replace(/\s+/g, "-");
      const cleanedId = textWithHyphens.replace(/-#$/, "");
      return { text, id: cleanedId };
    });
  });

  const md = markdownIt({ html: true }).use(markdownItAnchor, {
    // Options for anchor generation
    //    permalink: markdownItAnchor.permalink.ariaHidden({}),
    slugify: (s) =>
      encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, "-")),
  });
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("onlyExcerpt", (content) => {
    const excerptMatch = content.match(/<p>(.*?)<\/p>/);
    if (excerptMatch) {
      // Remove HTML tags from the excerpt
      const textWithoutHtml = content.replace(/<\/?[^>]+(>|$)/g, "");
      return _.truncate(textWithoutHtml, {
        length: 200,
      });
    }
    return "";
  });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
