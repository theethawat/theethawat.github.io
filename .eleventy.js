const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const sharp = require("sharp");
const Image = require("@11ty/eleventy-img");

const GALLERY_IMAGE_WIDTH = 192;
const LANDSCAPE_LIGHTBOX_IMAGE_WIDTH = 2000;
const PORTRAIT_LIGHTBOX_IMAGE_WIDTH = 720;

// Credit https://www.bash.lk/posts/tech/1-elventy-image-gallery/
function galleryShortcode(content, name) {
  return `
      <div>
          <div class="gallery pswp-gallery pswp-gallery" id="gallery-${name}">
              ${content}
          </div>
          <script type="module">
              import PhotoSwipeLightbox from '/js/photoswipe-lightbox.esm.min.js';
              import PhotoSwipe from '/js/photoswipe.esm.min.js';
             
          </script>
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

  return `
      <a href="${src}"   data-pswp-width="1875"    data-cropped="true" 
    data-pswp-height="2500" >
          <img src="${src}"  
   alt="${alt}" />
      </a>
  `.replace(/(\r\n|\n|\r)/gm, "");
}

module.exports = (eleventyConfig) => {
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
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
