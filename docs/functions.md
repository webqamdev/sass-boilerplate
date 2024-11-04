⬅️ [Back (Directory Structure)](./directory-structure.md)

# SCSS Functions

> Located in the [📁 scss/lib/functions/](../src/scss/lib/functions/) directory.
> 
> You can refer to the official [Sass documentation](https://sass-lang.com/documentation/at-rules/function/) for more information.

Each file contain only one function to ease readability and code splitting.

Functions should be imported **without** namespace :

```scss
@use "scss/lib/functions/px-to-rem" as *;

.selector {
  font-size: px-to-rem(16px);
}
```

Or you will be required to use the namespace, which is not recommended for visibility :

```scss
@use "scss/lib/functions/px-to-rem";

.selector {
  font-size: px-to-rem.px-to-rem(16px);
}
```

## 📄 [_px-to-rem.scss](../src/scss/lib/functions/_px-to-rem.scss)

Cast a `px` value to a `rem` value.

```scss
@use "scss/lib/functions/px-to-rem" as *;

.selector {
  font-size: px-to-rem(16px); // Output `1rem`
}
```

## 📄 [_px-to-em.scss](../src/scss/lib/functions/_px-to-em.scss)

Cast a `px` value to an `em` value.

```scss
@use "scss/lib/functions/px-to-em" as *;

.selector {
  font-size: px-to-em(16px); // Output `1em`
}
```

## 📄 [_em-to-px.scss](../src/scss/lib/functions/_em-to-px.scss)

Cast an `em` value to a `px` value.

```scss
@use "scss/lib/functions/em-to-px" as *;

.selector {
  font-size: em-to-px(1em); // Output `16px`
}
```

## 📄 [_em-to-rem.scss](../src/scss/lib/functions/_em-to-rem.scss)

Cast an `em` value to a `rem` value.

```scss
@use "scss/lib/functions/em-to-rem" as *;

.selector {
  font-size: em-to-rem(1em); // Output `1rem`
}
```

## 📄 [_strip-unit.scss](../src/scss/lib/functions/_strip-unit.scss)

Strip the unit from a value.

```scss
@use "scss/lib/functions/strip-unit" as *;

.selector {
  font-size: strip-unit(16px) * 2em; // 16 * 2em => 32em
}
```

## 📄 [_text-contrast.scss](../src/scss/lib/functions/_text-contrast.scss)

Calculate the contrast ratio between two colors.

```scss
@use "scss/lib/functions/text-contrast" as *;
@use "scss/lib/variables/color";

.dark-selector {
  background-color: color.$black;
  color: text-contrast(color.$black, #999, red); // Output `#999`
}

.light-selector {
  background-color: color.$white;
  color: text-contrast(color.$white, #999, red); // Output `red`
}
```

## 📄 [_arrow-shape-polygon.scss](../src/scss/lib/functions/_arrow-shape-polygon.scss)

Generate a polygon shape for an arrow.

```scss
@use "scss/lib/functions/arrow-shape-polygon" as *;

.element {
  clip-path: arrow-shape-polygon(10px, 10px);
}
```
