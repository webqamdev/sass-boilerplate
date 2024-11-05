# Webqam SCSS Boilerplate

> For better understanding of the folder and file structure, use cases, rules and installation process of the boilerplate, you should the [documentation](docs/getting-started.md).

- [Getting started](docs/getting-started.md)
- [Development conventions](docs/development-conventions.md)
- [Directory structure](docs/directory-structure.md)
  - [Custom properties](docs/custom-properties.md)
  - [Functions](docs/functions.md)
  - [Placeholders](docs/placeholders.md)
  - [Mixins](docs/mixins.md)
  - [Variables](docs/variables.md)

> You must install the [modern-normalize](https://www.npmjs.com/package/modern-normalize) npm package in order to have full style resets. Please read the dedicated section in the [Dependencies](docs/getting-started.md#dependencies) documentation.
>
> ```shell
> npm install modern-normalize
> ```

## Development

### Installation

```shell
# 1. Clone the repo

# 2. Install correct node version with nvm (no need for volta users)
nvm use

# 3. install node dependencies
npm ci

# 4. Build the project with ViteJs
npm run build
# Or with the --watch flag
npm run watch
```

### Available commands

- `npm run dev` Watch the project and start a local server
- `npm run build` Build the project for production
