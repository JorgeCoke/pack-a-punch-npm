<p align="center">
    <img alt="Pack a Punch logo" src="repo-logo.png" width="512"/>
</p>

<h1 align="center">
🦾🔋 Pack a Punch: NPM Project Template Boilerplate
</h1>

<h5 align="center">
Pack a punch your project, following standards and specifications, linting and formatting your code, automating Git work flows, and improving your styles with emojis 🦄
</h5>

## ✨ Features

- 🛡 [Zod](https://zod.dev/) **validator**
- 🎨 The best **linter** and **formatter**, [BiomeJS](https://biomejs.dev/)
- 🐶 Pre-Commit and Commit [Husky](https://github.com/typicode/husky) **hooks** (Runs linter and formatter before any commit against staged files only!)
- 💄 Commit **nomenclature rules** following [Conventional Commit Format](https://commitlint.js.org/) and [Commitizen CLI](https://github.com/commitizen/cz-cli) (emoji [powered](https://github.com/folke/devmoji))
- 🚀 **Release management policy** with [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version), including automagically CHANGELOG.md generation, version bumping and GitTags
- 🔦 Included [npm-check](https://www.npmjs.com/package/npm-check) to check for **outdated**, incorrect, and unused dependencies.
- 🥷🏻 Included [better-npm-audit](https://www.npmjs.com/package/better-npm-audit) to check for dependency **vulnerabilities**

## 🛠 Getting Started

```
npm ci                  # Install dependencies
cp .env.example .env    # Generate enviroment variables
npm run dev             # Launch project locally
```

## 🎨 Linter & Formatter

```
npm run biome        # Run Biome
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

## 🏗 Build and launch

```
npm run build         # Compile project
npm run start         # Launch
npm run package       # Package an artifact
```

---

#### How to migrate this configuration to an existing project

1. Install dependencies

```bash
npm install --save-dev @biomejs/biome @commitlint/cli @commitlint/config-conventional commit-and-tag-version commitizen cz-conventional-changelog devmoji husky lint-staged
```

2. Copy the following scripts to your package.json file:

- biome
- release
- package
- cz
- npm:check
- npm:audit
- prepare

3. Copy the "config", "commitlint" and "lint-staged" configuration objects to your package.json

4. Copy the corresponding config files

```bash
cp -R {.husky,.vscode,biome.json} <YOUR_DESTINATION_FOLDER>
```

5. Prepare husky tools running:

```bash
npm run prepare
```