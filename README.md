# Node.js Template Dependencies

PoC of Node.js running mixed TypeScript code.

- Development
- Production
- Build
- Test

## Getting Started

1. Start server
```
  npm run dev
```
2. Go to endpoints
```
  http://localhost:8080/
  http://localhost:8080/js
  http://localhost:8080/broken-link
```
3. Edit code with hot restart

To switch from SWC to TSC-transpiler removed the following line in tsconfig.json:

```
"transpiler": "ts-node/transpilers/swc-experimental"
```

## Some Refs to Underlying Technologies

<p align="center" style="margin-top: 30px;">
  <img alt="Node.js" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" width="100" style="margin-right: 10px;">
  <img alt="Typescript" src="https://cdn.worldvectorlogo.com/logos/typescript.svg" width="80" style="margin-left: 10px; margin-right: 10px;">
  <img alt="SWC" src="https://swc.rs/logo.png" width="160" style="margin-left: 10px;">
</p>

<p align="center" style="margin-top: 30px;">
  <img alt="Prettier" src="https://prettier.io/icon.png" width="80" style="margin-right: 10px;">
  <img alt="ESLint" src="https://res.cloudinary.com/practicaldev/image/fetch/s--dWcPMxnR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hk083ugohb8gcuv8xt8t.png" width="150" style="margin-left: 10px; margin-right: 10px;">
  <img alt="Jest" src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" width="70" style="margin-left: 10px;">
</p>

## Features

- Testing in [Github Actions](https://github.com/features/actions)
- Testing Typescript code using [SWC Jest](https://github.com/Brooooooklyn/swc-node/tree/master/packages/jest)
- Code Coverage using [Jest](https://jestjs.io/)
- Standardized and Linting the code using [ESLint](https://eslint.org/)
- Format code using [Prettier](https://prettier.io/)
- Automate Github hooks using [Husky](https://github.com/typicode/husky) and [Lint Staged](https://github.com/okonet/lint-staged)

## Packages

- Typescript
- Node.js
- Jest
- ESLint
- Prettier
- Husky
- SWC
- Lint Staged

## Installation

with NPX

```
npx degit lamualfa/template-node project-name
```
