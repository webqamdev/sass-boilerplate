# Boilerplate Directory structure

This is the directory structure of the project. The project is divided into several directories, each with a specific purpose.

Each file contains its own documentation.

## 📁 scss/

The root directory contains all the entry files (like `main.scss`) and the most basic files like `_font-faces.scss`, `_lib.scss` and `_print.scss`.

## 📁 scss/lib/

The lib folder is build to be imported anywhere in the project (as shared styles for VueJs components for example).

> For this reason, it is important to exclude "real" CSS selector from this folder as they can be duplicated on the project compilation. (`%placeholders` and `@mixins` act like "ghost" selectors which are not compiled in the final CSS file).

The `lib/` folder contains all the import files for subdirectories :

- [_functions.scss](../src/scss/lib/_functions.scss)
- [_variables.scss](../src/scss/lib/_variables.scss)
- [_mixins.scss](../src/scss/lib/_mixins.scss)
- [_placeholders.scss](../src/scss/lib/_placeholders.scss)

They import all sub files with the [@forward at-rule](https://sass-lang.com/documentation/at-rules/forward/) to allow lib folder global import :

```scss
@use "scss/lib";

selector {
  font-size: lib.px-to-rem(lib.$font-base-size);
}
```

Or without the namespace :

```scss
@use "scss/lib" as *;

selector {
  font-size: px-to-rem($font-base-size);
}
```

In this example, the variable `$font-base-size` is defined in the file `lib/variables/_font.scss` with the name `$base-size`. It is available in this format because the `lib/_variables.scss` file import `lib/variables/_font.scss` with a custom namespace prefix : `font-`.

> It is not recommended to import globally the `lib/` folder in components as it give a global scope to everything and can lead to conflicts.

## 📁 [scss/lib/functions/](./functions.md)

## 📁 [scss/lib/variables/](./variables.md)

## 📁 [scss/lib/mixins/](./mixins.md)

## 📁 [scss/lib/placeholders/](./placeholders.md)

#### scss/lib/placeholders/buttons/

#### scss/lib/placeholders/links/

#### scss/lib/placeholders/inputs/

## 📁 [scss/custom-properties/](./custom-properties.md)

## 📁 scss/resets/

## 📁 scss/vendors/

Vendor style import and/or override, like [swiper](https://swiperjs.com/) default library styles.

## 📁 scss/components/

Component styling, like header, forms, card list, etc.

This is where most of the style should be written in a project.
