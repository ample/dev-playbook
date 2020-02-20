# Working with Gatsby

Our framework of choice is [Gatsby](https://www.gatsbyjs.org/). Gatsby is an open source framework based on React that helps developers build blazing fast websites and apps.

If you're new to Gatsby, start by getting familiar with the framework. They have some great tutorials [on their site](https://www.gatsbyjs.org/tutorial/). But it's a popular framework — there's an abundance of intro tutorials out there.

Over time we've introduced Ample-specific practices into our Gatsby projects to speed up our development process. The sections below walk through those adjustments.

## Starter Kit

When starting a new project, we use a home-grown starter kit. You can find that kit [on GitHub at ample/gatsby-starter-ample](https://github.com/ample/gatsby-starter-ample).

If Gatsby is installed globally, you can start a new project from the command-line:

    $ gatsby new [project-name] ample/gatsby-starter-ample

The following sections walk through what the starter brings on top of Gatsby.

## Directory Structure

[The default starter](https://github.com/gatsbyjs/gatsby-starter-default/tree/master/src) ships with three source directories — components, images, and pages. We work a little differently.

Our projects start with a handful of source directories that each play a specific role in the project. Here's the starting structure, in alphabetical order:

```
src/
├── components/
├── fragments/
├── helpers/
├── images/
├── layout/
├── sections/
├── styles/
└── templates/
```

Let's take a tour through each of them (a little out of order) ...

### Components

```
components/
└── [component-name]/
    ├── index.js
    ├── notes.mdx
    ├── styles.module.scss
    └── test.spec.js
```

A [component](https://reactjs.org/docs/components-and-props.html) is an independent, reusable part of the UI. They come in many shapes and sizes — components can be nested within components (more on this below). A button is a component, just as a card (which may contain a button) can also be a component.

To stay organized, each component gets its own directory in which all of its related files can be found. Let's look at the files you'll typically see:

- `index.js`: The main the actual [React component](https://reactjs.org/docs/react-component.html). We use `index` over a unique filename because it's a little cleaner when importing.
- `notes.mdx`: The documentation and playground for the component. More on this in the [Documentation section](#documentation) below.
- `styles.module.scss`: The styles for the component. More on this in the [Styles section](#styling) below.
- `test.spec.js`: The unit tests for the component. More on this in the [Testing section](#testing) below.

#### A note on nesting components

In general it's good to follow the [single-responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) — each component should do its one thing and do that well. Well components start to get bulky it may make sense to break them up into multiple components.

When that happens, you can nest the component _within_ the original component's directory. We feel as though this will keep the `src/components` directory clean, listing only the components that are shared across the application.

For example, consider a header component. Say it has a logo, but the logo is also used in the footer. But say it also has a nav menu, but that isn't used elsewhere in the project. In that case, the directory structure might look something like this:

```
components/
├── header/
|   ├── mobile-menu/
|   |   └── ...
|   └── ...
└── logo/
    └── ...
```

### Sections

```
sections/
└── [section-name]/
    ├── index.js
    ├── notes.mdx
    ├── styles.module.scss
    └── test.spec.js
```

Okay, here's where it gets weird. _Sections_ are also components. The difference is they are considered building blocks for templates and are made up of components.

Typically sections are groups of components that represent a portion of a page. For example, a _card_ is most likely to be a component, while a section could be a card grid, which could be responsible for rendering a heading, body, and a grid of cards.

Sections each get their own directory that models after the component directory.

### Templates

```
templates/
└── [template-name]/
    ├── adapter.js
    ├── index.js
    ├── notes.mdx
    ├── styles.module.scss
    └── test.spec.js
```

Guess what? Templates are components, too. Templates are entire pages. And templates be made up exclusively of sections.

They model a similar directory structure, **but there is one major difference**:

- `adapter.js`: For templates, the adapter is the entry point from `gatsby-node.js`. It collects all appropriate data, transforms it, and then passes it on as props to the template component.

### Layout

```
layout/
├── index.js
└── [layout-component-name]/
    ├── index.js
    ├── notes.mdx
    ├── styles.module.scss
    └── test.spec.js
```

Layout files are a unique set of components and are pulled out into their own directory. The layout is responsible for bringing a series of components with it, including the header, footer, SEO support, and more. The layout component gets exported from the main `index.js` and imported into the various templates used throughout the site.

The starter kit comes with some basic layout components to make it a little easier to get started.

### Helpers

```
helpers/
├── index.js
├── [helper-name].js
└── [helper-name].spec.js
```

Helpers are a collection of JavaScript functions that provide some shared utility across the application. They differ from components, sections, and templates in that they only provide logical feedback and are not intended to render anything to the DOM.

In general, each function is represented in three files within this directory:

1. `[component-name].js`: The file containing the function's code. It should be a hyphenized version of the function name. (e.g. If the function is called `sayHello`, the file should be named `say-hello.js`.) This file should export the function as its default export.
2. `[component-name].spec.js`: The tests for the function. Every function should come with tests.
3. `index.js`: This is a manifest file. It should import every function and export them as named exports.

### Fragments

```
fragments/
└── [object-type]-attributes.js
```

[Fragments](https://graphql.org/learn/queries/#fragments) are a concept in GraphQL. They provide a means of creating reusable field sets.

These files are picked up by Gatsby automatically and do not have to be manually imported throughout the project.

In general, we use one file per field set. And we append the name of the file with `-attributes`. For example, say I have a model in the CMS called `Product`. I may make a file at `src/fragments/product-attributes.js` that creates a `ProductAttributes` fragment. Then, whenever we have a `Product` object in a GraphQL query throughout the application, we can simply use `...ProductAttributes`, and it will automatically pick up all the fields from the fragment.

### Images

```
images/
└── [image-name].[ext]
```

While we expect most of a site's images to originate from the CMS solution, there will almost always be a few that we hard-code into the project. Those images go into this directory.

While they _can_ be imported directly, they _should_ be run through GraphQL. The starter is already setup to process these images for use with [Gatsby Image](https://www.gatsbyjs.org/packages/gatsby-image/).

### Styles

```
styles/
├── global/
|   └── [name].scss
├── global-styles.scss
├── global-utilities.scss
└── libs/
    └── sanitize.scss
```

These are a collection of styles and style utilities that are shared across all components. The primary files are imported by `gatsby-browser.js` so they are automatically included on every page, regardless of the components used. They include, by default:

- `global-styles.js`: Imports partials from `src/styles/globals` to represent all shared styles.
- `global-utilities.js`: These are variables and mixins that can be used in any other stylesheets.
- `lib/sanitize.js`: Resets all browser styles.

## Generating Components

The starter kit comes with a command-line script for generating components, sections, and templates. At this time, the script is super simple and will copy the default set of files into the appropriate directory. The command looks like this:

    $ ./.bin/generate.js [component|section|template] [NAME]

## Documentation

We're currently using [Docz](https://www.docz.site/) to document our components. This is also a useful tool while developing components or sections, as we can do so in isolation, outside the context of a template.

By default, Docz uses `/docs/` as its base path. This path is also ignored in the `robots.txt` file so search engines don't index it. Note that this path may change if it is to cause conflicts within the project. Information within the project's README should be up to date with where you can find the documentation.

### Documenting Items

Most doc sites should have these components:

- **Getting Started:** This should be similar to the project's README file. It's an introduction to the project, with links and references to items you need to know specific to that project.
- **Styleguide:** Includes base styles, as well as the available SCSS variables.
- **Templates:** This is _not_ a playground for templates. Templates are tested as static pages. It's simply documentation that then points to where you can preview the template.
- **Sections:** These are all the usable sections on the site.
- **Components:** And the components. This should include all components, including subcomponents. The navigation should be structured in a way that mirrors the directory structure.
- **Helpers:** Provides a list of helper functions, along with a brief description on what they do.

## Styling

Our styling approach follows [CSS Modules](https://github.com/gajus/react-css-modules), with SCSS support added on top.

Each component, section, and template should bring its own stylesheet, if it requires one. The component is resposible for importing the stylesheet.

Each of these stylesheets has access to all global variables and mixins.

### Structuring Stylesheets

Our approach is fairly loose when writing stylesheets. We aim to follow a few basic rules:

1. Use `.root` as the wrapping selector for the component.
2. Keep your SCSS as flat as possible.
3. Use class names over generic element selectors as much as possible.
4. Make use of the [classnames utility](https://www.npmjs.com/package/classnames) for concatenating class names together.

## Testing

We use [Jest](https://jestjs.io/en/) as our testing framework for Gatsby projects. The setup ships with the starter template. Testing can be run with this command:

    $ yarn test

By default, that command is included in the build script for Netlify (see the `netlify.toml` file).

Read more about our approach to testing [here](/code/testing).

## Linting

The starter kit has [stylelint](https://stylelint.io/) and [ESLint](https://eslint.org/) configured and ready to go. These are also configured to run as part of the build command.

It is expected that you resolve all linting warnings and errors before submitting a pull request for review. On a similar note, you should also resolve all console issues, many of which will get picked up by the linter.

## Component Library

Lastly, the starter kit ships with [Ample's Component Library](https://gatsby-theme-ample-components.netlify.com/), which is a Gatsby theme. You can (and should) become familiar with this library and make use of its components.
