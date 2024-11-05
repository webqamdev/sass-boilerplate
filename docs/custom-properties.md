⬅️ [Back (Directory Structure)](./directory-structure.md)

# CSS Variables (custom properties) in the boilerplate

> Large Scope variables can be located in the [📁 scss/custom-properties/](../scss/custom-properties) directory
> Other variable can be found and created anywhere in the boilerplate. 
> 
> You can refer to the official [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) for more information.

## Naming convention

To better understand the custom properties, we have defined a naming convention :

It should always be in [kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) format.

> **--<b style="color:#3d3dff;">{prefix}</b>-<b style="color:orange;">{context}</b>-<b style="color:green;">{property}</b>-<b style="color:red;">{state}</b>: value;**

The goal of this naming convention is to have a better understanding the role of the variable and to avoid conflicts.

### Definitions

#### <b style="color:#3d3dff;">{prefix}</b>

The prefix is used to split the "scope" or the variable. For example, it should be used when you are developing a library.

The css of the main project should not have a prefix.

#### <b style="color:orange;">{content}</b>

The context is used to indicate the "use case" of the variable. For example, it can be a component name.

#### <b style="color:green;">{property}</b>

The property should match the CSS property name that you want to define.

#### <b style="color:red;">{state}</b>

Used to differentiate the different states of the property. For example, it can be `hover`, `focus`, `active`, `disabled`, etc.
It can also be combined like `hover-focus` or `hover-active`, etc. And it can also translate

### Examples

```scss
selector {
  // `gui` as the {context}
  // `color` as the {property}
  // `primary` as the {state}
  --gui-color-primary: #000;
  
  color: var(--gui-color-primary);
}

selector {
  // `wq` as the {prefix}
  // `button` as the {context}
  // `color` as the {property}
  --wq-button-color: #fff;
  
  // `hover` as the {state}
  --wq-button-color-hover: #000;
  
  // `hover-focus-visible` as the {state}
  --wq-button-color-hover-focus-visible: #555;
  
  color: var(--wbl-button-color);
  
  &:hover {
    color: var(--wbl-button-color-hover);
    
    &:focus-visible {
      color: var(--wbl-button-color-hover-focus-visible);
    }
  }
}

selector {
  // `site-header` as the {context}
  // `font-weight` as the {property}
  --site-header-font-weight: bold;
  
  font-weight: var(--site-header-font-weight);
}
```

## Usage

In CSS, one of the main concept is the [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

It is better to keep a lower specificity in your CSS selector and property definition to avoid conflicts and to have a more maintainable code.

Custom properties are a way to avoid this specificity and to have a more flexible way to set and use properties.

### Responsive properties

Custom properties can be used to set responsive properties.

```scss
@use "scss/lib/mixins/breakpoint" as *;
@use "scss/lib/variables/breakpoint";

selector {
  --component-border-color: green;
    
  color: var(--component-color, blue);
  border: 5px solid var(--component-border-color, blue);

  @include breakpoint(breakpoint.$tablet) {
    --component-color: red;
    --component-border-color: purple;
  }
}
```

Here is the CSS result :

```css
selector {
  --component-border-color: green;
    
  color: var(--component-color, blue);
  border: 5px solid var(--component-border-color, blue);
}

@media screen and (min-width: 768px) {
  selector {
    --component-color: red;
    --component-border-color: purple;
  }
}
```

Here are the values calculated by the browser :

```css
selector {
  color: blue;
  border: 5px solid green;
}

@media screen and (min-width: 768px) {
  selector {
    color: red;
    border: 5px solid purple;
  }
}
```

### Theme properties

Custom properties can be used to set theme properties.

```scss
// File `scss/custom-properties/_common-theme.scss`
:root {
  --theme-quote-color: red;
}
```

```scss
// File `scss/custom-properties/_primary-theme.scss`
body.primary-theme {
  --theme-quote-color: blue;
}
```

```scss
// File `scss/custom-properties/_secondary-theme.scss`
body.secondary-theme {
  --theme-quote-color: green;
}
```

```scss
// File `scss/components/_quote-component.scss`
.quote-component {
  color: var(--theme-quote-color, black);
}
```

```html
<body class="primary-theme">
  <!-- Computed color : `blue` -->
  <div class="quote-component">Hello world</div>
</body>

<body class="secondary-theme">
  <!-- Computed color : `green` -->
  <div class="quote-component">Hello world</div>
</body>

<body>
  <!-- Computed color : `red` -->
  <div class="quote-component">Hello world</div>
</body>
```

### Cascading component development

The concept here is to split the component development in multiple files and to use custom properties to set the style properties.

- First, we have the "**config**" file, to define the style properties with dedicated CSS variables.


- Then, we have the "**theme**" file, to customize the style properties by adding new ones or by using CSS variables.


- Finally, we have the "**component**" file, which use the config and/or theme placeholders.

```scss
// Placeholder config file `scss/lib/placeholders/_button.scss`
%button {
  color: var(--button-color, black);
  background-color: var(--button-background-color, white);
  border:
    var(--button-border-width, 2px)
    var(--button-border-style, solid)
    var(--button-border-color, white);
  
  &:hover {
    color: var(--button-color-hover, black);
    background-color: var(--button-background-color-hover, white);
    border-color: var(--button-border-color-hover, white);
  }
}
```

```scss
// Placeholder theme file `scss/lib/placeholders/buttons/_theme-button.scss`
@use "../button" as *;

%theme-button {
  @extend %button;
  
  &--primary {
    --button-color: blue;
    --button-color-hover: cyan;
  }
  
  &--secondary {
    --button-color: green;
    --button-color-hover: olive;
  }
}
```

```scss
// Placeholder theme file `scss/components/atoms/_atom-button.scss`
@use "../../lib/placeholders/buttons/theme-button" as *;

.atom-button-primary {
  @extend %theme-button;
  @extend %theme-button--primary;
}

.atom-button-secondary {
  @extend %theme-button;
  @extend %theme-button--secondary;
}
```

Here is the result in CSS :

```css
.atom-button-secondary,
.atom-button-primary {
  color: var(--button-color, black);
  background-color: var(--button-background-color, white);
  border: var(--button-border-width, 2px) var(--button-border-style, solid) var(--button-border-color, white);
}

.atom-button-secondary:hover,
.atom-button-primary:hover {
  color: var(--button-color-hover, black);
  background-color: var(--button-background-color-hover, white);
  border-color: var(--button-border-color-hover, white);
}

.atom-button-primary {
  --button-color: blue;
  --button-color-hover: cyan;
}

.atom-button-secondary {
  --button-color: green;
  --button-color-hover: olive;
}
```

Here we can see that the selector `.atom-button-primary` and `.atom-button-secondary` have a very low specificity because this is the chained selector `.atom-button-secondary, .atom-button-primary` which has the role to configure style properties (thanks to the `%button` placeholder).

And now, we can easily change the border-width (for example) of both buttons by changing the %theme-button placeholder or apply the change only in one of the selector.
