# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
