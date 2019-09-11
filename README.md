# Sass boilerplate

> An opinionated Sass boilerplate.

[![build status](https://gitlab.com/bgondy/sass-boilerplate/badges/master/pipeline.svg)](https://gitlab.com/bgondy/sass-boilerplate/pipelines)

## Usage

Using [Normalize.css](https://necolas.github.io/normalize.css/) is strongly recommended. Normalize.css must be included before your own styles.

This boilerplate uses [Breakpoint Sass](http://breakpoint-sass.com/) for Media queries.

### Vue projects (using Vue CLI)

You can use the dedicated [Vue CLI 3 plugin](https://github.com/webqamdev/vue-cli-plugin-sass-boilerplate) to automatically install this boilerplate and configure your project.

### Manual install

1. Install required dependencies
   ```sh
   npm install normalize.css --save-dev
   npm install breakpoint-sass --save-dev
   ```
2. Copy the [`src/scss`](src/scss) directory in your project.
3. Include Normalize.css (optional)
4. Include the main entry point to your HTML ([`src/scss/main.scss`](src/scss/main.scss))

## Development

Clone the project locally and install node dependencies :

```bash
npm install
```

Available commands :

- `npm run build` Build the CSS using Webpack to ensure there is no error
- `npm run watch` Same as `build` but with change detection
- `npm run prettier:check` Check files are properly formatted with Prettier
- `npm run prettier:fix` Reformat files with Prettier
- `npm run stylelint` Lint SCSS files

Please note that [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/) run automatically on pre-commit. Please check [`package.json`](package.json) for implementation details.

## Contributing

Please see [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE)
