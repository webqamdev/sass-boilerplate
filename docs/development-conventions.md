⬅️ [Back (Getting Started)](./getting-started.md)

# SCSS Boilerplate development conventions

## BEM methodology

The SCSS Boilerplate uses the [BEM methodology](http://getbem.com/) to structure CSS classes.

## File and directory structure

This boilerplate follow some simple principals to structure component styling :

* One selector (or **Block**, in **BEM**) = One file
* One function = One file
* One placeholder = One file
* One mixin = One file
* If you don't like the previous rules, then do as you want but be **consistent** (the [_text-overflow.scss](../scss/lib/mixins/_text-overflow.scss) mixin is an example).

> If a BEM selector start with .my-custom-component, then there should be a dedicated file in the `scss/components/` directory with the same Block name. Like so `scss/components/_my-custom-component.scss`.

* If you share multiple styles :
  * Use a placeholder to share and extend the style.
  * Use a mixin if it depends on a variable or on a media/container query (placeholder cannot be included inside mixin).

## CSS Specificity

The boilerplate uses a low [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) approach to avoid conflicts and to make the code more maintainable.

This is a reason why we use placeholders with the **Config** and **Theme** file approach (see [placeholders documentation](placeholders.md)). But this is not a rule, only a recommendation.

## SCSS Selector order

To keep a consistent style declarator order in every selector, we recommend the following order :

```scss
selector {
  // 1. SCSS Variables
  $scss-variable: red;

  // 2. SCSS Placeholders or Mixins (depending on the need)
  @extend %placeholder;
  @include mixin();

  // 3. CSS Variable declarations
  --css-variable: #{$scss-variable};

  // 4. CSS properties declarations
  color: var(--css-variable);

  // 5. @media and @container queries are at the same level
  //    Used to override previous declarations and next 'bem-selectors', 'sub-selector' and 'pseudo-elements'
  //    Not used to override 'pseudo-selector'. They should have their own @media query
  @include breakpoint(768px) { /* ... */ }
  @include container(250px) { /* ... */ }

  // 6. Pseudo selectors like :hover, :focus, etc.
  &:pseudo-selector { /* ... */ }
  
  // 7. Pseudo elements like ::before, ::after, etc.
  &::pseudo-element { /* ... */ }
  
  // 7. BEM 'Modifier' selector
  &--bem-modifier { /* ... */ }

  // 8. Chained selectors
  &.chained-selector { /* ... */ }

  // 9. BEM 'Element' selector
  &__bem-selector { /* ... */ }

  // 10. Sub selector (like #id-selector, .class, etc.)
  sub-selector { /* ... */ }
}
```
