⬅️ [Back (Directory Structure)](./directory-structure.md)

# SCSS Variables

> Located in the [📁 scss/lib/variables/](../scss/lib/variables) directory.
> 
> You can refer to the official [Sass documentation](https://sass-lang.com/documentation/variables/) for more information.

Variables in files should be imported **with** namespace to ease readability and avoid conflicts :

```scss
@use "scss/lib/variables/color";
@use "scss/lib/variables/font";

.selector {
  color: color.$black;
  line-height: font.$line-height-default;
}
```

Variable files should be named in singular to ease namespace usage.

## 📄 [_breakpoint.scss](../scss/lib/variables/_breakpoint.scss)

Breakpoint variables are used to set responsive breakpoints.

It can also be used to declare component-specific breakpoints. For example :

> `scss/lib/variables/_breakpoint.scss`
> ```scss
> $site-header-burger-menu: 1024px;
> ```

> `scss/components/layouts/_site-header.scss`
> ```scss
> @use "scss/lib/mixins/breakpoint" as *;
> @use "scss/lib/variables/breakpoint";
> 
> .site-header {
>   height: 80px;
> 
>   @include breakpoint(breakpoint.$site-header-burger-menu) {
>     height: 100px;
>   }
> 
>   &__butger-button {
>     @include breakpoint(breakpoint.$site-header-burger-menu) {
>       display: none;
>     }
>   }
> }
> ```


> `scss/components/buttons/_header-burger-button.scss`
> ```scss
> @use "scss/lib/mixins/breakpoint" as *;
> @use "scss/lib/variables/breakpoint";
> 
> .header-burger-button {
>   @include breakpoint(breakpoint.$site-header-burger-menu) {
>     display: none;
>   }
> }
> ```

## 📄 [_color.scss](../scss/lib/variables/_color.scss)

Used to list all color used in the project.

## 📄 [_font.scss](../scss/lib/variables/_font.scss)

Used to list all font family, name, weight, used in the project.

## 📄 [_theme.scss](../scss/lib/variables/_theme.scss)

Used to list global component and behavior variables.

## 📄 [_transition.scss](../scss/lib/variables/_transition.scss)

Used to list transition and animation variables which are often shared across multiple components.

## 📄 [_z-index.scss](../scss/lib/variables/_z-index.scss)

Used to ease z-index management and usage across the project.
