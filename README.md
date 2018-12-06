# React Bootstrap UI Library
 
## (WIP)

This is a bootstrap project to allow for FE to create reusable UI components that are decoupled from the platform.

Project Board - https://trello.com/b/DWIYFDhU/ui-components

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Development Process](#development-process)
    - [Task Naming](#task-naming)
    - [Branching Strategy](#branching-strategy)
    - [Merging and Commit Messages](#merging-and-commit-messages)
- [Technology Stack](#technology-stack)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn run build](#yarn-runbuild)
  - [yarn test:all](#yarn-testall)
- [Folder Structure](#folder-structure)
- [Supported Browsers](#supported-browsers)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)
- [Linting and PrePush](#linting-and-prePush)
  - [Formatting Code Automatically](#formatting-code-automatically)
- [Installing a Dependency](#installing-a-dependency)
- [Importing Components](#importing-components)
- [Adding a Stylesheet](#adding-a-stylesheet)
    - [Post-Processing CSS](#post-processing-css)
    - [BEM Naming Convention](#bem-naming-convention)
- [Adding Images, Fonts, and Files](#adding-images-fonts-and-files)
- [Mock Servers](#mock-servers)
- [Getting Started with Storybook](#getting-started-with-storybook)
  - [Adding a Router](#adding-a-router)
- [Exporting Components to use on Platforms](#exporting-components-to-use-on-platforms)
  - [Supporting redux](#supporting-redux)
  - [Supporting react routing](#supporting-react-routing)
- [Optimized components bundles](#optimized-components-bundles)
  - [Code Splitting](#code-splitting)
- [Fetching Data with AJAX Requests](#fetching-data-with-ajax-requests)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Command Line Interface](#command-line-interface)
  - [Version Control Integration](#version-control-integration)
  - [Writing Tests](#writing-tests)
  - [Testing Components](#testing-components)
  - [Using Third Party Assertion Libraries](#using-third-party-assertion-libraries)
  - [Initializing Test Environment](#initializing-test-environment)
  - [Focusing and Excluding Tests](#focusing-and-excluding-tests)
  - [Coverage Reporting](#coverage-reporting)
  - [Continuous Integration](#continuous-integration)
  - [Disabling jsdom](#disabling-jsdom)
  - [Snapshot Testing](#snapshot-testing)
  - [Editor Integration](#editor-integration)
- [Debugging Tests](#debugging-tests)
  - [Debugging Tests in Chrome](#debugging-tests-in-chrome)
  - [Debugging Tests in Visual Studio Code](#debugging-tests-in-visual-studio-code)
- [Maintainers](#maintainers)

## Development Process

### Task Naming 

When adding a task to the backlog the title should be written in [imperative mood](https://en.wikipedia.org/wiki/Imperative_mood) (like a command), for example
- “`Add` new  component …“, 
- “`Update` logic ..“, 
- “`Fix` issue”

More detail should be given in the description that is required of the task

### Branching Strategy

Each branch must be named in a specific format as follows:

    prefix/add-short-description

#### Prefixes
Prefixes must be used for all branch names, detailed below:

| Prefix   | Description  |   |
|---|---|---|
| task/ | For branches that contain development for a task  | |
| bug/  | For branches that contain only bug or defect work  | |
| misc/ | For minor changes such as build configuration file tweaks or adhoc changes that do not correlate to a task  ||
| spike/| For prospective changes that have not yet been fully fleshed out  | |

#### Description
The branch description should follow the task naming convention (eg `bug/fix-eslint-issue` , `task/update-build-process`)

### Merging and Commit Messages

Once a branch has passed `Tech Review`, Remember to squash your commits and to modify the commit message to be the same as task Prefixing the branch type (`Task:`) and keeping the PR number (eg `Task: Add eslint (#1)`)

## Technology Stack

WIP

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn test:all`

Runs all Linters as well as JS unit test, this is also run at git pre-push to ensure code quality. Linters can also be run individually with `yarn lint:css` and `yarn lint:js`

WIP Missing stuff

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      /atoms
        /button
        ...
      /molecules
        /article
        ...
      /organisms
        /header
        ...
      /templates
        /homepage
        ...
    shared/
      assets/
      styles/
        elements/
        generic/
        settings/
        tools/
    index
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;

* `src/index.js` is the JavaScript entry point.

Only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

* `src/components` this is where components are situated. As we adhere to atomic design patterns the folder this has already been organised with examples files such as components, tests, styles and stories. Each component should have its own folder.

* `src/shared/` Files that are share across the project such as assets and global styles should be placed in this folder.

* `src/shared/styles/*` This folder contains global styles. As we follow close to [ITCSS principles](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) a default folder structure has been added with example files.

Only files inside `public` can be used from `public/index.html`.<br>Top-level directories are not included in the production build so you can use them for things like documentation.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend using experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

Also note that using some newer syntax features like `for...of` or `[...nonArrayValue]` causes Babel to emit code that depends on ES6 runtime features and might not work without a polyfill. When in doubt, use [Babel REPL](https://babeljs.io/repl/) to see what any specific syntax compiles down to.


## Linting and PrePush

- Wip prepush

### Formatting Code Automatically

- Wip Prettier

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `yarn`:

```sh
yarn add react-router
```

This works for any library, not just `react-router`.

## Importing Components

This project setup supports ES6 modules thanks to Babel.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:

### `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
```

### `DangerButton.js`


```js
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

Be aware of the [difference between default and named exports](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). It is a common source of mistakes.

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use `export default Button` and `import Button from './Button'`.

Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.

Learn more about ES6 modules:

* [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
* [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
* [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)


### With React Router

If you are using React Router check out [this tutorial](http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html) on how to use code splitting with it. You can find the companion GitHub repository [here](https://github.com/AnomalyInnovations/serverless-stack-demo-client/tree/code-splitting-in-create-react-app).

Also check out the [Code Splitting](https://reactjs.org/docs/code-splitting.html) section in React documentation.

## Adding a Stylesheet

This project setup uses [Webpack](https://webpack.js.org/) for handling all assets. Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file**:
(this project scss preprocessor have already been setup for you.)

### `Button.scss`

```css
.a-button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.scss'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <button className="a-button"></button>;
  }
}
```

To include settings or mixins you can simply `@import`  into a components .scss file.

```scss
@import "../../../shared/styles/settings/_colours"; // assuming a styles directory under src/
@import "~normalize-scss/sass/normalize/import-now";
 // importing a sass file from the normalize-scss node module

 .a-button {
  padding: 20px;
  color: $blue
}
```

**This is not required for React** but many people find this feature convenient. You can read about the benefits of this approach [here](https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b). However you should be aware that this makes your code less portable to other build tools and environments than Webpack.

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified `.css` file in the build output.

If you are concerned about using Webpack-specific semantics, you can put all your CSS right into `src/index.css`. It would still be imported from `src/index.js`, but you could always remove that import if you later migrate to a different build tool.

### Post-Processing CSS

This project setup minifies your CSS and adds vendor prefixes to it automatically through [Autoprefixer](https://github.com/postcss/autoprefixer) so you don’t need to worry about it.

For example, this:

```css
.o-app {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

becomes this:

```css
.o-app {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```

### BEM Naming Convention

To help maintain a BEM naming conventions throughout the project we have added [Stylelint BEM Namics](https://github.com/namics/stylelint-bem-namics#readme) this linter verifies that the given scss follows a consistent BEM code convention.

`[type]-[block-name]__[element-name]--[modifier-name]`

#### Types

- `a-` Atom
- `m-` Molecule
- `o-` Organism
- `l-` Layout
- `g-` Grid
- `h-` Helper

These settings/patterns can be overwritten in the `.stylelintrc` file under `plugin/stylelint-bem-namics`

```
"plugin/stylelint-bem-namics": {
  "patternPrefixes": ["a", "m", ...]
  "helperPrefixes": ["is", "has", ...]
}
```


## Adding Images, Fonts, and Files

With Webpack, using static assets like images and fonts works similarly to CSS.

You can **`import` a file right in a JavaScript module**. This tells Webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the `src` attribute of an image or the `href` of a link to a PDF.

To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to [#1153](https://github.com/facebookincubator/create-react-app/issues/1153).

Here is an example:

```js
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in CSS too:

```css
.Logo {
  background-image: url(./logo.png);
}
```

Webpack finds all relative module references in CSS (they start with `./`) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.

Please be advised that this is also a custom feature of Webpack.

**It is not required for React** but many people enjoy it (and React Native uses a similar mechanism for images).<br>
An alternative way of handling static assets is described in the next section.

## Mock Servers

During the development and testing you'll probably need a mock server.  
We added [RoboHydra](http://robohydra.org/) to the project with a basic config and some mock endpoints.

### The main concept of RoboHydra

A RoboHydra web server is composed of many heads. A RoboHydra head is a piece of software that serves requests for a certain URL path, and defines a certain behaviour for that head to apply to that URL. For example, a RoboHydra server could have one head listening in /articles/newest that returns a fixed list of articles, another head listening in /static that proxies HTTP requests to the production server, and so on.

The behaviour of each head is determined by its type: there are heads that always return a fixed response, heads that proxy requests to another server, heads that serve files from the local filesystem, heads that execute a given JavaScript function, etc. You can program your own heads to define whatever behaviour you want.

When a RoboHydra server receives a request, it will go through all its heads in order, trying to find one that matches the URL of the incoming request. When it finds one, it will make that head process the request.

The different RoboHydra heads are listed here: http://robohydra.org/docs/0.6.8/heads/

### Configuration

RoboHydra configuration files are simple JSON files that specify a list of plugins to be loaded. Plugins are special scripts that define one or more heads that you want to load together.  
You can check the example config file and a simple plugin in the `/mocks/robohydra` folder.

Our `default.robohydra.conf` tells RoboHydra that it should run on port `3041` and we want to use two plugins: `cors` (which is a standard core plugin), and `static-json-api` which is our custom example plugin. RoboHydra will try to find a folder in the `plugins` folder that has the same name as the plugin in the config.  
The standard plugins are listed here: http://robohydra.org/docs/0.6.8/plugin-stdlib/

### Starting the mock server

You can start the RoboHydra server by running `yarn robohydra`.  
This will start a mock server with the default config on http://localhost:3041  
You can check the admin at http://localhost:3041/robohydra-admin

### Robohydra admin

On the admin page you can see a list of the different heads defined by your plugins. You can simply detach and reattach them, and you can quickly create new heads on the fly.

## Getting Started with StoryBook

WIP Story book Stuff

### Adding a Router

Create React App doesn't prescribe a specific routing solution, but [React Router](https://reacttraining.com/react-router/) is the most popular one.

```sh
yarn add react-router-dom
```

To try it, delete all the code in `src/App.js` and replace it with any of the examples on its website. The [Basic Example](https://reacttraining.com/react-router/web/example/basic) is a good place to get started.

Note that [you may need to configure your production server to support client-side routing](#serving-apps-with-client-side-routing) before deploying your app.

## Exporting Components to use on Platforms

By default this project is setup to take a hybrid approach to rendering your components. A hybrid approach is when the plaform serves the page as well as the initial mark up. Then by binding the component to a targeted element we can then render it on the page.

To achieve this we have choosen [React habitat](https://github.com/DeloitteDigitalAPAC/react-habitat) to export your component. 

In `src/index.js` you can see an example of this 

```js
import ReactHabitat from 'react-habitat';

// import your high-level components you want to pass to react-habitat
import HomePage from './components/templates/homepage/HomePage.jsx';

class HomePageComponent extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder();

    // Register your components
    // You can render them as `<div data-component="SomeReactComponent"></div>` in your CMS templates
    // see https://www.npmjs.com/package/react-habitat#2-application-execution---resolve-your-components
    builder.register(HomePage).as('homepage');

    // Finally, set the container:
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes:
export default new HomePageComponent();

```

When the bundled .js is available on the plaform this allows you to render the component on the page by referencing them using a `data-component="SomeReactComponent"` attribute. 

In addition you can pass a configuration of props to component `data-props='{json config}'`

Using the code example above to render the homepage component would look like the following

```html
    <div data-component="homepage" 
         data-props='{"errorMessage": "Oops, something has gone wrong"}'>

      <!-- loading / html here -->

    </div>
```

### Supporting redux

WIP


### Supporting react routing

WIP

## Optimized Components Bundles 

If you have multiple larger template components that are not common, that only appear on a single page of a platform eg (checkout, basket, PLP). We recommend that you optimise the bundles by code splitting. 

### Code Splitting

Coding splitting allows to extract a isolated component into is own .js file that could be loaded on a particular page that it is required. 

Start by adding a new .js file that exports the needed component eg basket.js

Then you will need to edit the webpack config (`src/webpack.config.prod.js`) to have multiple entry points to the application.

In `src/paths` add new reference to the file and then add it as a entry point.

```js
  entry: {
    basket: [require.resolve('./polyfills'), paths.basketJs],
    common: [require.resolve('./polyfills'), paths.commonJS]
  },
```

When running the build script will then generate an optimized bundles containing just that component as well as the styles.

```sh
$ node scripts/build.js
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  30.32 KB  build/static/js/basket.js
  40.82 KB  build/static/js/common.js
  466 B     build/static/css/basket.css
  431 B     build/static/css/common.css

```

For more information on code splitting please read [webpack documentation](https://webpack.js.org/guides/code-splitting/)

## Fetching Data with AJAX Requests

React doesn't prescribe a specific approach to data fetching, but people commonly use either a library like [axios](https://github.com/axios/axios) or the [`fetch()` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provided by the browser. Conveniently, Create React App includes a polyfill for `fetch()` so you can use it without worrying about the browser support.

The global `fetch` function allows to easily makes AJAX requests. It takes in a URL as an input and returns a `Promise` that resolves to a `Response` object. You can find more information about `fetch` [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

This project also includes a [Promise polyfill](https://github.com/then/promise) which provides a full implementation of Promises/A+. A Promise represents the eventual result of an asynchronous operation, you can find more information about Promises [here](https://www.promisejs.org/) and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Both axios and `fetch()` use Promises under the hood. You can also use the [`async / await`](https://davidwalsh.name/async-await) syntax to reduce the callback nesting.

You can learn more about making AJAX requests from React components in [the FAQ entry on the React website](https://reactjs.org/docs/faq-ajax.html).


## Running Tests

>Note: this feature is available with `react-scripts@0.3.0` and higher.<br>
>[Read the migration guide to learn how to enable it in older projects!](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md#migrating-from-023-to-030)

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner. To prepare for this integration, we did a [major revamp](https://facebook.github.io/jest/blog/2016/09/01/jest-15.html) of Jest so if you heard bad things about it years ago, give it another try.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

![Jest watch mode](http://facebook.github.io/jest/img/blog/15-watch.gif)

### Version Control Integration

By default, when you run `npm test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests run fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

Jest will always run all tests on a [continuous integration](#continuous-integration) server or if the project is not inside a Git or Mercurial repository.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](https://facebook.github.io/jest/docs/en/expect.html#content).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled) to create “spies” or mock functions.

### Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot of value with very little effort so they are great as a starting point, and this is the test you will find in `src/App.test.js`.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.

If you’d like to test components in isolation from the child components they render, we recommend using [`shallow()` rendering API](http://airbnb.io/enzyme/docs/api/shallow.html) from [Enzyme](http://airbnb.io/enzyme/). To install it, run:

```sh
npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
```

Alternatively you may use `yarn`:

```sh
yarn add enzyme enzyme-adapter-react-16 react-test-renderer
```

As of Enzyme 3, you will need to install Enzyme along with an Adapter corresponding to the version of React you are using. (The examples above use the adapter for React 16.)

The adapter will also need to be configured in your [global setup file](#initializing-test-environment):

#### `src/setupTests.js`
```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

>Note: Keep in mind that if you decide to "eject" before creating `src/setupTests.js`, the resulting `package.json` file won't contain any reference to it. [Read here](#initializing-test-environment) to learn how to add this after ejecting.

Now you can write a smoke test with it:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
```

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper. For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports [full rendering with `mount()`](http://airbnb.io/enzyme/docs/api/mount.html), and you can also use it for testing state changes and component lifecycle.

You can read the [Enzyme documentation](http://airbnb.io/enzyme/) for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

All Jest matchers are [extensively documented here](http://facebook.github.io/jest/docs/en/expect.html).<br>
Nevertheless you can use a third-party assertion library like [Chai](http://chaijs.com/) if you want to, as described below.

Additionally, you might find [jest-enzyme](https://github.com/blainekasten/enzyme-matchers) helpful to simplify your tests with readable matchers. The above `contains` code can be written more simply with jest-enzyme.

```js
expect(wrapper).toContainReact(welcome)
```

To enable this, install `jest-enzyme`:

```sh
npm install --save jest-enzyme
```

Alternatively you may use `yarn`:

```sh
yarn add jest-enzyme
```

Import it in [`src/setupTests.js`](#initializing-test-environment) to make its matchers available in every test:

```js
import 'jest-enzyme';
```

### Initializing Test Environment

>Note: this feature is available with `react-scripts@0.4.0` and higher.

If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a `src/setupTests.js` to your project. It will be automatically executed before running your tests.

For example:

#### `src/setupTests.js`
```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
```

>Note: Keep in mind that if you decide to "eject" before creating `src/setupTests.js`, the resulting `package.json` file won't contain any reference to it, so you should manually create the property `setupTestFrameworkScriptFile` in the configuration for Jest, something like the following:

>```js
>"jest": {
>   // ...
>   "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.js"
>  }
>  ```

### Focusing and Excluding Tests

You can replace `it()` with `xit()` to temporarily exclude a test from being executed.<br>
Similarly, `fit()` lets you focus on a specific test without running any other tests.

### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

![coverage report](http://i.imgur.com/5bFhnTS.png)

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

#### Configuration

The default Jest coverage configuration can be overriden by adding any of the following supported keys to a Jest config in your package.json.

Supported overrides:
 - [`collectCoverageFrom`](https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array)
 - [`coverageReporters`](https://facebook.github.io/jest/docs/en/configuration.html#coveragereporters-array-string)
 - [`coverageThreshold`](https://facebook.github.io/jest/docs/en/configuration.html#coveragethreshold-object)
 - [`snapshotSerializers`](https://facebook.github.io/jest/docs/en/configuration.html#snapshotserializers-array-string)

Example package.json:

```json
{
  "name": "your-package",
  "jest": {
    "collectCoverageFrom" : [
      "src/**/*.{js,jsx}",
      "!<rootDir>/node_modules/",
      "!<rootDir>/path/to/dir/"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 90,
        "functions": 90,
        "lines": 90,
        "statements": 90
      }
    },
    "coverageReporters": ["text"],
    "snapshotSerializers": ["my-serializer-module"]
  }
}
```

### Continuous Integration

By default `npm test` runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called `CI`.

When creating a build of your application with `npm run build` linter warnings are not checked by default. Like `npm test`, you can force the build to perform a linter warning check by setting the environment variable `CI`. If any warnings are encountered then the build fails.

Popular CI servers already set the environment variable `CI` by default but you can do this yourself too:

### On CI servers
#### Travis CI

1. Following the [Travis Getting started](https://docs.travis-ci.com/user/getting-started/) guide for syncing your GitHub repository with Travis.  You may need to initialize some settings manually in your [profile](https://travis-ci.org/profile) page.
1. Add a `.travis.yml` file to your git repository.
```
language: node_js
node_js:
  - 6
cache:
  directories:
    - node_modules
script:
  - npm run build
  - npm test
```
1. Trigger your first build with a git push.
1. [Customize your Travis CI Build](https://docs.travis-ci.com/user/customizing-the-build/) if needed.

#### CircleCI

Follow [this article](https://medium.com/@knowbody/circleci-and-zeits-now-sh-c9b7eebcd3c1) to set up CircleCI with a Create React App project.

### On your own environment
##### Windows (cmd.exe)

```cmd
set CI=true&&npm test
```

```cmd
set CI=true&&npm run build
```

(Note: the lack of whitespace is intentional.)

##### Windows (Powershell)

```Powershell
($env:CI = $true) -and (npm test)
```

```Powershell
($env:CI = $true) -and (npm run build)
```

##### Linux, macOS (Bash)

```bash
CI=true npm test
```

```bash
CI=true npm run build
```

The test command will force Jest to run tests once instead of launching the watcher.

>  If you find yourself doing this often in development, please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new) to tell us about your use case because we want to make watcher the best experience and are open to changing how it works to accommodate more workflows.

The build command will check for linter warnings and fail if any are found.

### Disabling jsdom

By default, the `package.json` of the generated project looks like this:

```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom"
```

If you know that none of your tests depend on [jsdom](https://github.com/tmpvar/jsdom), you can safely remove `--env=jsdom`, and your tests will run faster:

```diff
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
-   "test": "react-scripts test --env=jsdom"
+   "test": "react-scripts test"
```

To help you make up your mind, here is a list of APIs that **need jsdom**:

* Any browser globals like `window` and `document`
* [`ReactDOM.render()`](https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
* [`TestUtils.renderIntoDocument()`](https://facebook.github.io/react/docs/test-utils.html#renderintodocument) ([a shortcut](https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91) for the above)
* [`mount()`](http://airbnb.io/enzyme/docs/api/mount.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

In contrast, **jsdom is not needed** for the following APIs:

* [`TestUtils.createRenderer()`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) (shallow rendering)
* [`shallow()`](http://airbnb.io/enzyme/docs/api/shallow.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

Finally, jsdom is also not needed for [snapshot testing](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html).

### Snapshot Testing

Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. [Read more about snapshot testing.](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html)

### Editor Integration

If you use [Visual Studio Code](https://code.visualstudio.com), there is a [Jest extension](https://github.com/orta/vscode-jest) which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.

![VS Code Jest Preview](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)

## Debugging Tests

There are various ways to setup a debugger for your Jest tests. We cover debugging in Chrome and [Visual Studio Code](https://code.visualstudio.com/).

>Note: debugging tests requires Node 8 or higher.

### Debugging Tests in Chrome

Add the following to the `scripts` section in your project's `package.json`
```json
"scripts": {
    "test:debug": "react-scripts --inspect-brk test --runInBand --env=jsdom"
  }
```
Place `debugger;` statements in any test and run:
```bash
$ npm run test:debug
```

This will start running your Jest tests, but pause before executing to allow a debugger to attach to the process.

Open the following in Chrome
```
about:inspect
```

After opening that link, the Chrome Developer Tools will be displayed. Select `inspect` on your process and a breakpoint will be set at the first line of the react script (this is done simply to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the debugger statement, execution will pause and you can examine the current scope and call stack.

>Note: the --runInBand cli option makes sure Jest runs test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time.

### Debugging Tests in Visual Studio Code

Debugging Jest tests is supported out of the box for [Visual Studio Code](https://code.visualstudio.com).

Use the following [`launch.json`](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) configuration file:
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug CRA Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",      
      "args": [
        "test",
        "--runInBand",
        "--no-cache",
        "--env=jsdom"
      ],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```


## Maintainers

[Contributors](https://github.com/inviqa/inviqa-ui-library/graphs/contributors)

[Stuart Rayson, Peter Almasi, Becky Jones, Gary Mawdsley, Eugene Svidko, Craig Shaw]
