# electron-react-typescript

I extracted this from my commercial projects so I can reuse it for new ones. I don't use [create-react-app](https://github.com/facebook/create-react-app) because I inevitably need to eject and support a snowflake case. This project uses Webpack 4 which has great defaults and I've configured hot reloading for you.

It's barebones and has few opinions:

* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [react-router](https://reacttraining.com/react-router)
* [Jest](https://facebook.github.io/jest/)
* [Ant Design](https://ant.design/)

I can start making anything with this immediately and hope you can too. It's easy to swap out Ant Design if that's not your cup of tea.

## Electron

For some projects I need to distribute a desktop app. [Electron](https://electronjs.org/) is perfect for this requirement. If you don't need it you can easily remove it.

1. Delete *src/main.ts*, *src/renderer.ts*
1. Delete the `dev:renderer` script in *package.json*
1. Update other scripts in *package.json* to match the language of a typical React app

## Getting Started

Install all the dependencies

```shell
$ npm install
```

Run the script to watch and build your app files

```shell
$ npm run dev:renderer
```

If building an Electron app, run this script to load your app inside of it

```shell
$ npm run dev:main
```

## Build

TODO