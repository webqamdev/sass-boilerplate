# Sass boilerplate

> An opinionated Sass boilerplate.

## Usage

Using [normalize.css](https://necolas.github.io/normalize.css/) using npm is strongly recommended. Normalize.css must be included before your own styles. If you're using [Webpack](https://webpack.js.org/), you can check (see [`main.js`](src/main.js)).

Copy the [`scss`](src/scss) folder in your project and you're ready to go.

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

Please note that [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/) are automatically executed on pre-commit. Please check [`package.json`](package.json) for implementation details.
