⬅️ [Back (README)](../README.md)

# Getting started

This project is meant to add a default and common SCSS structure to all projects.

The most basic usage is to copy the `📁 ./scss/` content into your own project's `📁 path/to/assets/scss/` folder and start styling.

> You don't need to clone the project to use the boilerplate. You can just copy the files and folders you need.

It should even be included in very small project to allow scale and maintainability if needed in the future.

All file contains their own documentation with use cases and examples. This is important to dig the boilerplate files to understand how to use them.

You can read more about the boilerplate and its usage in the following documentations:

- [Development conventions](./development-conventions.md)
- [Directory structure](./directory-structure.md)
    - [Custom properties](./custom-properties.md)
    - [Functions](./functions.md)
    - [Placeholders](./placeholders.md)
    - [Mixins](./mixins.md)
    - [Variables](./variables.md)

## Dependencies

The only dependency is [modern-normalize](https://www.npmjs.com/package/modern-normalize) and the package imported in the 📄 [scss/main.scss](../scss/main.scss) entry file.

```shell
npm install modern-normalize
```

Depending on your project, you may have to change the import path.

By default, it is set for Vite compilation

```scss
@use "modern-normalize";
```

But you may have to set a alias or relative path :

```scss
// Alias path (often used in Webpack for example)
@use "~/modern-normalize";

// Relative path
@use "../../node_modules/modern-normalize/modern-normalize";
```

And this is true for every package you may import in your project.

For example, we want to include the [swiper](https://swiperjs.com/) library in the project :

```shell
npm install swiper
```

And then import it in the 📄 `scss/vendors/_swiper.scss` file :

```scss
// For Vite compilation :
@use "swiper/swiper-bundle";

// Then custom override styles
.swiper-wrapper {
  box-sizing: border-box;
}
```

## Linters

The boilerplate may not respect your project's **linter rules** directly after installation.

Feel free to adapt the boilerplate to your needs. The main and only rule is to **HAVE linters** with proper check setup. The boilerplate is mainly a starting point for a project that can be modified.

For future versions there will be a **linters setup** to help you start with a good base.
