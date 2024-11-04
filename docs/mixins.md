# Available SCSS mixins and their usages

- 📄 [_breakpoint.scss](../src/scss/lib/mixins/_breakpoint.scss)
- 📄 [_container.scss](../src/scss/lib/mixins/_container.scss)
- 📄 [_hardware-acceleration.scss](../src/scss/lib/mixins/_hardware-acceleration.scss)
- 📄 [_sr-only.scss](../src/scss/lib/mixins/_sr-only.scss)
- 📄 [_text-gradient.scss](../src/scss/lib/mixins/_text-gradient.scss)
- 📄 [_text-overflow.scss](../src/scss/lib/mixins/_text-overflow.scss)

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
