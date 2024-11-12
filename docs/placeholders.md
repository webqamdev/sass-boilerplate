⬅️ [Back (Directory Structure)](./directory-structure.md)

# SCSS Placeholders

> Located in the [📁 scss/lib/placeholders/](../scss/lib/placeholders) directory.
> 
> You can refer to the official [Sass documentation](https://sass-lang.com/documentation/style-rules/placeholder-selectors/) for more information.

Available placeholders are separated in two categories : **Config (⚙️)** and **Theme (📄)**.

The first category is meant to instantiate style properties with dedicated value and CSS variables.

The second category is meant to customize CSS variables and define new properties if needed.

**For example :**

The lib/placeholders/_button.scss file is a **Config (⚙️)** file. And the lib/placeholders/buttons/_theme-button.scss file is a "Theme" file.

The **Config (⚙️)** file defines the style properties with dedicated CSS variables :

```scss
%button {
  color: var(--button-color-primary, inherit);
  background-color: var(--button-background-color, transparent);
}
```

And the **Theme (📄)** file customizes the style properties by adding new ones or by using CSS variables :

```scss
@use "lib/placeholders/button" as *;

%theme-button {
  @extend %button;
  
  &--primary {
    --button-color-primary: black;
    --button-background-color: white;
  }
}
```

Each file has its own documentation and usage examples :

- ⚙️ [_animated.scss](../scss/lib/placeholders/_animated.scss)
- ⚙️ [_button.scss](../scss/lib/placeholders/_button.scss)
- ⚙️ [_grid-wrapper.scss](../scss/lib/placeholders/_grid-wrapper.scss)
- ⚙️ [_heading.scss](../scss/lib/placeholders/_heading.scss)
- ⚙️ [_icon.scss](../scss/lib/placeholders/_icon.scss)
- ⚙️ [_input.scss](../scss/lib/placeholders/_input.scss)
- ⚙️ [_input-group.scss](../scss/lib/placeholders/_input-group.scss)
- ⚙️ [_input-option.scss](../scss/lib/placeholders/_input-option.scss)
- ⚙️ [_interactive.scss](../scss/lib/placeholders/_interactive.scss)
- ⚙️ [_link.scss](../scss/lib/placeholders/_link.scss)
- ⚙️ [_paragraph.scss](../scss/lib/placeholders/_paragraph.scss)
- ⚙️ [_wrapper.scss](../scss/lib/placeholders/_wrapper.scss)
- 📁 buttons/
  - 📄 [_theme-button.scss](../scss/lib/placeholders/buttons/_theme-button.scss)
- 📁 links/
  - 📄 [_theme-link.scss](../scss/lib/placeholders/links/_theme-link.scss)
- 📁 inputs/
  - 📄 [_checkbox-input.scss](../scss/lib/placeholders/inputs/_checkbox-input.scss)
  - 📄 [_file-input.scss](../scss/lib/placeholders/inputs/_file-input.scss)
  - 📄 [_radio-input.scss](../scss/lib/placeholders/inputs/_radio-input.scss)
  - 📄 [_select-input.scss](../scss/lib/placeholders/inputs/_select-input.scss)
  - 📄 [_text-input.scss](../scss/lib/placeholders/inputs/_text-input.scss)
  - 📄 [_textarea-input.scss](../scss/lib/placeholders/inputs/_textarea-input.scss)
