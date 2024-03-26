<p align="center">
    <img alt="Zustand and Fetch logo" src="repo-logo.png" width="512"/>
</p>

# 🛠 Any Project Template Boilerplate

Enhanced Zustand to query HTTP API Requests, including loading state and error handling with Zustand, without any extra data-fetching library

## Features

- NPM package.json configured including meta parameters
- Customized VSCode configuration (See `.vscode` folder)
- [ESLint](https://www.npmjs.com/package/eslint) & [Prettier](https://www.npmjs.com/package/prettier) as linter and formatter
- Pre-Commit and Commit [Husky](https://github.com/typicode/husky) hooks (Runs linter and formatter before any commit against staged files only!)
- Commit nomenclature rules following [Conventional Commit Format](https://commitlint.js.org/) and [Commitizen CLI](https://github.com/commitizen/cz-cli) (🔋 emoji [powered](https://github.com/folke/devmoji))
- Release management policy with [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version), including automagically CHANGELOG.md generation, version bumping and GitTags
- Easy customizable README.md
- Included [npm-check](https://www.npmjs.com/package/npm-check) to check for outdated, incorrect, and unused dependencies.
- Included [better-npm-audit](https://www.npmjs.com/package/better-npm-audit) to check for dependency vulnerabilities

### Set up and run locally

```
npm ci               # Install dependencies
npm run dev          # Launch project locally
```

## Linter & Formatter

```
npm run lint         # Run ESLint
npm run format       # Run Prettier
```

## Git Commit with Commitizen

```
git add .            # Add files
npm run cz           # Commit with Commitizen CLI
```

## Release a new version

```
npm run release             # Bump version and generate CHANGELOG.md
git push --follow-tags      # Push changes and GitTag to origin
```

## Check vulnerabilities and update outdated dependencies

```
npm run npm:audit     # Check dependency vulnerabilities
npm run npm:check     # Check outdated dependencies
```

---

#### How to migrate this configuration to an existing project

1. Install dependencies

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional better-npm-audit commit-and-tag-version commitizen cz-conventional-changelog devmoji husky lint-staged npm-check
```

> (Optional) Install **ESLint** and **Prettier** if you don't have them already: `npm install --save-dev eslint prettier`

2. Copy the following scripts to your package.json file:

- format:staged
- npm:audit
- npm:check
- release
- cz
- devmoji
- prepare

> (Optional) You can also copy `lint` and `format` commands if needed

3. Copy the corresponding config files

```bash
cp -R {.husky,.commitlintrc.cjs,.czrc,.lintstagedrc.cjs} <YOUR_DESTINATION_FOLDER>
```

> (Optional) Copy **ESLint**, **Prettier** and **VSCode** config files: `cp -R {.vscode,.eslintrc.cjs,.prettierrc.cjs}` <YOUR_DESTINATION_FOLDER>
