# Component Architecture

Component-driven development is a game-changing way to build websites, _if_ you do it right. Do it wrong and a project can quickly become a mess.

But "right" is subjective, and _components_ is a broad term that can be interpreted in a number of different ways. Therefore, _the right way_ is no one, single, prescriptive way. It's one thing and one thing only — **_consistency_**.

By establishing a convention in which we work, we make it easier to jump from project to project and understand what's going on. Of course, we want the convention to be easy to understand and follow, while still being flexible enough to accommodate the unique scenarios we run into regularly.

What follows here is ... a lot. We've put a lot of thought (mostly through trial and error) into this approach. We've seen it work, but it's still evolving over time. Like everything else at Ample, if you have a suggestion for a better approach, we're all ears.

:::info
In the docs to follow, you'll notice that we follow two primary paradigms:

- Convention over Configuration: We'll be more efficient if we can work consistently, rather than providing completely autonomy on every project. (Really we look for a balance between consistency and flexibility.)
- Single-Responsibility Principle: Everything should do one thing and do that thing well.
  :::

## File Structure

**Every component gets its own directory**. Components should not hang out on their own as individual files. This follows the single-responsibility principle, and is built upon [this practice](https://cobwwweb.com/organize-components-by-keeping-related-files-close) Sean laid out in keeping related files close to make it easier to move around a project's codebase.

Within that directory, there may be some variation, but the structure should largely look the same across all components. A typical component (if there is such a thing) looks like this:

```
[component]/
├── adapter.js
├── component.js
├── fixtures.js
├── index.js
├── styles.module.scss
└── test.spec.js
```

See below for explanations on each piece of the puzzle:

### `adapter.js`

Of all the files shown above, the adapter is likely the one you'll see the least frequently. Its role is to feed in dynamic data into a component. It connects directly to the data source, pulls in the data, transforms it, and then sends it on to the component.

You can learn more about the theory behind this approach in [this article](https://cobwwweb.com/simplify-components-by-separating-logic-from-presentation-using-adapters.html). Sean also wrote [an article on a Gatsby-specific implementation](https://cobwwweb.com/introducing-component-adapters-into-gatsby.html) that may be worthwhile if you want to learn more about the approach.

:::info
[Here is an example](https://github.com/ample/covingtonclassicalacademy-org/blob/master/src/components/calendar) of a component with an adapter out in the wild.

It's a calendar built on top of [React Big Calendar](http://jquense.github.io/react-big-calendar/examples/index.html), which accepts an array of events and passes them on to the RBC component, after adjusting some configuration.

The component itself knows nothing about the project's data source. But the adapter does. It retrieves the data from the data source and then wraps the calendar component (which wraps RC). So, when it's [used in production](https://github.com/ample/covingtonclassicalacademy-org/blob/master/src/sections/container/index.js#L10) we use the adapter. But the static calendar can also work on its own.
:::

### `component.js`

This is the main component. If you're used to only ever seeing a single file represent a component, this is that file.

For a detailed reference on best practices in keeping this file organized and clean, see [the syntax styleguide](/code/syntax-styleguides/#react-components) for React components.

### `fixtures.js`

Fixtures are static sets of data that primarily serve two purposes:

1. They feed into components to provide prop values during development. This enables front-end developers to move quickly without worrying about the state or structure of the data source.
2. They are used for testing (this is the traditional use of a [fixture](https://en.wikipedia.org/wiki/Test_fixture)).

### `index.js`

The index file is the entry point for the files within the project. Often it looks something like this:

```jsx
import component from "./component"
import fixtures from "./fixtures"

export default component

export { component, fixtures }
```

What this does is provide a front door for the component, while enabling other important pieces to be included. This provides us with three primary benefits:

1. When a component is consumed by another, it doesn't matter what the structure is — the component directory's default export is automatically picked up, as long as the consuming component imports the component from the index file.
2. It puts all relevant exports in one place. Consider that a test spec could load both the component and the fixture from a single file.
3. It provides a means to contextually switch the default export depending on the environment. This comes in handy when working with adapters.

:::tip
The line `export { component, fixtures }` provides a means for importing all relevant files from the `index.js` file rather than need multiple import lines.

In other words, you can do this:

```jsx
import { component as Button, fixtures } from "@src/components/button"
```

Instead of this:

```jsx
import Button from "@src/components/button/component"
import fixtures from "@src/components/button/fixtures"
```

:::

### `styles.module.scss`

The stylesheet that serves the component. We typically work with [CSS Modules](https://github.com/css-modules/css-modules), which is supported by default with Gatsby.

These style files are simply [Sass](https://sass-lang.com/) files that are consumed by the component.

### `test.spec.js`

The main test spec for the component. See [the Testing article](/code/testing/) for more information on our approach to testing.

Typically we will test the rendering of the component, along with any logical pieces that it brings.

## Sharing Components & Subcomponents

It's really easy for a project's files to get out of hand if not organized well. Simply dumping components into some `src/components` directory is not scalable. To keep our projects organized, we follow these few principles:

- Components available at the top-most level in the primary components directory are shared (or available to share) among any other component (e.g. `src/components/button/`).
- Groups of components that serve a purpose other than being a shared component can live in their own top-level source directory. For example, instead of treating templates (which may be components) as a component, they could live in a `src/templates/` directory.
- Components that exist only as a subcomponent of one other component should live within that directory (e.g. `src/layout/header/`).

For scenarios that fall outside these, use your best judgment. If you're looking for a good example, refer to the [Gatsby Starter](https://github.com/ample/gatsby-starter-ample).

## Naming Conventions

Naming is hard. How about some rules to help?

### Files

Files and directories should be written in kebab-case, which means all lower case with hyphens separating words.

### Components

As much as possible, components should be named for what they are or what they do. Keep it semantic. They should be named in PascalCase and match, as closely as possible, to the filename. For example, if the directory for the component is `solution-finder`, the component object should be `SolutionFinder`.

### Props

We're a little more particular about props:

- Props keys use snake_case (e.g. `<MyComponent some_prop="value" />`). While this may seem awkward, it provides parity with the naming conventions of the CMS products we tend to use.
- The prop `theme` is used to designate variations on a component. This may help a component wrap itself in another component, passing the props down, or it may simply get passed to the stylesheet.
- Options within a prop should also use snake_case. This is due to limitations with Sass and CSS Modules. For example, if `theme` is a prop and one option is a red outline, it should be `outline_red` (or `red_outline`).
- When multiple words may work, stick with consistency. For example, if there is one main body of text for a component, call it `body` (as we've done in the starters), even when it may be _acting_ as a description.

As always, use your best judgment. If you aren't sure, look at some examples. The [Gatsby Starter](https://github.com/ample/gatsby-starter-ample) is a good resource.

## Helper Methods

We're still forming opinions on helper methods. The approach has varied depending on the complexity of the helper methods. Typically we put helpers in their own file. When they serve only a single component, we tend to keep that file within the component's directory, using the component's test file to also run tests on the helper.

The idea behind helpers is that they are providing some sort of logical support. Therefore, **every helper should be tested**.

If you run into a situation where you think you need a shared helper, especially in a Gatsby project, that means one of two things:

1. There's a more Gatsby-ish way of doing what you're doing.
2. You should be creating a plugin.

## Documentation

In an ideal world, our code is self-documenting. But that's not how it usually works. And it's nice to have a quick reference to know the role of each prop within any given component.

Therefore, every prop for every component should be validated [using prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html). Each prop within the `propTypes` object should be preceded by a comment that provides a quick description on the prop's role and use.
