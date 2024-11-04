# Available SCSS functions and their usages

- 📄 [_arrow-shape-polygon.scss](../src/scss/lib/functions/_arrow-shape-polygon.scss)
- 📄 [_em-to-px.scss](../src/scss/lib/functions/_em-to-px.scss)
- 📄 [_em-to-rem.scss](../src/scss/lib/functions/_em-to-rem.scss)
- 📄 [_px-to-em.scss](../src/scss/lib/functions/_px-to-em.scss)
- 📄 [_px-to-rem.scss](../src/scss/lib/functions/_px-to-rem.scss)
- 📄 [_strip-unit.scss](../src/scss/lib/functions/_strip-unit.scss)
- 📄 [_text-contrast.scss](../src/scss/lib/functions/_text-contrast.scss)

Functions in files should be imported **without** namespace :

```scss
@use "scss/lib/functions/px-to-rem" as *;

.selector {
  font-size: px-to-rem(16px);
}
```

Or you will be required to use the namespace :

```scss
@use "scss/lib/functions/px-to-rem";

.selector {
  font-size: px-to-rem.px-to-rem(16px);
}
```
