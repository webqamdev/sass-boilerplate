# Sass boilerplate

> An opinionated Sass boilerplate.

[![build status](https://gitlab.com/bgondy/sass-boilerplate/badges/master/pipeline.svg)](https://gitlab.com/bgondy/sass-boilerplate/pipelines)

## Usage

Using [Normalize.css](https://necolas.github.io/normalize.css/) is strongly recommended. Normalize.css must be included
before your own styles.

This boilerplate uses [Breakpoint Sass](http://breakpoint-sass.com/) for Media queries.

### Vue projects (using Vue CLI)

You can use the dedicated [Vue CLI 3 plugin](https://github.com/webqamdev/vue-cli-plugin-sass-boilerplate) to
automatically install this boilerplate and configure your project.

### Manual install

1. Install required dependencies
   ```sh
   npm install normalize.css --save-dev
   npm install breakpoint-sass --save-dev
   ```
2. Copy the [`src/scss`](src/scss) directory in your project.
3. Import Normalize.css to your bundle (optional)
4. Configure your bundler to import [`_lib.scss`](src/scss/lib/_lib.scss) in every file (optional)

   For Webpack:

   ```js
   // webpack.config.js
   module.exports = {
     // ...
     resolve: {
       alias: {
         '@': path.resolve(__dirname, 'src'),
       },
     },
     module: {
       rules: [
         {
           test: /\.scss$/,
           use: [
             // ...
             {
               loader: 'sass-loader',
               options: {
                 // Enabling sourcemaps is strongly advised
                 sourceMap: true,
                 // Depending on the version of sass-loader, the option property may vary
                 // (data <8.0.0, prependData >8.0.0, additionalData >9.0.0)
                 // See sass-loader's documentation and CHANGELOG for details (https://github.com/webpack-contrib/sass-loader)
                 additionalData: '@import "@/scss/lib/_lib.scss";', // Update path to fit your needs
               },
             },
           ],
         },
       ],
     },
   };
   ```

5. Include the main entry point to your HTML ([`src/scss/main.scss`](src/scss/main.scss))

Please see [`src/main.js`](src/main.js) and [`webpack.config.js`](webpack.config.js) for a light implementation example.

## Documentation

In order to keep documentation up to date and to have it to hand once in your project, most of the documentation is
directly written in the code (don't worry, Sass comments are skipped during compilation).

Once installation is complete, feel free to browse files and toggle commented sections or tweak code to fit your needs,
especially in the following files:

1. [`scss/lib/_lib.scss`](src/scss/lib/_lib.scss): please keep in mind this file (and its dependencies) is loaded in
   every Scss file/Vue Component. Therefore, it **MUST NOT** generate any CSS once compiled. Doing so would lead to a
   massive code duplication.
2. [`scss/lib/variables/`](src/scss/lib/variables)
3. [`scss/main.scss`](src/scss/main.scss)

## Development

Clone the project locally and install node dependencies:

```bash
npm install
```

Available commands:

- `npm run build` Build the CSS using Webpack to ensure there is no error
- `npm run watch` Same as `build` but with change detection
- `npm run prettier:check` Check files are properly formatted with Prettier
- `npm run prettier:fix` Reformat files with Prettier
- `npm run stylelint` Lint SCSS files

Please note that [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/) run automatically on
pre-commit. Please check [`package.json`](package.json) for implementation details.

## Contributing

Please see [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE)
