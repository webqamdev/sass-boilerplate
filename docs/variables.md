# Available SCSS variables and their usages

- [_breakpoint.scss](../src/scss/lib/variables/_breakpoint.scss)
- [_color.scss](../src/scss/lib/variables/_color.scss)
- [_font.scss](../src/scss/lib/variables/_font.scss)
- [_theme.scss](../src/scss/lib/variables/_theme.scss)
- [_transition.scss](../src/scss/lib/variables/_transition.scss)
- [_z-index.scss](../src/scss/lib/variables/_z-index.scss)

Variables in files should be imported **with** namespace to ease readability and avoid conflicts :

```scss
@use "scss/lib/variables/color";
@use "scss/lib/variables/font";

.selector {
  color: color.$black;
  line-height: font.$line-height-default;
}
```
