# Hi 👋 My name is Theethawat Savastham (Tin)

My Personal Site. Visit it at [theethawat.dev](https://theethawat.dev)

This Site Create by Using 11ty

## Development

### Normal Development

- Running these 2 commands at the same time. (Can be split in to 2 terminal shell)

```
    npm run dev
```

and

```
    npm run dev:css
```

### Adding New Images

- Config the command in `.eleventy.js`

```js
  module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "th", // Required, this site uses "en"
    // when normal use
    errorMode: "allow-fallback", //"never", // // Opting out of "strict"
    // when to build image
    //errorMode: "never", //"never", // // Opting out of "strict"
  });
```

- Change Error Mode to **never**

```js
  module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "th", // Required, this site uses "en"
    // when normal use
    // when to build image
    errorMode: "never", //"never", // // Opting out of "strict"
  });
```

- Run this command

```
    npm run image
```

- After that change the config to the way before run build image for development

### Build And Deploy

- Run the command

```
    npm run build
```

- Followed by the building the image & css

```
    npm run build:image
```

- Data will located in folder `/docs` and merge to branch `main` to deploy.

## Thankful Resource

- [Image gallery using eleventy-img](https://github.com/bashlk/adventures-with-tech/tree/main/1-eleventy-image-gallery)
