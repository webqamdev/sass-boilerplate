# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## Fixed

- Disable Stylelint [declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/) rule in the `%animated` placeholder to avoid single transition property declaration.
- Changed [%link](scss/lib/placeholders/_link.scss) placeholder `text-decoration-thickness` property value from `from-font` to `var(--link-text-decoration-thickness, auto)`.

### Changed

- Change [scss color variables](scss/lib/variables/_color.scss) with unified prefix. (ex: `$variant-grey` and `$variant-blue` respectively became `$grey-variant` and `$blue-variant`).

## [2.0.0] - 2023-12-11

### Added

- Add new documentation in the [docs/](./docs) folder.
- `scss/components/_sr-only.scss` component file.
- New [Reset](scss/resets) files to replace the `scss/_base.scss` file :
  - `scss/resets/_base-reset.scss`
  - `scss/resets/_input-reset.scss`
  - `scss/resets/_interactive-reset.scss`
  - `scss/resets/_media-reset.scss`
  - `scss/resets/_text-reset.scss`
- New [Custom Property](scss/custom-properties) files :
  - `scss/custom-properties/_gui-color.scss`
  - `scss/custom-properties/_gui-font.scss`
  - `scss/custom-properties/_gui-icon.scss`
  - `scss/custom-properties/_theme-common.scss`
- New [Funxtion](scss/lib/functions) file :
  - `scss/lib/functions/_decimal-round.scss`
- New [Mixin](scss/lib/mixins) files :
  - `scss/lib/mixins/_container.scss`
  - `scss/lib/mixins/_hardware-acceleration.scss`
  - `scss/lib/mixins/_text-gradient.scss`
  - `scss/lib/mixins/_text-overflow.scss`
- New [Placeholder](scss/lib/placeholders) **Config** files :
  - `scss/lib/placeholders/_animated.scss`
  - `scss/lib/placeholders/_button.scss`
  - `scss/lib/placeholders/_grid-wrapper.scss`
  - `scss/lib/placeholders/_heading.scss`
  - `scss/lib/placeholders/_icon.scss`
  - `scss/lib/placeholders/_input.scss`
  - `scss/lib/placeholders/_input-group.scss`
  - `scss/lib/placeholders/_input-option.scss`
  - `scss/lib/placeholders/_interactive.scss`
  - `scss/lib/placeholders/_link.scss`
  - `scss/lib/placeholders/_paragraph.scss`
  - `scss/lib/placeholders/_wrapper.scss`
- New Placeholder **Theme** files :
  - [Buttons](scss/lib/placeholders/buttons)
    - `scss/lib/placeholders/buttons/_theme-button.scss`
  - [Links](scss/lib/placeholders/links)
    - `scss/lib/placeholders/links/_theme-link.scss`
  - [Inputs](scss/lib/placeholders/inputs)
    - `scss/lib/placeholders/inputs/_checkbox-input.scss`
    - `scss/lib/placeholders/inputs/_file-input.scss`
    - `scss/lib/placeholders/inputs/_radio-input.scss`
    - `scss/lib/placeholders/inputs/_select-input.scss`
    - `scss/lib/placeholders/inputs/_text-input.scss`
    - `scss/lib/placeholders/inputs/_textarea-input.scss`

### Removed

