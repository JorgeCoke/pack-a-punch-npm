<p align="center">
    <img alt="Pack a Punch logo" src="repo-logo.png" width="512"/>
</p>

# 🦾🔋 Pack a Punch: NPM Project Template Boilerplate

Pack a punch your project, following standards and specifications, linting and formatting your code, automating Git work flows, and improving your styles with emojis 🦄

## ✨ Features

- 🎨 [ESLint](https://www.npmjs.com/package/eslint) & [Prettier](https://www.npmjs.com/package/prettier) as linter and formatter
- 🐶 Pre-Commit and Commit [Husky](https://github.com/typicode/husky) hooks (Runs linter and formatter before any commit against staged files only!)
- 💄 Commit nomenclature rules following [Conventional Commit Format](https://commitlint.js.org/) and [Commitizen CLI](https://github.com/commitizen/cz-cli) (emoji [powered](https://github.com/folke/devmoji))
- 🚀 Release management policy with [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version), including automagically CHANGELOG.md generation, version bumping and GitTags
- 🔦 Included [npm-check](https://www.npmjs.com/package/npm-check) to check for outdated, incorrect, and unused dependencies.
- 🥷🏻 Included [better-npm-audit](https://www.npmjs.com/package/better-npm-audit) to check for dependency vulnerabilities

## 🛠 Getting Started

```
npm ci               # Install dependencies
npm run dev          # Launch project locally
```

## 🎨 Linter & Formatter

```
npm run lint         # Run ESLint
npm run format       # Run Prettier
```

## ⛩ Git Commit with Commitizen

```
git add .            # Add files
npm run cz           # Commit with Commitizen CLI
```

## 🚀 Release a new version

```
npm run release             # Bump version and generate CHANGELOG.md
git push --follow-tags      # Push changes and GitTag to origin
```

## 🔦 Check vulnerabilities and update outdated dependencies

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

> (Optional) Install **ESLint** and **Prettier** if you don't have them already: `npm install --save-dev prettier eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-sonarjs`

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

> (Optional) Copy **ESLint**, **Prettier** and **VSCode** config files: `cp -R {.vscode,.prettierrc.cjs,.eslintrc.cjs}` <YOUR_DESTINATION_FOLDER>

4. Prepare husky tools running:

```bash
npm run prepare
```
