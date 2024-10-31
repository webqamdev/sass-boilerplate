# Webqam SCSS Boilerplate

## Usage

This project is meant to add a default and common SCSS structure to all projects.
The most basic usage is to copy the `src/scss/` content into your own project's `scss/` folder and start styling.

For better understanding of the folder and file structure, you can read the [documentations](docs/getting-started.md) :

- [Getting started](docs/getting-started.md)
- [Development conventions](docs/development-conventions.md)
- [Directory structure](docs/directory-structure.md)
  - [Custom properties](docs/custom-properties.md)
  - [Functions](docs/functions.md)
  - [Placeholders](docs/placeholders.md)
  - [Mixins](docs/mixins.md)
  - [Variables](docs/variables.md)

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
```

### Available commands

- `npm run dev` Watch the project and start a local server
- `npm run build` Build the project for production

## Contributing

Please read the [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE)