- `scss/components/_base-btn.scss` component file.
- `scss/components/_browser-upgrade.scss` component file.
- `scss/lib/mixins/_btn-styles.scss` mixin file (replaced byt the [_button.scss](scss/lib/placeholders/_button.scss).
- Remove unused [Variables](scss/lib/variables) files :
  - `scss/lib/variables/_box-shadow.scss`
  - `scss/lib/variables/_custom-property.scss`
  - `scss/lib/variables/_gap.scss`
  - `scss/lib/variables/_line-height.scss`
  - `scss/lib/variables/_margin.scss`
  - `scss/lib/variables/_outline.scss`
  - `scss/lib/variables/_padding.scss`
  - `scss/lib/variables/_selector.scss`

### Changed

- Change the branch `master` to `main`.
- Move the `./src/scss/` folder to the `./scss/` folder.
- Change the compilation from Webpack to Vite and support TypeScript.
- Update node version to `^22.0` (updating the `.nvmrc`, `package.json` `volta` key and the `.gitlab-ci` files).
- Update the [README.md](./README.md) file with new documentation reference and installation process.
- Replace the [normalize.css](https://www.npmjs.com/package/normalize.css) package by the [modern-normalize](https://www.npmjs.com/package/modern-normalize) package.
- Replace the [breakpoint-sass](https://www.npmjs.com/package/breakpoint-sass) package to use custom media queries in the [_breakpoint.scss](scss/lib/mixins/_breakpoint.scss) mixin file.

### Fixed

- Update icon IDE quick search and replace style to match [placeholder](scss/lib/placeholders/_icon.scss), [custom-properties](scss/custom-properties/_gui-icon.scss) and [component](scss/components/_icon.scss) files.

## [1.0.0] - 2021-12-10

### Description

This update was initially meant to remove the use of `@import` at-rule. This simple update required more work to support the new way of importing scss files.

We therefore took the opportunity to carry out larger-scale work in order to place this boilerplate to a new level of quality. This led us to a new base for future evolutions.

### Added

- New documentation with new examples and explanations in every file with accessibility and learning in mind.
- Prefer the [@use](https://sass-lang.com/documentation/at-rules/use) and [@forward](https://sass-lang.com/documentation/at-rules/forward) rules over `@import` (For more details on the reasons, check [this page](https://sass-lang.com/documentation/at-rules/import)). To use placeholders, mixins, functions or variables, you must `@use` needed file when required. Every lib file are no longer accessible everywhere.
- New `scss/components/_base-link.scss` file.
- New `scss/lib/_functions.scss` file (`@forward` every new function files in the `scss/lib/functions/` folder).
- New `scss/lib/_mixins.scss` file (`@forward` every new mixin files in the `scss/lib/mixins/` folder).
- New `scss/lib/_placeholders.scss` file (`@forward` every new placeholder files in the `scss/lib/placeholders/` folder).
- New `scss/lib/_variables.scss` file (`@forward` every new variable files in the `scss/lib/variables/` folder).
- New `scss/lib/variables/_box-shadow.scss` file.
- New `scss/lib/variables/_custom-property.scss` file.
- New `scss/lib/variables/_gap.scss` file.
- New `scss/lib/variables/_line-height.scss` file.
- New `scss/lib/variables/_margin.scss` file.
- New `scss/lib/variables/_outline.scss` file.
- New `scss/lib/variables/_padding.scss` file.
- New `scss/lib/variables/_selector.scss` file.
- New `scss/lib/variables/_theme.scss` file.
- New `scss/lib/variables/_transition.scss` file.
- New `scss/lib/variables/_z-index.scss` file.

### Changed

- Updated examples component file content (in `scss/components/`).
- Split variable types in dedicated files to take great advantage of the module namespaces (in `scss/lib/variables/`).
- All variable files are now in singular (for better namespace logic).
- Moved the file `scss/lib/_lib.scss` to `scss/_lib.scss`. This file is only here to @use `scss/lib/_functions.scss`, `scss/lib/_mixins.scss`, `scss/lib/_placeholders.scss` and `scss/lib/_variables.scss`.
- Renamed function `parse-int()` to `strip-unit()` (in `scss/lib/functions/_strip-unit.scss`).
- Renamed placeholder `%base-btn` to `%button` (in `scss/lib/placeholders/_button.scss`).
- Renamed placeholder `%default-link` to `%link` (in `scss/lib/placeholders/_link.scss`).
- The file `scss/main.scss` is now only here to import component files and selector styles. It is no longer required to import `scsss/_lib.scss`, component files already @use the required lib files.

### Removed

- Removed the function `headings()`.
- Removed the function `sqrt()`.
- Removed `scss/lib/variables/_base.scss` (base variables are now split into other variable file).
- Removed `scss/lib/variables/_misc.scss` (misc variables are now split into other variable file).
- Temporarily removed the mixin `hover-focus-within-workaround()` (It will be updated).
- Temporarily removed the mixin `map-breakpoint()` (It will be updated).
