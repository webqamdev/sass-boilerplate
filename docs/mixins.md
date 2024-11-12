⬅️ [Back (Directory Structure)](./directory-structure.md)

# SCSS Mixins

> Located in the [📁 scss/lib/mixins/](../scss/lib/mixins) directory.
> 
> You can refer to the official [Sass documentation](https://sass-lang.com/documentation/at-rules/mixin) for more information.

Mixins in files should be imported **without** namespace :

```scss
@use "scss/lib/mixins/breakpoint" as *;
@use "scss/lib/variables/breakpoint";

.selector {
  color: blue;
  
  @include breakpoint(breakpoint.$tablet) {
    color: red;
  }
}
```

## 📄 [_breakpoint.scss](../scss/lib/mixins/_breakpoint.scss)

Used to create uniformized media queries.

## 📄 [_container.scss](../scss/lib/mixins/_container.scss)

Use to create uniformized container queries.

## 📄 [_hardware-acceleration.scss](../scss/lib/mixins/_hardware-acceleration.scss)

Simple mixin to optimize rendering performance when possible.

## 📄 [_sr-only.scss](../scss/lib/mixins/_sr-only.scss)

Mixin to hide content visually but keep it accessible to screen readers.

## 📄 [_text-gradient.scss](../scss/lib/mixins/_text-gradient.scss)

Mixin to create a gradient on text.

## 📄 [_text-overflow.scss](../scss/lib/mixins/_text-overflow.scss)

Multiple mixins to handle text overflow.

**For example :**

```scss
@use "scss/lib/mixins/text-overflow" as *;

.ellipsis-in-one-line {
  @include text-overflow;
}

.ellipsis-in-two-lines {
  @include text-overflow-multiline(3);
}
```
